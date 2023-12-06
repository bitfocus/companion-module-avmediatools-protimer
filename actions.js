import got from 'got'
import { InstanceStatus } from '@companion-module/base'

export const GetActions = (base) => {
	if (!base.config.host) return
	const baseUrl = `http://${base.config.host}:${base.config.port}/api/`
	let actions = {
		start: {
			name: 'Timer start',
			options: [],
			callback: () => {
				try {
					got.post(baseUrl + 'timer/start')
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		stop: {
			name: 'Timer stop',
			options: [],
			callback: () => {
				try {
					got.post(baseUrl + 'timer/stop')
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		pause: {
			name: 'Timer pause',
			options: [],
			callback: () => {
				try {
					got.post(baseUrl + 'timer/pause')
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		pause_toggle: {
			name: 'Toggle pause resume',
			options: [],
			callback: () => {
				try {
					got.post(baseUrl + 'timer/toggle_pause')
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		timer_update: {
			name: 'Timer update',
			options: [
				{
					type: 'textinput',
					label: 'Seconds (+/- seconds)',
					id: 'seconds',
					default: '+30',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let updateSeconds = await context.parseVariablesInString(action.options.seconds)
				try {
					base.log('debug', `Updating timer by ${updateSeconds} seconds`)
					got.post(baseUrl + 'timer/update/' + updateSeconds)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		blackout: {
			name: 'Screen blackout',
			options: [],
			callback: () => {
				try {
					got.post(baseUrl + 'screen/toggle-blackout')
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

		// timer_set: {
		// 	name: 'timer_set',
		// 	options: [],
		// 	callback: async (action, context) => {
		// 		const { url, options } = await base.prepareQuery(context, action, true)

		// 		try {
		// 			await got.post(url, options)

		// 			base.updateStatus(InstanceStatus.Ok)
		// 		} catch (e) {
		// 			base.log('error', `HTTP POST Request failed (${e.message})`)
		// 			base.updateStatus(InstanceStatus.UnknownError, e.code)
		// 		}
		// 	},
		// },
	}
	return actions
}