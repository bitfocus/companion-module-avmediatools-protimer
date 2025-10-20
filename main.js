const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const { configFields } = require('./config.js')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariableDefinitions = require('./variables')
const UpdatePresets = require('./presets')
const got = require('got')

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
		this.timerInterval = null
	}

	async init(config) {
		this.config = config

		this.updateStatus(InstanceStatus.Ok)

		this.updateActions()
		this.updateFeedbacks()
		this.updateVariableDefinitions()
		this.updatePresets()

		this.startTimerPolling()
	}

	// Helper functie om tijd op te splitsen
	parseTimeParts(time) {
		if (!time) time = '00:00:00' // fallback
		const parts = time.split(':').map(p => parseInt(p, 10))
		let hh = 0, mm = 0, ss = 0

		if (parts.length === 3) [hh, mm, ss] = parts
		else if (parts.length === 2) [mm, ss] = parts
		else if (parts.length === 1) [ss] = parts

		const HH = String(hh).padStart(2,'0')
		const MM = String(mm).padStart(2,'0')
		const SS = String(ss).padStart(2,'0')
		const HHMMSS = `${HH}:${MM}:${SS}`
		const MMSS = `${MM}:${SS}`

		return { HH, MM, SS, HHMMSS, MMSS }
	}

	startTimerPolling() {
		if (!this.config?.host || !this.config?.port) return
	
		const baseUrl = `http://${this.config.host}:${this.config.port}/api/`
		let retryTimeout = null
	
		// ⬇️ Bewaar deze status op instance-niveau
		if (this.wasDisconnected === undefined) this.wasDisconnected = false
	
		const updateTimerStatus = async () => {
			try {
				const res = await got.get(baseUrl + 'timer/state', { timeout: 1000 }).json()
	
				// Timer variables
				const timerValue = res.time || '00:00:00'
				const t = this.parseTimeParts(timerValue)
				this.setVariableValues({
					timer_time: t.HHMMSS,
					timer_mmss: t.MMSS,
					timer_hh: t.HH,
					timer_mm: t.MM,
					timer_ss: t.SS,
					timer_state: res.state || 'stopped'
				})
	
				// Clock variables
				const clockValue = res.clock || '00:00:00'
				const c = this.parseTimeParts(clockValue)
				this.setVariableValues({
					clock_time: c.HHMMSS,
					clock_mmss: c.MMSS,
					clock_hh: c.HH,
					clock_mm: c.MM,
					clock_ss: c.SS
				})
	
				this.checkFeedbacks('timer_state')
				this.updateStatus(InstanceStatus.Ok)
	
				// ✅ Connection restored melding
				if (this.wasDisconnected) {
					this.log('info', '✅ Connection to ProTimer restored')
					this.wasDisconnected = false
				}
			} catch (e) {
				if (!this.wasDisconnected) {
					this.log('warn', `⚠️ ProTimer not reachable: ${e.message}`)
					this.wasDisconnected = true
				}
	
				this.updateStatus(InstanceStatus.ConnectionFailure)
	
				if (this.timerInterval) {
					clearInterval(this.timerInterval)
					this.timerInterval = null
				}
	
				if (!retryTimeout) {
					retryTimeout = setTimeout(() => {
						retryTimeout = null
						this.startTimerPolling()
					}, 5000)
				}
			}
		}
	
		if (this.timerInterval) clearInterval(this.timerInterval)
		this.timerInterval = setInterval(updateTimerStatus, 1000)
		updateTimerStatus()
	}
		
	
	async destroy() {
		this.log('debug', 'destroy')
		if (this.timerInterval) clearInterval(this.timerInterval)
	}

	async configUpdated(config) {
		this.config = config
		if (this.timerInterval) clearInterval(this.timerInterval)
		if (this.config.enableFeedbacks) {
			this.startTimerPolling()
		}
	}

	getConfigFields() {
		return configFields
	}

	updateActions() { UpdateActions(this) }
	updateFeedbacks() { UpdateFeedbacks(this) }
	updateVariableDefinitions() { UpdateVariableDefinitions(this) }
	updatePresets() { UpdatePresets(this) }
}

runEntrypoint(ModuleInstance, UpgradeScripts)
