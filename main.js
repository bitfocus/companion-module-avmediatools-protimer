import { InstanceBase, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { GetActions } from './actions.js'
import { configFields } from './config.js'
import { upgradeScripts } from './upgrades.js'

class protimerInstance extends InstanceBase {
	configUpdated(config) {
		this.config = config
		this.initActions()
	}

	init(config) {
		this.config = config
		this.updateStatus(InstanceStatus.Ok)
		this.initActions()
	}

	// Return config fields for web config
	getConfigFields() {
		return configFields
	}

	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy', 'Module destroyed')
	}

	initActions() {
		this.setActionDefinitions(GetActions(this))
	}
}

runEntrypoint(protimerInstance, upgradeScripts)
