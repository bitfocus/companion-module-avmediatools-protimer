import { combineRgb } from '@companion-module/base'
import Icons from './icons.js'

export const GetPresetsList = () => {
	const presets = {}

	const options = {
		"plus": "-",
		"min": "+"
	};
	  
	  // Basic
	  presets['timer_start'] = {
		name: 'START',
		type: 'button',
		category: 'Basic',
		style: {
		  text: 'START',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(0, 255, 0),

		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_BLACK,
		  pngalignment: 'left:center',
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


	  presets['timer_stop'] = {
		name: 'STOP',
		type: 'button',
		category: 'Basic',
		style: {
		  text: 'STOP',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 0, 0),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_BLACK,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'stop',
				options: {},
			  },
			],
			up: [],
		  },
		],
	  }
		  
	
	  presets['timer_pause'] = {
		name: 'PAUSE',
		type: 'button',
		category: 'Basic',
		style: {
		  text: 'PAUSE',
		  size: '14',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 178, 66),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_BLACK,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'pause',
				options: {},
			  },
			],
			up: [],
		  },
		],
	  }
		  
	
	  presets['timer_pause_toggle'] = {
		name: 'PAUSE TOGGLE',
		type: 'button',
		category: 'Basic',
		style: {
		  text: 'PAUSE TOGGLE',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 178, 66),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_BLACK,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'pause_toggle',
				options: {},
			  },
			],
			up: [],
		  },
		],
	  }
		  
	
	  presets['Blackout_on'] = {
		name: 'BLACK\nOUT ON',
		type: 'button',
		category: 'Basic',
		style: {
		  text: 'BLACK\nOUT ON',
		  size: '14',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(102, 0, 0),
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'blackout',
				options: {
				  val: 'on',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
		  
	
	  presets['Blackout_off'] = {
		name: 'BLACK\nOUT OFF',
		type: 'button',
		category: 'Basic',
		style: {
		  text: 'BLACK\nOUT OFF',
		  size: '14',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 102, 0),
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'blackout',
				options: {
				  val: 'off',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
		  
	
	  presets['Blackout_toggle'] = {
		name: 'BLACK\nOUT TOGGLE',
		type: 'button',
		category: 'Basic',
		style: {
		  text: 'BLACK\nOUT TOGGLE',
		  size: '14',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(36, 36, 36),
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'blackout',
				options: {
				  val: 'toggle',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  
	  presets['timer_basic_set_1_min'] = {
		name: '1 min',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '1 min',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(218, 218, 218),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_SET,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_set',
				options: {
				  time: '00:01:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['timer_basic_set_5_min'] = {
		name: '5 min',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '5 min',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(218, 218, 218),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_SET,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_set',
				options: {
				  time: '00:05:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['timer_basic_1_min'] = {
		name: 'TIMER\n1 min',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '1 min',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer',
				options: {
				  time: '00:01:00',
				  opt: 'countdown',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['timer_basic_5_min'] = {
		name: 'TIMER\n5 min',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '5 min',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer',
				options: {
				  time: '00:05:00',
				  opt: 'countdown',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  
	  presets['timer_basic_update_min_1_min'] = {
		name: '-1 min',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '-1 min',
		  size: '14',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 0),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_UPDATE_MIN,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_update',
				options: {
				  seconds: '-60',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['timer_basic_update_plus_1_min'] = {
		name: '+1 min',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '+1 min',
		  size: '14',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 0),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_UPDATE_PLUS,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_update',
				options: {
				  seconds: '+60',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['timer_count_down_1_min_to_zero'] = {
		name: '1 min to zero',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '1 min',
		  size: '16',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 0),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_TO,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer',
				options: {
				  time: '00:01:00',
				  opt: 'countdown_to_zero',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['timer_time_up'] = {
		name: 'Timer count up',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '00:00:00',
		  size: '14',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 0),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_UP,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_countup',
				options: {
				  time: '00:00:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['timer_time_to'] = {
		name: 'Time to 12:00',
		type: 'button',
		category: 'Basic',
		style: {
		  text: '12:00',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 0),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_UP,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_countdown_to_time',
				options: {
				  time: '12:00:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	
	  // Message 
	  presets['message_show'] = {
		name: 'Show',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Show',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(192, 255, 192),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_toggle',
				options: {
				  val: 'show',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['message_hide'] = {
		name: 'Hide',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Hide',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 192, 192),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_toggle',
				options: {
				  val: 'hide',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['message_toggle'] = {
		name: 'Toggle',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Toggle',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 223, 192),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_toggle',
				options: {
				  val: 'toggle',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['set_message'] = {
		name: 'Message',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Message',
		  size: '14',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(205, 205, 205),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SET,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_set',
				options: {
				  message: 'Message',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message'] = {
		name: 'Message',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Message',
		  size: '14',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Message',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_no_time_left'] = {
		name: 'No time left!',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'No time left!',
		  size: '12',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'No time left!',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_please_wrap_up'] = {
		name: 'Please_wrap_up!',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Please\nwrap up!',
		  size: '12',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Please wrap up!',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_caller_present'] = {
		name: 'caller present',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Caller present',
		  size: '12',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Caller present',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_video_is_ready'] = {
		name: 'Video is ready',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Video is ready',
		  size: '12',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Video is ready',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_powerpoint_ready'] = {
		name: 'PowerPoint ready',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'PowerPoint ready',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'PowerPoint ready',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_keynote_ready'] = {
		name: 'KeyNote ready',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'KeyNote ready',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'KeyNote ready',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  
	  presets['send_message_lets_fill_this_time_gap'] = {
		name: 'Let\'s fill this time gap',
		type: 'button',
		category: 'Message',
		style: {
		  text: '.   Let\'s\nfill this\ntime gap',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Let\'s fill this time gap',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_buy_some_time'] = {
		name: 'Buy some time',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Buy some time',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Buy some time',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_keep_going'] = {
		name: 'Keep going',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Keep going',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Keep going',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_use_the_hand_mic'] = {
		name: 'Use the hand mic',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Use the hand mic',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Use the hand mic',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_break'] = {
		name: 'Break',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Break',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Break',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	
	  presets['send_message_live'] = {
		name: 'live!',
		type: 'button',
		category: 'Message',
		style: {
		  text: 'Live!',
		  size: '10',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_MESSAGE_SEND,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Live!',
				},
			  },
			],
			up: [],
		  },
		],
	  }
		  
	  // Update Timers
	  for (const [key, val] of Object.entries(options)) {
	  presets['timer_update_' + key + '_30_sec'] = {
		name: val + '30 sec',
		type: 'button',
		category: 'Update timers',
		style: {
		  text: val + '30 sec',
		  size: '14',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 0),
		  alignment: 'center:bottom',
		  png64: Icons['ICON_UPDATE_' + key.toUpperCase()],
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_update',
				options: {
				  seconds: val + '30',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  }
	
	  for (let i = 1; i <= 59; i++) {
		  var m = i * 60;
		for (const [key, val] of Object.entries(options)) {
		  presets['timer_update_' + key + '_' + i + '_min'] = {
			name: val + i + ' min',
			type: 'button',
			category: 'Update timers',
			style: {
			  text: val + i + ' min',
			  size: '14',
			  color: combineRgb(0, 0, 0),
			  bgcolor: combineRgb(255, 255, 0),
			  alignment: 'center:bottom',
			  png64: Icons['ICON_UPDATE_' + key.toUpperCase()],
			  pngalignment: 'left:center',
			},
			feedbacks: [],
			steps: [
			{
			  down: [
			  {
				actionId: 'timer_update',
				options: {
				seconds: val + m,
			  },
			  },
			  ],
			  up: [],
			},
			],
		  }
		}
	  }
	
	  for (const [key, val] of Object.entries(options)) {
	  presets['timer_update_' + key + '_1_hour'] = {
		name: val + '1 hour',
		type: 'button',
		category: 'Update timers',
		style: {
		  text: val + '1 hour',
		  size: '14',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 0),
		  alignment: 'center:bottom',
		  png64: Icons['ICON_UPDATE_' + key.toUpperCase()],
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_update',
				options: {
				  seconds: val + '3600',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  }
		  
	  // Start Timers
	  presets['timer_30_sec'] = {
		name: '30 sec',
		type: 'button',
		category: 'Start timers',
		style: {
		  text: '30 sec',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer',
				options: {
				  time: '00:00:30',
				  opt: 'countdown',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
		  
	  for (let i = 1; i <= 59; i++) {
		var m = i.toString().padStart(2,0);
	
		presets['timer_' + i + '_min'] = {
			name: i + ' min',
			type: 'button',
			category: 'Start timers',
			style: {
		  text: i + ' min',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER,
		  pngalignment: 'left:center',
			},
			feedbacks: [],
			steps: [
			{
				down: [
				{
					actionId: 'timer',
					options: {
						time: '00:' + m + ':00',
						opt: 'countdown',
				},
				},
				],
				up: [],
			},
			],
		}
	  }
		  
	  presets['timer_1_hour'] = {
		name: '1 hour',
		type: 'button',
		category: 'Start timers',
		style: {
		  text: '1 hour',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 255),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer',
				options: {
				  time: '01:00:00',
				  opt: 'countdown',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
		  
	  // Start Timers
	  presets['timer_set_30_sec'] = {
		name: '30 sec',
		type: 'button',
		category: 'Set timers',
		style: {
		  text: '30 sec',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(218, 218, 218),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_SET,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_set',
				options: {
				  time: '00:00:30',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
		  
	  for (let i = 1; i <= 59; i++) {
		var m = i.toString().padStart(2,0);
	
		presets['timer_set_' + i + '_min'] = {
			name: i + ' min',
			type: 'button',
			category: 'Set timers',
			style: {
		  text: i + ' min',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(218, 218, 218),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_SET,
		  pngalignment: 'left:center',
			},
			feedbacks: [],
			steps: [
			{
				down: [
				{
					actionId: 'timer_set',
					options: {
					time: '00:' + m + ':00',
				},
				},
				],
				up: [],
			},
			],
		}
	  }   
	
	  presets['timer_set_1_hour'] = {
		name: '1 hour',
		type: 'button',
		category: 'Set timers',
		style: {
		  text: '1 hour',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(218, 218, 218),
		  alignment: 'center:bottom',
		  png64: Icons.ICON_TIMER_SET,
		  pngalignment: 'left:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_set',
				options: {
				  time: '01:00:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }

	  // sander
	  // Basic clean
	  presets['clean_timer_start'] = {
		name: 'START',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'START',
		  size: '16',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(0, 255, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_TIMER,
		  pngalignment: 'center:center',
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
	  presets['clean_timer_stop'] = {
		name: 'STOP',
		type: 'button',
		category: 'Basic clean',
		style: {
			show_topbar: false,
			text: 'STOP',
			size: '16',
			color: combineRgb(0, 0, 0),
			bgcolor: combineRgb(255, 0, 0),
			alignment: 'center:center',
			png64: Icons.CLEAN_TIMER,
			pngalignment: 'center:center',
		  },
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'stop',
				options: {},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_timer_pause'] = {
		name: 'PAUSE',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'PAUSE',
		  size: '16',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 178, 66),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'pause',
				options: {},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_timer_pause_toggle'] = {
		name: 'PAUSE TOGGLE',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'PAUSE TOGGLE',
		  size: '16',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 178, 66),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'pause_toggle',
				options: {},
			  },
			],
			up: [],
		  },
		],
	  }

	  presets['clean_Blackout_on'] = {
		name: 'ON',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'ON',
		  size: '16',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(102, 0, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_BLACKOUT,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'blackout',
				options: {
				  val: 'on',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_Blackout_off'] = {
		name: 'OFF',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'OFF',
		  size: '16',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 102, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_BLACKOUT,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'blackout',
				options: {
				  val: 'off',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_Blackout_toggle'] = {
		name: 'TOGGLE',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'TOGGLE',
		  size: '14',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(36, 36, 36),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_BLACKOUT,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'blackout',
				options: {
				  val: 'toggle',
				},
			  },
			],
			up: [],
		  },
		],
	  }

	  presets['clean_timer_set_1_min'] = {
		name: '1 min',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: '1 min',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(218, 218, 218),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_SET_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_set',
				options: {
				  time: '00:01:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_timer_1_min'] = {
		name: '1 min',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: '1 min',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 255),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_START_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer',
				options: {
				  time: '00:01:00',
				  opt: 'countdown',
			  },
			  },
			],
			up: [],
		  },
		],
	  }

	  presets['clean_timer_basic_update_min_1_min'] = {
		name: '-1 min',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: '-1 min',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_UPDATE_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_update',
				options: {
				  seconds: '-60',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_timer_basic_update_plus_1_min'] = {
		name: '+1 min',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: '+1 min',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_UPDATE_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_update',
				options: {
				  seconds: '+60',
			  },
			  },
			],
			up: [],
		  },
		],
	  }

	  presets['clean_timer_count_down_1_min_to_zero'] = {
		name: '1 min to 00:00',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: '1 min\nto\n00:00',
		  size: '16',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer',
				options: {
				  time: '00:01:00',
				  opt: 'countdown_to_zero',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_add_up_timer'] = {
		name: 'Timer count up',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: '00:00:00',
		  size: '14',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_ADD_UP_TIMER,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_countup',
				options: {
				  time: '00:00:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_timer_time_to'] = {
		name: 'Time to 12:00',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: '12:00',
		  size: '18',
		  color: combineRgb(255, 255, 255),
		  bgcolor: combineRgb(0, 0, 0),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_TIMER_TO,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'timer_countdown_to_time',
				options: {
				  time: '12:00:00',
			  },
			  },
			],
			up: [],
		  },
		],
	  }

	  presets['clean_message_show'] = {
		name: 'Show',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'Show',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(192, 255, 192),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_MESSAGE,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_toggle',
				options: {
				  val: 'show',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_message_hide'] = {
		name: 'Hide',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,	
		  text: 'Hide',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 192, 192),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_MESSAGE,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_toggle',
				options: {
				  val: 'hide',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_message_toggle'] = {
		name: 'Toggle',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'Toggle',
		  size: '18',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 223, 192),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_MESSAGE,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_toggle',
				options: {
				  val: 'toggle',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_set_message'] = {
		name: 'Message',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'Message',
		  size: '16',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(205, 205, 205),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_SET_MESSAGE,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_set',
				options: {
				  message: 'Message',
				},
			  },
			],
			up: [],
		  },
		],
	  }
	  presets['clean_send_message'] = {
		name: 'Message',
		type: 'button',
		category: 'Basic clean',
		style: {
		  show_topbar: false,
		  text: 'Message',
		  size: '16',
		  color: combineRgb(0, 0, 0),
		  bgcolor: combineRgb(255, 255, 255),
		  alignment: 'center:center',
		  png64: Icons.CLEAN_SEND_MESSAGE,
		  pngalignment: 'center:center',
		},
		feedbacks: [],
		steps: [
		  {
			down: [
			  {
				actionId: 'message_send',
				options: {
				  message: 'Message',
				},
			  },
			],
			up: [],
		  },
		],
	  }

return presets
}