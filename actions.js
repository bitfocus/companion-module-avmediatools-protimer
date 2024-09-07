import got from 'got'
import { InstanceStatus } from '@companion-module/base'

export const GetActions = (base) => {
	if (!base.config.host) return
	const baseUrl = `http://${base.config.host}:${base.config.port}/api/`
	let actions = {
		
		// Timer
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
			name: 'Timer toggle pause/resume',
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
		timer_set: {
			name: 'Timer set',
			options: [
				{
					type: 'textinput',
					label: 'HH:MM:SS',
					id: 'time',
					default: '00:01:00',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let setTime = await context.parseVariablesInString(action.options.time)
				try {
					base.log('debug', `Set timer by ${setTime}`)
					got.post(baseUrl + 'timer/set/' + setTime)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		timer: {
			name: 'Timer (countdown, countdown to zero)',
			options: [
				{
					type: 'textinput',
					label: 'HH:MM:SS',
					id: 'time',
					default: '00:01:00',
					useVariables: true,
				},
				{
					id: 'opt',
					type: 'dropdown',
					label: 'Select timer',
					choices: [
						{ id: 'countdown', label: 'Countdown' },
						{ id: 'countdown_to_zero', label: 'Countdown to zero' },
					],
					default: 'countdown'
				}
			],
			callback: async (action, context) => {
				let setTime = await context.parseVariablesInString(action.options.time)
				let opt = await context.parseVariablesInString(action.options.opt)
				try {
					base.log('debug', `Timer (${setTime})`)
					got.post(baseUrl + 'timer/' + opt + '/' + setTime)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		timer_countup: {
			name: 'Timer countup',
			options: [
				{
					type: 'textinput',
					label: 'HH:MM:SS',
					id: 'time',
					default: '00:00:00',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let setTime = await context.parseVariablesInString(action.options.time)
				try {
					base.log('debug', `Countup (${setTime})`)
					got.post(baseUrl + 'timer/countup/' + setTime)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		timer_countdown_to_time: {
			name: 'Timer countdown to time',
			options: [
				{
					type: 'textinput',
					label: 'HH:MM:SS',
					id: 'time',
					default: '00:00:00',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let setTime = await context.parseVariablesInString(action.options.time)
				try {
					base.log('debug', `Countdown to time (${setTime})`)
					got.post(baseUrl + 'timer/countdown_to_time/' + setTime)
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

		// Screen
		blackout: {
			name: 'Screen blackout',
			options: [
				{
					id: 'val',
					type: 'dropdown',
					label: 'Select option',
					choices: [
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
						{ id: 'toggle', label: 'Toggle' },
					],
					default: 'toggle'
				}
			],
			callback: async (action, context) => {
				let val = await context.parseVariablesInString(action.options.val)
				try {
					base.log('debug', `Blackout ${val}`)
					got.post(baseUrl + 'screen/blackout/' + val)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

		// Message
		message_toggle: {
			name: 'Message toggle',
			options: [
				{
					id: 'val',
					type: 'dropdown',
					label: 'Select option',
					choices: [
						{ id: 'show', label: 'Show' },
						{ id: 'hide', label: 'Hide' },
						{ id: 'toggle', label: 'Toggle' },
					],
					default: 'toggle'
				}
			],
			callback: async (action, context) => {
				let val = await context.parseVariablesInString(action.options.val)
				try {
					base.log('debug', `message ${val}`)
					got.post(baseUrl + 'message/' + val)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		message_set: {
			name: 'Message set',
			options: [
				{
					type: 'textinput',
					label: 'message',
					id: 'message',
					default: '',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let setMessage = await context.parseVariablesInString(action.options.message)
				try {
					base.log('debug', `Message set (${setMessage})`)
					got.post(baseUrl + 'message/set/' + setMessage)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		message_send: {
			name: 'Message send',
			options: [
				{
					type: 'textinput',
					label: 'message',
					id: 'message',
					default: '',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let setMessage = await context.parseVariablesInString(action.options.message)
				try {
					base.log('debug', `Message send (${setMessage})`)
					got.post(baseUrl + 'message/send/' + setMessage)
					base.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					base.log('error', `HTTP POST Request failed (${e.message})`)
					base.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

	}
	return actions
}