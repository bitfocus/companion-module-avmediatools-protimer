const Icons = require('./icons.js')

module.exports = function (self) {

    const presets = {}

    function makePreset({ id, name, category = 'Basic', text, size, color, bgcolor, alignment = 'center:bottom', icon, iconAlign, actionId, options = {}, styleOverrides = {} }) {
        return {
            type: 'button',
            category,
            name,
            style: {
                text,
                size,
                color,
                bgcolor,
                alignment,
                png64: icon || null,
                pngalignment: iconAlign || 'left:center',
                ...styleOverrides,
            },
            feedbacks: [],
            steps: [
                {
                    down: [{ actionId, options }],
                    up: [],
                },
            ],
        };
    }

    // BASIC PRESETS
    presets.timer_start = makePreset({
        id: 'timer_start',
        category: 'Basic',
        name: 'START',
        text: 'START',
        size: 18,
        color: '#000000',
        bgcolor: '#00FF00',
        icon: Icons.ICON_TIMER_BLACK,
        actionId: 'start'
    })

    presets.timer_stop = makePreset({
        id: 'timer_stop',
        category: 'Basic',
        name: 'STOP',
        text: 'STOP',
        size: 18,
        color: '#000000',
        bgcolor: '#FF0000',
        icon: Icons.ICON_TIMER_BLACK,
        actionId: 'stop'
    })

    presets.timer_pause = makePreset({
        id: 'timer_pause',
        category: 'Basic',
        name: 'PAUSE',
        text: 'PAUSE',
        size: 14,
        color: '#000000',
        bgcolor: '#FFB242',
        icon: Icons.ICON_TIMER_BLACK,
        actionId: 'pause'
    })

    presets.timer_pause_toggle = makePreset({
        id: 'timer_pause_toggle',
        category: 'Basic',
        name: 'PAUSE TOGGLE',
        text: 'PAUSE TOGGLE',
        size: 10,
        color: '#000000',
        bgcolor: '#FFB242',
        icon: Icons.ICON_TIMER_BLACK,
        actionId: 'pause_toggle'
    })

    presets.Blackout_on = makePreset({
        id: 'Blackout_on',
        category: 'Basic',
        name: 'BLACK\nOUT ON',
        text: 'BLACK\nOUT ON',
        size: 14,
        color: '#FFFFFF',
        bgcolor: '#660000',
        alignment: 'center:center',
        actionId: 'blackout',
        options: { val: 'on' }
    })

    presets.Blackout_off = makePreset({
        id: 'Blackout_off',
        category: 'Basic',
        name: 'BLACK\nOUT OFF',
        text: 'BLACK\nOUT OFF',
        size: 14,
        color: '#FFFFFF',
        bgcolor: '#006600',
        alignment: 'center:center',
        actionId: 'blackout',
        options: { val: 'off' }
    })

    presets.Blackout_toggle = makePreset({
        id: 'Blackout_toggle',
        category: 'Basic',
        name: 'BLACK\nOUT TOGGLE',
        text: 'BLACK\nOUT TOGGLE',
        size: 14,
        color: '#FFFFFF',
        bgcolor: '#242424',
        alignment: 'center:center',
        actionId: 'blackout',
        options: { val: 'toggle' }
    })

    presets.timer_basic_set_1_min = makePreset({
        id: 'timer_basic_set_1_min',
        category: 'Basic',
        name: '1 min',
        text: '1 min',
        size: 18,
        color: '#000000',
        bgcolor: '#DADADA',
        icon: Icons.ICON_TIMER_SET,
        actionId: 'timer_set',
        options: { time: '00:01:00' }
    })
    presets.timer_basic_set_5_min = makePreset({
        id: 'timer_basic_set_5_min',
        category: 'Basic',
        name: '5 min',
        text: '5 min',
        size: 18,
        color: '#000000',
        bgcolor: '#DADADA',
        icon: Icons.ICON_TIMER_SET,
        actionId: 'timer_set',
        options: { time: '00:05:00' }
    })

    presets.timer_basic_1_min = makePreset({
        id: 'timer_basic_1_min',
        category: 'Basic',
        name: 'TIMER\n1 min',
        text: '1 min',
        size: 18,
        color: '#FFFFFF',
        bgcolor: '#0000FF',
        icon: Icons.ICON_TIMER,
        actionId: 'timer',
        options: { time: '00:01:00', opt: 'countdown' }
    })

    presets.timer_basic_5_min = makePreset({
        id: 'timer_basic_5_min',
        category: 'Basic',
        name: 'TIMER\n5 min',
        text: '5 min',
        size: 18,
        color: '#FFFFFF',
        bgcolor: '#0000FF',
        icon: Icons.ICON_TIMER,
        actionId: 'timer',
        options: { time: '00:05:00', opt: 'countdown' }
    })

    presets.timer_basic_update_min_1_min = makePreset({
        id: 'timer_basic_update_min_1_min',
        category: 'Basic',
        name: '-1 min',
        text: '-1 min',
        size: 14,
        color: '#000000',
        bgcolor: '#FFFF00',
        icon: Icons.ICON_UPDATE_MINUS,
        actionId: 'timer_update',
        options: { seconds: '-60' }
    })

    presets.timer_basic_update_plus_1_min = makePreset({
        id: 'timer_basic_update_plus_1_min',
        category: 'Basic',
        name: '+1 min',
        text: '+1 min',
        size: 14,
        color: '#000000',
        bgcolor: '#FFFF00',
        icon: Icons.ICON_UPDATE_PLUS,
        actionId: 'timer_update',
        options: { seconds: '+60' }
    })

    presets.timer_blinking_on = makePreset({
        id: 'timer_blinking_on',
        category: 'Basic',
        name: 'TIMER BLINKING ON',
        text: 'TIMER BLINKING ON',
        size: 14,
        color: '#FFFFFF',
        bgcolor: '#000000',
        alignment: 'center:center',
        actionId: 'timer_blinking',
        options: { opt: 'on' }
    })

    presets.timer_blinking_off = makePreset({
        id: 'timer_blinking_off',
        category: 'Basic',
        name: 'TIMER BLINKING OFF',
        text: 'TIMER BLINKING OFF',
        size: 14,
        color: '#FFFFFF',
        bgcolor: '#000000',
        alignment: 'center:center',
        actionId: 'timer_blinking',
        options: { opt: 'off' }
    })
    presets.timer_blinking_toggle = makePreset({
        id: 'timer_blinking_toggle',
        category: 'Basic',
        name: 'TIMER BLINKING TOGGLE',
        text: 'TIMER BLINKING TOGGLE',
        size: 14,
        color: '#FFFFFF',
        bgcolor: '#000000',
        alignment: 'center:center',
        actionId: 'timer_blinking',
        options: { opt: 'toggle' }
    })

    presets.timer_count_down_1_min_to_zero = makePreset({
        id: 'timer_count_down_1_min_to_zero',
        category: 'Basic',
        name: '1 min to zero',
        text: '1 min',
        size: 16,
        color: '#FFFFFF',
        bgcolor: '#000000',
        alignment: 'center:bottom',
        icon: Icons.ICON_TIMER_TO_ZERO,
        iconAlign: 'center:center',
        actionId: 'timer',
        options: {
            time: '00:01:00',
            opt: 'countdown_to_zero',
        },
    })
    
    presets.timer_time_up = makePreset({
        id: 'timer_time_up',
        category: 'Basic',
        name: 'Timer count up',
        text: '00:00:00',
        size: 14,
        color: '#FFFFFF',
        bgcolor: '#000000',
        alignment: 'center:bottom',
        icon: Icons.ICON_TIMER_UP,
        iconAlign: 'left:center',
        actionId: 'timer_countup',
        options: {
            time: '00:00:00',
        },
    })
    
    presets.timer_time_to = makePreset({
        id: 'timer_time_to',
        category: 'Basic',
        name: 'Time to 12:00',
        text: '12:00',
        size: 18,
        color: '#FFFFFF',
        bgcolor: '#000000',
        alignment: 'center:bottom',
        icon: Icons.ICON_TIMER_TO,
        iconAlign: 'left:center',
        actionId: 'timer_countdown_to_time',
        options: {
            time: '12:00:00',
            opt: 'beyondzero/',
        },
    })

    // MESSAGE PRESETS
    presets.message_show = makePreset({
        id: 'message_show',
        category: 'Message',
        name: 'Show',
        text: 'Show',
        size: 18,
        color: '#000000',
        bgcolor: '#C0FFC0',
        icon: Icons.ICON_MESSAGE,
        actionId: 'message_toggle',
        options: { val: 'show' },
    })

    presets.message_hide = makePreset({
        id: 'message_hide',
        category: 'Message',
        name: 'Hide',
        text: 'Hide',
        size: 18,
        color: '#000000',
        bgcolor: '#FFC0C0',
        icon: Icons.ICON_MESSAGE,
        actionId: 'message_toggle',
        options: { val: 'hide' },
    })

    presets.message_toggle = makePreset({
        id: 'message_toggle',
        category: 'Message',
        name: 'Toggle',
        text: 'Toggle',
        size: 18,
        color: '#000000',
        bgcolor: '#FFDFC0',
        icon: Icons.ICON_MESSAGE,
        actionId: 'message_toggle',
        options: { val: 'toggle' },
    })

    presets.set_message = makePreset({
        id: 'set_message',
        category: 'Message',
        name: 'Message',
        text: 'Message',
        size: 14,
        color: '#000000',
        bgcolor: '#CDCDCD',
        icon: Icons.ICON_MESSAGE_SET,
        actionId: 'message_set',
        options: { message: 'Message' },
    })

    presets.send_message = makePreset({
        id: 'send_message',
        category: 'Message',
        name: 'Message',
        text: 'Message',
        size: 14,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Message' },
    })

    presets.send_message_no_time_left = makePreset({
        id: 'send_message_no_time_left',
        category: 'Message',
        name: 'No time left!',
        text: 'No time left!',
        size: 12,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'No time left!' },
    })

    presets.send_message_please_wrap_up = makePreset({
        id: 'send_message_please_wrap_up',
        category: 'Message',
        name: 'Please_wrap_up!',
        text: 'Please\nwrap up!',
        size: 12,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Please wrap up!' },
    })

    presets.send_message_caller_present = makePreset({
        id: 'send_message_caller_present',
        category: 'Message',
        name: 'Caller present',
        text: 'Caller present',
        size: 12,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Caller present' },
    })

    presets.send_message_video_is_ready = makePreset({
        id: 'send_message_video_is_ready',
        category: 'Message',
        name: 'Video is ready',
        text: 'Video is ready',
        size: 12,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Video is ready' },
    })

    presets.send_message_powerpoint_ready = makePreset({
        id: 'send_message_powerpoint_ready',
        category: 'Message',
        name: 'PowerPoint ready',
        text: 'PowerPoint ready',
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'PowerPoint ready' },
    })

    presets.send_message_keynote_ready = makePreset({
        id: 'send_message_keynote_ready',
        category: 'Message',
        name: 'KeyNote ready',
        text: 'KeyNote ready',
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'KeyNote ready' },
    })

    presets.send_message_lets_fill_this_time_gap = makePreset({
        id: 'send_message_lets_fill_this_time_gap',
        category: 'Message',
        name: "Let's fill this time gap",
        text: ".   Let's\nfill this\ntime gap",
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: "Let's fill this time gap" },
    })

    presets.send_message_buy_some_time = makePreset({
        id: 'send_message_buy_some_time',
        category: 'Message',
        name: 'Buy some time',
        text: 'Buy some time',
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Buy some time' },
    })

    presets.send_message_keep_going = makePreset({
        id: 'send_message_keep_going',
        category: 'Message',
        name: 'Keep going',
        text: 'Keep going',
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Keep going' },
    })

    presets.send_message_use_the_hand_mic = makePreset({
        id: 'send_message_use_the_hand_mic',
        category: 'Message',
        name: 'Use the hand mic',
        text: 'Use the hand mic',
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Use the hand mic' },
    })

    presets.send_message_break = makePreset({
        id: 'send_message_break',
        category: 'Message',
        name: 'Break',
        text: 'Break',
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Break' },
    })

    presets.send_message_live = makePreset({
        id: 'send_message_live',
        category: 'Message',
        name: 'Live!',
        text: 'Live!',
        size: 10,
        color: '#000000',
        bgcolor: '#FFFFFF',
        icon: Icons.ICON_MESSAGE_SEND,
        actionId: 'message_send',
        options: { message: 'Live!' },
    })

    // --- UPDATE TIMERS DYNAMICALLY ---
    const options = {
        minus: '-',
        plus: '+',
    }

    // 30 SEC
    for (const [key, val] of Object.entries(options)) {
        presets[`timer_update_${key}_30_sec`] = makePreset({
            id: `timer_update_${key}_30_sec`,
            category: 'Update timers',
            name: `${val}30 sec`,
            text: `${val}30 sec`,
            size: 14,
            color: '#000000',
            bgcolor: '#FFFF00',
            icon: Icons[`ICON_UPDATE_${key.toUpperCase()}`],
            actionId: 'timer_update',
            options: { seconds: `${val}30` },
        })
    }

    // 1–59 MIN
    for (let i = 1; i <= 59; i++) {
        const m = i * 60
        for (const [key, val] of Object.entries(options)) {
            presets[`timer_update_${key}_${i}_min`] = makePreset({
                id: `timer_update_${key}_${i}_min`,
                category: 'Update timers',
                name: `${val}${i} min`,
                text: `${val}${i} min`,
                size: 14,
                color: '#000000',
                bgcolor: '#FFFF00',
                icon: Icons[`ICON_UPDATE_${key.toUpperCase()}`],
                actionId: 'timer_update',
                options: { seconds: `${val}${m}` },
            })
        }
    }

    // 1 HOUR
    for (const [key, val] of Object.entries(options)) {
        presets[`timer_update_${key}_1_hour`] = makePreset({
            id: `timer_update_${key}_1_hour`,
            category: 'Update timers',
            name: `${val}1 hour`,
            text: `${val}1 hour`,
            size: 14,
            color: '#000000',
            bgcolor: '#FFFF00',
            icon: Icons[`ICON_UPDATE_${key.toUpperCase()}`],
            actionId: 'timer_update',
            options: { seconds: `${val}3600` },
        })
    }

    // --- START TIMERS DYNAMICALLY ---

    // helper om tijd in HH:MM:SS string te maken
    function formatTime(h = 0, m = 0, s = 0) {
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    }

    // 30 SEC
    presets['timer_30_sec'] = makePreset({
        id: 'timer_30_sec',
        category: 'Start timers',
        name: '30 sec',
        text: '30 sec',
        size: 18,
        color: '#FFFFFF',
        bgcolor: '#0000FF',
        icon: Icons.ICON_TIMER,
        actionId: 'timer',
        options: { time: formatTime(0, 0, 30), opt: 'countdown' },
    })

    // 1–59 MIN
    for (let i = 1; i <= 59; i++) {
        presets[`timer_${i}_min`] = makePreset({
            id: `timer_${i}_min`,
            category: 'Start timers',
            name: `${i} min`,
            text: `${i} min`,
            size: 18,
            color: '#FFFFFF',
            bgcolor: '#0000FF',
            icon: Icons.ICON_TIMER,
            actionId: 'timer',
            options: { time: formatTime(0, i, 0), opt: 'countdown' },
        })
    }

    // 1 HOUR
    presets['timer_1_hour'] = makePreset({
        id: 'timer_1_hour',
        category: 'Start timers',
        name: '1 hour',
        text: '1 hour',
        size: 18,
        color: '#FFFFFF',
        bgcolor: '#0000FF',
        icon: Icons.ICON_TIMER,
        actionId: 'timer',
        options: { time: formatTime(1, 0, 0), opt: 'countdown' },
    })

    // --- SET TIMERS DYNAMICALLY ---

    // helper om tijd in HH:MM:SS string te maken
    function formatTime(h = 0, m = 0, s = 0) {
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    }

    // 30 SEC
    presets['timer_set_30_sec'] = makePreset({
        id: 'timer_set_30_sec',
        category: 'Set timers',
        name: '30 sec',
        text: '30 sec',
        size: 18,
        color: '#000000',
        bgcolor: '#DADADA',
        icon: Icons.ICON_TIMER_SET,
        actionId: 'timer_set',
        options: { time: formatTime(0, 0, 30) },
    })

    // 1–59 MIN
    for (let i = 1; i <= 59; i++) {
        presets[`timer_set_${i}_min`] = makePreset({
            id: `timer_set_${i}_min`,
            category: 'Set timers',
            name: `${i} min`,
            text: `${i} min`,
            size: 18,
            color: '#000000',
            bgcolor: '#DADADA',
            icon: Icons.ICON_TIMER_SET,
            actionId: 'timer_set',
            options: { time: formatTime(0, i, 0) },
        })
    }

    // 1 HOUR
    presets['timer_set_1_hour'] = makePreset({
        id: 'timer_set_1_hour',
        category: 'Set timers',
        name: '1 hour',
        text: '1 hour',
        size: 18,
        color: '#000000',
        bgcolor: '#DADADA',
        icon: Icons.ICON_TIMER_SET,
        actionId: 'timer_set',
        options: { time: formatTime(1, 0, 0) },
    })

    // --- BASIC CLEAN PRESETS ---

    const cleanButtons = [
        { id: 'clean_timer_start', name: 'START', color: '#000000', bgcolor: '#00FF00', actionId: 'start', icon: Icons.CLEAN_TIMER },
        { id: 'clean_timer_stop', name: 'STOP', color: '#000000', bgcolor: '#FF0000', actionId: 'stop', icon: Icons.CLEAN_TIMER },
        { id: 'clean_timer_pause', name: 'PAUSE', color: '#000000', bgcolor: '#FFB242', actionId: 'pause', icon: Icons.CLEAN_TIMER },
        { id: 'clean_timer_pause_toggle', name: 'PAUSE TOGGLE', color: '#000000', bgcolor: '#FFB242', actionId: 'pause_toggle', icon: Icons.CLEAN_TIMER },
        { id: 'clean_Blackout_on', name: 'ON', color: '#FFFFFF', bgcolor: '#660000', actionId: 'blackout', options: { val: 'on' }, icon: Icons.CLEAN_BLACKOUT },
        { id: 'clean_Blackout_off', name: 'OFF', color: '#FFFFFF', bgcolor: '#006600', actionId: 'blackout', options: { val: 'off' }, icon: Icons.CLEAN_BLACKOUT },
        { id: 'clean_Blackout_toggle', name: 'TOGGLE', color: '#FFFFFF', bgcolor: '#242424', actionId: 'blackout', options: { val: 'toggle' }, icon: Icons.CLEAN_BLACKOUT },
    ]

    cleanButtons.forEach(btn => {
        presets[btn.id] = makePreset({
            id: btn.id,
            category: 'Basic clean',
            name: btn.name,
            text: btn.name,
            size: btn.name.length > 10 ? 14 : 16,
            color: btn.color,
            bgcolor: btn.bgcolor,
            icon: btn.icon,
            actionId: btn.actionId,
            options: btn.options || {},
            styleOverrides: { show_topbar: false, alignment: 'center:center', pngalignment: 'center:center' },
        })
    })

    // --- TIMERS CLEAN PRESETS ---
    const timerClean = [
        { id: 'clean_timer_set_1_min', name: '1 min', color: '#000', bgcolor: '#DADADA', actionId: 'timer_set', time: '00:01:00', icon: Icons.CLEAN_SET_TIMER },
        { id: 'clean_timer_set_5_min', name: '5 min', color: '#000', bgcolor: '#DADADA', actionId: 'timer_set', time: '00:05:00', icon: Icons.CLEAN_SET_TIMER },
        { id: 'clean_timer_1_min', name: '1 min', color: '#FFF', bgcolor: '#0000FF', actionId: 'timer', time: '00:01:00', opt: 'countdown', icon: Icons.CLEAN_START_TIMER },
        { id: 'clean_timer_5_min', name: '5 min', color: '#FFF', bgcolor: '#0000FF', actionId: 'timer', time: '00:05:00', opt: 'countdown', icon: Icons.CLEAN_START_TIMER },
        { id: 'clean_timer_basic_update_min_1_min', name: '-1 min', color: '#000', bgcolor: '#FFFF00', actionId: 'timer_update', seconds: '-60', icon: Icons.CLEAN_UPDATE_TIMER },
        { id: 'clean_timer_basic_update_plus_1_min', name: '+1 min', color: '#000', bgcolor: '#FFFF00', actionId: 'timer_update', seconds: '+60', icon: Icons.CLEAN_UPDATE_TIMER },
    ]

    timerClean.forEach(btn => {
        presets[btn.id] = makePreset({
            id: btn.id,
            category: 'Basic clean',
            name: btn.name,
            text: btn.name,
            size: 18,
            color: btn.color,
            bgcolor: btn.bgcolor,
            icon: btn.icon,
            actionId: btn.actionId,
            options: btn.seconds ? { seconds: btn.seconds } : btn.time ? { time: btn.time, opt: btn.opt } : {},
            styleOverrides: { show_topbar: false, alignment: 'center:center', pngalignment: 'center:center' },
        })
    })

    // --- TIMER COUNTDOWN / COUNTUP CLEAN ---
    const timerSpecial = [
        { id: 'clean_timer_blinking_off', name: 'BLINKING OFF', color: '#FFF', bgcolor: '#000', size: 14, actionId: 'timer_blinking', options: { opt: 'off' }, icon: Icons.CLEAN_TIMER },
        { id: 'clean_timer_blinking_on', name: 'BLINKING ON', color: '#FFF', bgcolor: '#000', size: 14, actionId: 'timer_blinking', options: { opt: 'on' }, icon: Icons.CLEAN_TIMER },
        { id: 'clean_timer_blinking_toggle', name: 'BLINKING TOGGLE', color: '#FFF', bgcolor: '#000', size: 14, actionId: 'timer_blinking', options: { opt: 'toggle' }, icon: Icons.CLEAN_TIMER },
       
        { id: 'clean_timer_count_down_1_min_to_zero', name: '1 min\nto\n00:00', color: '#FFF', bgcolor: '#000', size: 16, actionId: 'timer', options: { time: '00:01:00', opt: 'countdown_to_zero' }, icon: Icons.CLEAN_TIMER },
        { id: 'clean_add_up_timer', name: '00:00:00', color: '#FFF', bgcolor: '#000', size: 16, actionId: 'timer_countup', options: { time: '00:00:00' }, icon: Icons.CLEAN_ADD_UP_TIMER },
        { id: 'clean_timer_time_to', name: '12:00', color: '#FFF', bgcolor: '#000', size: 16, actionId: 'timer_countdown_to_time', options: { time: '12:00:00', opt: 'beyondzero/' }, icon: Icons.CLEAN_TIMER_TO },
    ]

    timerSpecial.forEach(btn => {
        presets[btn.id] = makePreset({
            id: btn.id,
            category: 'Basic clean',
            name: btn.name,
            text: btn.name,
            size: btn.size,
            color: btn.color,
            bgcolor: btn.bgcolor,
            icon: btn.icon,
            actionId: btn.actionId,
            options: btn.options,
            styleOverrides: { show_topbar: false, alignment: 'center:center', pngalignment: 'center:center' },
        })
    })

    // --- MESSAGES CLEAN ---
    const messagesClean = [
        { id: 'clean_message_show', name: 'Show', color: '#000', bgcolor: '#C0FFC0', actionId: 'message_toggle', options: { val: 'show' }, icon: Icons.CLEAN_MESSAGE },
        { id: 'clean_message_hide', name: 'Hide', color: '#000', bgcolor: '#FFC0C0', actionId: 'message_toggle', options: { val: 'hide' }, icon: Icons.CLEAN_MESSAGE },
        { id: 'clean_message_toggle', name: 'Toggle', color: '#000', bgcolor: '#FFDFC0', actionId: 'message_toggle', options: { val: 'toggle' }, icon: Icons.CLEAN_MESSAGE },
        { id: 'clean_set_message', name: 'Message', color: '#000', bgcolor: '#CDCDCD', actionId: 'message_set', options: { message: 'Message' }, icon: Icons.CLEAN_SET_MESSAGE },
        { id: 'clean_send_message', name: 'Message', color: '#000', bgcolor: '#FFF', actionId: 'message_send', options: { message: 'Message' }, icon: Icons.CLEAN_SEND_MESSAGE },
    ]

    messagesClean.forEach(btn => {
        presets[btn.id] = makePreset({
            id: btn.id,
            category: 'Basic clean',
            name: btn.name,
            text: btn.name,
            size: 16,
            color: btn.color,
            bgcolor: btn.bgcolor,
            icon: btn.icon,
            actionId: btn.actionId,
            options: btn.options,
            styleOverrides: { show_topbar: false, alignment: 'center:center', pngalignment: 'center:center' },
        })
    })


    // --- SETTINGS PRESETS ---

    // SETTINGS PRESETS — COMPLETE
    const settingsPresets = {}

    // === DISPLAY MODE ===
    ;[
        { id: 'all', label: 'All' },
        { id: 'singleTop', label: 'Single Top' },
        { id: 'singleBottom', label: 'Single Bottom' },
        { id: 'sideBySideTop', label: 'Side Top' },
        { id: 'sideBySideBottom', label: 'Side Bottom' },
    ].forEach((m) => {
        settingsPresets[`settings_display_${m.id}`] = makePreset({
            id: `settings_display_${m.id}`,
            category: 'Settings',
            name: `Display: ${m.label}`,
            text: m.label,
            size: 16,
            color: '#FFFFFF',
            bgcolor: '#000000',
            alignment: 'center:center',
            icon: Icons.CLEAN_DISPLAY,
            styleOverrides: { show_topbar: false, pngalignment: 'center:center' },
            actionId: 'settings',
            options: { opt: 'displayMode', value_displayMode: m.id },
        })
    })

    // === TEXT SIZES ===
    ;[10, 20].forEach((s) => {
        settingsPresets[`settings_textsize_${s}`] = makePreset({
            id: `settings_textsize_${s}`,
            category: 'Settings',
            name: `Text Size: ${s}`,
            text: `Text Size: ${s}`,
            size: 16,
            alignment: 'center:center',
            color: '#FFFFFF',
            bgcolor: '#000000',
            icon: Icons.CLEAN_SETTING,
            styleOverrides: { show_topbar: false, pngalignment: 'center:center' },
            actionId: 'settings',
            options: { opt: 'textSize', value_textSize: s },
        })
    })

    // === NAME SIZES ===
    ;[2, 4].forEach((s) => {
        settingsPresets[`settings_namesize_${s}`] = makePreset({
            id: `settings_namesize_${s}`,
            category: 'Settings',
            name: `Name Size: ${s}`,
            text: `Name Size: ${s}`,
            size: 14,
            alignment: 'center:center',
            color: '#FFFFFF',
            bgcolor: '#000000',
            icon: Icons.CLEAN_SETTING,
            styleOverrides: { show_topbar: false, pngalignment: 'center:center' },
            actionId: 'settings',
            options: { opt: 'nameSize', value_nameSize: s },
        })
    })

    // === COLORS ===
    const colorSets = [
        { opt: 'textColor', id: 'White', label: 'Text Color White', color: '#ffffff', bgcolor: '#000000' },
        { opt: 'textColor', id: 'Indigo', label: 'Text Color Indigo', color: '#4b0082', bgcolor: '#4b0082' },
        { opt: 'boxColor', id: 'Black', label: 'Box Color black', color: '#000000' },
        { opt: 'boxColor', id: 'Indigo', label: 'Box Color Indigo', color: '#4b0082', bgcolor: '#4b0082' },
        { opt: 'bgColor', id: 'Black', label: 'BG Color black', color: '#000000' },
        { opt: 'bgColor', id: 'Indigo', label: 'BG Color Indigo', color: '#4b0082', bgcolor: '#4b0082' },
    ]
    colorSets.forEach((c) => {
        settingsPresets[`settings_${c.opt}_${c.id}`] = makePreset({
            id: `settings_${c.opt}_${c.id}`,
            category: 'Settings',
            name: `${c.label} Color`,
            text: c.label,
            size: 14,
            alignment: 'center:center',
            color: '#FFFFFF',
            bgcolor: c.bgcolor || '#000000',
            icon: Icons.CLEAN_SETTING,
            styleOverrides: { show_topbar: false, pngalignment: 'center:center' },
            actionId: 'settings',
            options: { opt: c.opt, [`value_${c.opt}`]: c.color },
        })
    })

    // === TRANSPARENCY ===
    ;[1, 0.75, 0.5, 0.25, 0].forEach((t) => {
        const transparencyPercent = (1 - t) * 100
        settingsPresets[`settings_bgTransparency_${t}`] = makePreset({
            id: `settings_bgTransparency_${t}`,
            category: 'Settings',
            name: `Opacity BG ${transparencyPercent}%`,
            text: `Opacity BG ${transparencyPercent}%`,
            color: '#FFFFFF',
            size: 14,
            alignment: 'center:center',
            bgcolor: '#696969',
            icon: Icons.CLEAN_SETTING,
            styleOverrides: { show_topbar: false, pngalignment: 'center:center' },
            actionId: 'settings',
            options: { opt: 'bgTransparency', value_bgTransparency: t },
        })
    })

    // === TIMER OPTIONS ===
    function makeSettingsPresets() {
        const sets = [
            // Clock
            { id: 'Name', type: 'name', opt: 'clockName', label: 'Clock', icon: 'CLOCK', value: 'Clock' },
            { id: 'Yt', type: 'name', opt: 'clockName', label: 'Your text', icon: 'CLOCK', value: 'Your text' },
            { id: 'white', type: 'color', opt: 'clockColor', label: 'Color\nWhite', icon: 'CLOCK', color: '#ffffff', bgcolor: '#ffffff', textColor: '#000000' },
            { id: 'nIndigo', type: 'color', opt: 'clockColor', label: 'Color\nIndigo', icon: 'CLOCK', color: '#4b0082', bgcolor: '#4b0082' },
            { id: 'nWhite', type: 'colorBar', opt: 'clockColorBar', label: 'Color Bar\nWhite', icon: 'CLOCK', color: '#ffffff', bgcolor: '#ffffff', textColor: '#000000' },
            { id: 'nIndigo', type: 'colorBar', opt: 'clockColorBar', label: 'Color Bar\nIndigo', icon: 'CLOCK', color: '#4b0082', bgcolor: '#4b0082' },
            { id: 'On', type: 'bar', opt: 'clockBarActive', label: 'On', icon: 'CLOCK', value: true },
            { id: 'Off', type: 'bar', opt: 'clockBarActive', label: 'Off', icon: 'CLOCK',value: false },
            
            // Timer
            { id: 'Name', type: 'name', opt: 'timerName', label: 'Timer', icon: 'TIMER', value: 'Timer' },
            { id: 'Yt', type: 'name', opt: 'timerName', label: 'Your text', icon: 'TIMER', value: 'Your text' },
            { id: 'nYellow', type: 'color', opt: 'timerColor', label: 'Color\nYellow', icon: 'TIMER', color: '#ffff00', bgcolor: '#ffff00', textColor: '#000000' },
            { id: 'nIndigo', type: 'color', opt: 'timerColor', label: 'Color\nIndigo', icon: 'TIMER', color: '#4b0082', bgcolor: '#4b0082'},
            { id: 'nYellow', type: 'colorBar', opt: 'timerColorBar', label: 'Color Bar\nYellow', icon: 'TIMER', color: '#ffff00', bgcolor: '#ffff00', textColor: '#000000' },
            { id: 'nIndigo', type: 'colorBar', opt: 'timerColorBar', label: 'Color Bar\nIndigo', icon: 'TIMER', color: '#4b0082', bgcolor: '#4b0082' },
            { id: 'On', type: 'bar', opt: 'timerBarActive', label: 'On', icon: 'TIMER', value: true },
            { id: 'Off', type: 'bar', opt: 'timerBarActive', label: 'Off', icon: 'TIMER', value: false },

            // Qlab
            { id: 'Name', type: 'name', opt: 'qlabName', label: 'Qlab', icon: 'QLAB', value: 'Qlab - ' },
            { id: 'Yt', type: 'name', opt: 'qlabName', label: 'Your text', icon: 'QLAB', value: 'Your text - ' },
            { id: 'nGreen', type: 'color', opt: 'qlabColor', label: 'Color\nGreen', icon: 'QLAB', color: '#00ff00', bgcolor: '#00ff00', textColor: '#000000' },
            { id: 'nIndigo', type: 'color', opt: 'qlabColor', label: 'Color\nIndigo', icon: 'QLAB', color: '#4b0082', bgcolor: '#4b0082' },
            { id: 'nGreen', type: 'colorBar', opt: 'qlabColorBar', label: 'Color Bar\nGreen', icon: 'QLAB', color: '#00ff00', bgcolor: '#00ff00', textColor: '#000000' },
            { id: 'nIndigo', type: 'colorBar', opt: 'qlabColorBar', label: 'Color Bar\nIndigo', icon: 'QLAB', color: '#4b0082', bgcolor: '#4b0082' },
            { id: 'On', type: 'bar', opt: 'qlabBarActive', label: 'On', icon: 'QLAB', value: true },
            { id: 'Off', type: 'bar', opt: 'qlabBarActive', label: 'Off', icon: 'QLAB', value: false },
        ]
        
        sets.forEach((item) => {
            let preset = {
                id: `settings_${item.opt}${item.id}`,
                category: 'Settings',
                actionId: 'settings',
                size: 16,
                bgcolor: item.bgcolor || '#000000',
                color: item.textColor || '#ffffff',
                alignment: 'center:center',
                options: { opt: item.opt },
                icon: Icons[`CLEAN_SETTING_${item.icon}`],
                styleOverrides: { show_topbar: false, alignment: 'center:center', pngalignment: 'center:center' },
            }
    
            switch (item.type) {
                case 'color':
                    Object.assign(preset, {
                        name: `${item.label}`, 
                        text: `${item.label}`,
                        // size: 14,
                        // icon: Icons.CLEAN_TIMER, // Icons.ICON_COLOR,
                        options: { opt: item.opt, [`value_${item.opt}`]: item.color },
                    })
                    break
    
                case 'colorBar':
                    Object.assign(preset, {
                        name: `${item.label}`,
                        text: `${item.label}`,
                        // size: 14,
                        // icon: Icons.ICON_BAR || Icons.ICON_COLOR,
                        options: { opt: item.opt, [`value_${item.opt}`]: item.color },
                    })
                    break
    
                case 'bar':
                    Object.assign(preset, {
                        name: `Bar\n${item.label}`,
                        text: `Bar\n${item.label}`,
                        // size: 16,
                        // icon: Icons.ICON_BAR || Icons.ICON_SETTINGS,
                        options: { opt: item.opt, [`value_${item.opt}`]: item.value },
                    })
                    break
    
                case 'name':
                    Object.assign(preset, {
                        name: `Name\n${item.label}`,
                        text: `Name\n${item.label}`,
                        // size: 14,
                        // icon: Icons.ICON_TEXT,
                        options: { opt: item.opt, [`value_${item.opt}`]: item.value },
                    })
                    break
            }
    
            settingsPresets[preset.id] = makePreset(preset)
        })
    }
    makeSettingsPresets()

    Object.assign(presets, settingsPresets)

    // TIMER DISPLAY PRESETS
    const timerPresets = [
        { id: 'clock_hh', name: 'Clock Hour', text: '$(PROTIMER:clock_hh)', size: 44, icon: "CLOCK" },
        { id: 'clock_mm', name: 'Clock Minute', text: '$(PROTIMER:clock_mm)', size: 44, icon: "CLOCK" },
        { id: 'clock_ss', name: 'Clock Second', text: '$(PROTIMER:clock_ss)', size: 44, icon: "CLOCK" },
        { id: 'clock_hhmmss', name: 'Clock HH:MM:SS', text: '$(PROTIMER:clock_time)', size: 16, icon: "CLOCK" },
        { id: 'clock_mmss', name: 'Clock MM:SS', text: '$(PROTIMER:clock_mmss)', size: 24, icon: "CLOCK" },

        { id: 'timer_hh', name: 'Timer Hour', text: '$(PROTIMER:timer_hh)', size: 44, icon: "TIMER", color: "#FFFF00" },
        { id: 'timer_mm', name: 'Timer Minute', text: '$(PROTIMER:timer_mm)', size: 44, icon: "TIMER", color: "#FFFF00" },
        { id: 'timer_ss', name: 'Timer Second', text: '$(PROTIMER:timer_ss)', size: 44, icon: "TIMER", color: "#FFFF00" },
        { id: 'timer_hhmmss', name: 'Timer HH:MM:SS', text: '$(PROTIMER:timer_time)', size: 16, icon: "TIMER", color: "#FFFF00" },
        { id: 'timer_mmss', name: 'Timer MM:SS', text: '$(PROTIMER:timer_mmss)', size: 24, icon: "TIMER", color: "#FFFF00" },
    ]

    timerPresets.forEach(p => {
        presets[p.id] = makePreset({
            id: p.id,
            category: 'Timer Display',
            name: p.name,
            text: p.text,
            size: p.size,
            color: p.color || '#FFFFFF',
            bgcolor: '#000000',
            alignment: 'center:center',
            actionId: '', // display-only
            icon: Icons[`CLEAN_SETTING_${p.icon}`],
            styleOverrides: { show_topbar: false, alignment: 'center:center', pngalignment: 'center:center' },
        })
    })

    self.setPresetDefinitions(presets);

};
