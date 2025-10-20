const got = require('got')
const { InstanceStatus } = require('@companion-module/base')

module.exports = function (self) {
	if (!self.config?.host || !self.config?.port) {
		self.updateStatus(InstanceStatus.BadConfig, 'Host/Port missing')
		self.log('warn', 'Config not set yet')
		return
	}

	const baseUrl = `http://${self.config.host}:${self.config.port}/api/`

	self.setActionDefinitions({

		// ---- Timer actions ---- //
		start: {
			name: 'Timer start',
			options: [],
			callback: async () => {
				try {
					await got.post(baseUrl + 'timer/start')
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		stop: {
			name: 'Timer stop',
			options: [],
			callback: async () => {
				try {
					await got.post(baseUrl + 'timer/stop')
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		pause: {
			name: 'Timer pause',
			options: [],
			callback: async () => {
				try {
					await got.post(baseUrl + 'timer/pause')
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		pause_toggle: {
			name: 'Timer toggle pause/resume',
			options: [],
			callback: async () => {
				try {
					await got.post(baseUrl + 'timer/toggle_pause')
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
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
					self.log('debug', `Set timer by ${setTime}`)
					await got.post(baseUrl + 'timer/set/' + setTime)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
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
					default: 'countdown',
				},
			],
			callback: async (action, context) => {
				let setTime = await context.parseVariablesInString(action.options.time)
				let opt = await context.parseVariablesInString(action.options.opt)
				try {
					self.log('debug', `Timer (${setTime})`)
					await got.post(baseUrl + 'timer/' + opt + '/' + setTime)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
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
					self.log('debug', `Countup (${setTime})`)
					await got.post(baseUrl + 'timer/countup/' + setTime)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
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
				{
					id: 'opt',
					type: 'dropdown',
					label: 'Clear at zero',
					choices: [
						{ id: '', label: 'On' },
						{ id: 'beyondzero/', label: 'Off' },
					],
					default: 'beyondzero/',
				},
			],
			callback: async (action, context) => {
				let setTime = await context.parseVariablesInString(action.options.time)
				let opt = await context.parseVariablesInString(action.options.opt)
				try {
					self.log('debug', `Countdown to time (${setTime})`)
					await got.post(baseUrl + 'timer/countdown_to_time/' + opt + setTime)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
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
					self.log('debug', `Updating timer by ${updateSeconds} seconds`)
					await got.post(baseUrl + 'timer/update/' + updateSeconds)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

		timer_blinking: {
			name: 'Timer blinking',
			options: [
				{
					id: 'opt',
					type: 'dropdown',
					label: 'Select option',
					choices: [
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
						{ id: 'toggle', label: 'Toggle' },
					],
					default: 'toggle',
				},
			],
			callback: async (action, context) => {
				let opt = await context.parseVariablesInString(action.options.opt)
				try {
					self.log('debug', `Blinking ${opt}`)
					await got.post(baseUrl + 'timer/blinking/' + opt)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

		// ---- Screen ---- //
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
					default: 'toggle',
				},
			],
			callback: async (action, context) => {
				let val = await context.parseVariablesInString(action.options.val)
				try {
					self.log('debug', `Blackout ${val}`)
					await got.post(baseUrl + 'screen/blackout/' + val)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

		// ---- Message ---- //
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
					default: 'toggle',
				},
			],
			callback: async (action, context) => {
				let val = await context.parseVariablesInString(action.options.val)
				try {
					self.log('debug', `Message ${val}`)
					await got.post(baseUrl + 'message/' + val)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

		message_set: {
			name: 'Message set',
			options: [
				{
					type: 'textinput',
					label: 'Message',
					id: 'message',
					default: '',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let setMessage = await context.parseVariablesInString(action.options.message)
				try {
					self.log('debug', `Message set (${setMessage})`)
					await got.post(baseUrl + 'message/set/' + setMessage)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},

		message_send: {
			name: 'Message send',
			options: [
				{
					type: 'textinput',
					label: 'Message',
					id: 'message',
					default: '',
					useVariables: true,
				},
			],
			callback: async (action, context) => {
				let setMessage = await context.parseVariablesInString(action.options.message)
				try {
					self.log('debug', `Message send (${setMessage})`)
					await got.post(baseUrl + 'message/send/' + setMessage)
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},
		
		// ---- Settings ---- //
		settings: {
			name: 'Change settings',
			options: [
				// Hoofd dropdown
				{
					id: 'opt',
					type: 'dropdown',
					label: 'Select option',
					choices: [
						{ id: 'displayMode', label: 'Display mode' },
						{ id: 'nameSize', label: 'Name size' },
						{ id: 'textSize', label: 'Text size' },
						{ id: 'textColor', label: 'Text color' },
						{ id: 'boxColor', label: 'Box color' },
						{ id: 'bgColor', label: 'Background color' },
						{ id: 'bgTransparency', label: 'Background transparency' },
						{ id: 'clockColor', label: 'Clock color' },
						{ id: 'clockName', label: 'Clock name' },
						{ id: 'clockColorBar', label: 'Clock color bar' },
						{ id: 'clockBarActive', label: 'Clock bar active' },
						{ id: 'timerColor', label: 'Timer color' },
						{ id: 'timerName', label: 'Timer name' },
						{ id: 'timerColorBar', label: 'Timer color bar' },
						{ id: 'timerBarActive', label: 'Timer bar active' },
						{ id: 'qlabColor', label: 'Qlab color' },
						{ id: 'qlabName', label: 'Qlab name' },
						{ id: 'qlabColorBar', label: 'Qlab color bar' },
						{ id: 'qlabBarActive', label: 'Qlab bar active' },
					],
					default: 'displayMode',
				},
		
				// Specifieke inputs per optie
				{
					id: 'value_displayMode',
					type: 'dropdown',
					label: 'Display Mode',
					choices: [
						{ id: 'all', label: 'All' },
						{ id: 'singleTop', label: 'Single Top' },
						{ id: 'singleBottom', label: 'Single Bottom' },
						{ id: 'sideBySideTop', label: 'Side by Side Top' },
						{ id: 'sideBySideBottom', label: 'Side by Side Bottom' },
					],
					default: 'all',
					isVisible: (opts) => opts.opt === 'displayMode',
				},
				{
					id: 'value_nameSize',
					type: 'number',
					label: 'Name Size',
					min: 1,
					max: 200,
					default: 2,
					isVisible: (opts) => opts.opt === 'nameSize',
				},
				{
					id: 'value_textSize',
					type: 'number',
					label: 'Text Size',
					min: 1,
					max: 200,
					default: 10,
					isVisible: (opts) => opts.opt === 'textSize',
				},
				{
					id: 'value_bgTransparency',
					type: 'number',
					label: 'Background Transparency',
					min: 0,
					max: 1,
					step: 0.01,
					default: 1,
					isVisible: (opts) => opts.opt === 'bgTransparency',
				},
				{
					id: 'value_textColor',
					type: 'colorpicker',
					label: 'Text Color',
					default: '#ffffff',
					isVisible: (opts) => opts.opt === 'textColor',
				},
				{
					id: 'value_boxColor',
					type: 'colorpicker',
					label: 'Box Color',
					default: '#000000',
					isVisible: (opts) => opts.opt === 'boxColor',
				},
				{
					id: 'value_bgColor',
					type: 'colorpicker',
					label: 'Background Color',
					default: '#000000',
					isVisible: (opts) => opts.opt === 'bgColor',
				},
				{
					id: 'value_clockColor',
					type: 'colorpicker',
					label: 'Clock Color',
					default: '#ffffff',
					isVisible: (opts) => opts.opt === 'clockColor',
				},
				{
					id: 'value_clockColorBar',
					type: 'colorpicker',
					label: 'Clock Color Bar',
					default: '#ffffff',
					isVisible: (opts) => opts.opt === 'clockColorBar',
				},
				{
					id: 'value_timerColor',
					type: 'colorpicker',
					label: 'Timer Color',
					default: '#ffff00',
					isVisible: (opts) => opts.opt === 'timerColor',
				},
				{
					id: 'value_timerColorBar',
					type: 'colorpicker',
					label: 'Timer Color Bar',
					default: '#ffff00',
					isVisible: (opts) => opts.opt === 'timerColorBar',
				},
				{
					id: 'value_qlabColor',
					type: 'colorpicker',
					label: 'Qlab Color',
					default: '#00ff00',
					isVisible: (opts) => opts.opt === 'qlabColor',
				},
				{
					id: 'value_qlabColorBar',
					type: 'colorpicker',
					label: 'Qlab Color Bar',
					default: '#00ff00',
					isVisible: (opts) => opts.opt === 'qlabColorBar',
				},
				{
					id: 'value_clockBarActive',
					type: 'checkbox',
					label: 'Clock Bar Active',
					default: true,
					isVisible: (opts) => opts.opt === 'clockBarActive',
				},
				{
					id: 'value_timerBarActive',
					type: 'checkbox',
					label: 'Timer Bar Active',
					default: true,
					isVisible: (opts) => opts.opt === 'timerBarActive',
				},
				{
					id: 'value_qlabBarActive',
					type: 'checkbox',
					label: 'Qlab Bar Active',
					default: true,
					isVisible: (opts) => opts.opt === 'qlabBarActive',
				},
				{
					id: 'value_clockName',
					type: 'textinput',
					label: 'Clock Name',
					default: 'Clock',
					isVisible: (opts) => opts.opt === 'clockName',
					useVariables: true,
				},
				{
					id: 'value_timerName',
					type: 'textinput',
					label: 'Timer Name',
					default: 'Timer',
					isVisible: (opts) => opts.opt === 'timerName',
					useVariables: true,
				},
				{
					id: 'value_qlabName',
					type: 'textinput',
					label: 'Qlab Name',
					default: 'Qlab - ',
					isVisible: (opts) => opts.opt === 'qlabName',
					useVariables: true,
				},
				{
					type: 'textinput',
					label: 'Value',
					id: 'value',
					default: '',
					useVariables: true,
					isVisible: (opts) =>
						![
							'displayMode','nameSize','textSize','bgTransparency',
							'textColor','boxColor','bgColor',
							'clockColor','clockColorBar','timerColor','timerColorBar',
							'qlabColor','qlabColorBar',
							'clockBarActive','timerBarActive','qlabBarActive',
							'clockName','timerName','qlabName'
						].includes(opts.opt),
				},
			],
			callback: async (action, context) => {
				let opt = await context.parseVariablesInString(action.options.opt)
				let value = ''
		
				if (opt === 'displayMode') value = action.options.value_displayMode
				else if (opt === 'nameSize') value = action.options.value_nameSize
				else if (opt === 'textSize') value = action.options.value_textSize
				else if (opt === 'bgTransparency') value = action.options.value_bgTransparency
				else if (['textColor','boxColor','bgColor','clockColor','clockColorBar','timerColor','timerColorBar','qlabColor','qlabColorBar'].includes(opt)) {
					let raw = action.options[`value_${opt}`]
					value = (typeof raw === 'string') ? raw : `#${(raw >>> 0).toString(16).padStart(6,'0')}`
				}
				else if (['clockBarActive','timerBarActive','qlabBarActive'].includes(opt)) {
					value = !!action.options[`value_${opt}`]
				}
				else if (['clockName','timerName','qlabName'].includes(opt)) {
					let raw = action.options[`value_${opt}`]
					value = (typeof raw === 'string') ? raw : String(raw || '')
				}
				else {
					value = await context.parseVariablesInString(action.options.value)
				}
		
				try {
					self.log('debug', `Set ${opt} = ${value}`)
					await got.post(baseUrl + 'set/settings', { json: { [opt]: value } })
					self.updateStatus(InstanceStatus.Ok)
				} catch (e) {
					self.log('error', `HTTP POST Request failed (${e.message})`)
					self.updateStatus(InstanceStatus.UnknownError, e.code)
				}
			},
		},		

	})
}
