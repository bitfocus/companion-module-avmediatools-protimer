const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const { configFields } = require('./config.js')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariableDefinitions = require('./variables')
const UpdatePresets = require('./presets')
const got = require('got') // voeg got toe als dependency

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
		this.timerInterval = null
	}

	async init(config) {
		this.config = config

		this.updateStatus(InstanceStatus.Ok)

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
		this.updatePresets()

		// Start timer polling
		this.startTimerPolling()
	}

	// Polling functie
	startTimerPolling() {
		if (!this.config?.host || !this.config?.port) return

		const baseUrl = `http://${this.config.host}:${this.config.port}/api/`

		const updateTimerStatus = async () => {
			try {
				const res = await got.get(baseUrl + 'timer/state').json()

				// timer_time variable
				if (res.time) {
					this.setVariableValues({ timer_time: res.time })
				} else {
					this.setVariableValues({ timer_time: '00:00:00' })
				}

				// timer_state variable
				this.setVariableValues({ timer_state: res.state })

				// trigger feedback updates
				this.checkFeedbacks('timer_state')

				this.updateStatus(InstanceStatus.Ok)
			} catch (e) {
				this.updateStatus(InstanceStatus.UnknownError)
				this.log('error', `Failed to get timer state: ${e.message}`)
			}
		}

		// interval instellen (1 seconde)
		if (this.timerInterval) clearInterval(this.timerInterval)
		this.timerInterval = setInterval(updateTimerStatus, 1000)

		// eerste update direct uitvoeren
		updateTimerStatus()
	}

	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
		if (this.timerInterval) clearInterval(this.timerInterval)
	}

	async configUpdated(config) {
		this.config = config
		// herstart de polling bij config update
		if (this.timerInterval) clearInterval(this.timerInterval)
		this.startTimerPolling()
	}

	// Return config fields for web config
	getConfigFields() {
		return configFields
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}

	updatePresets() {
		UpdatePresets(this)
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
