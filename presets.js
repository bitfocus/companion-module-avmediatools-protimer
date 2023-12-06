import { combineRgb } from '@companion-module/base'

export const GetPresetsList = () => {
	const presets = {}

	presets['start'] = {
		name: 'timer_start',
		type: 'button',
		category: 'Basic',
		style: {
			text: 'Start timer',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		feedbacks: [],
		steps: [
			{
				down: [
					{
						actionId: 'start',
						options: {},
					},
				],
				up: [],
			},
		],
	}

	presets['timer_update'] = {
		name: 'timer_update',
		type: 'button',
		category: 'Basic',
		style: {
			text: '+30',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		feedbacks: [],
		steps: [
			{
				down: [
					{
						actionId: 'timer_update',
						options: {
                            seconds: '+30',
                        },
					},
				],
				up: [],
			},
		],
	}
return presets
}