const { Regex } = require('@companion-module/base')

const configFields = [
    {
        type: 'textinput',
        id: 'host',
        label: 'Target IP',
        width: 8,
        regex: Regex.IP,
        default: '127.0.0.1',
    },
    {
        type: 'textinput',
        id: 'port',
        label: 'Target Port',
        width: 4,
        regex: Regex.PORT,
        default: 9000,
    },
    {
        type: 'checkbox',
        id: 'enableFeedbacks',
        label: 'Enable Timer Feedbacks / Polling',
        width: 12,
        default: true,
        tooltip: 'If unchecked, timer feedbacks and variable updates will be disabled'
    }
]

module.exports = { configFields }