import { Regex } from '@companion-module/base'

export const configFields = [
	{
        type: 'textinput',
        id: 'host',
        label: 'Target IP',
        width: 8,
        regex: Regex.IP,
        default: '127.0.0.1'
    },
    {
        type: 'textinput',
        id: 'port',
        label: 'Target Port',
        width: 4,
        regex: Regex.PORT,
        default: 9000,
    },
]
