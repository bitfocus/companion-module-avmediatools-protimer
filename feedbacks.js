const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
    self.setFeedbackDefinitions({
        timer_state: {
            type: 'boolean',
            name: 'Timer state',
            description: 'Change button color based on timer state',
            options: [
                {
                    type: 'dropdown',
                    label: 'State',
                    id: 'state',
                    choices: [
                        { id: 'running', label: 'Running' },
                        { id: 'stopped', label: 'Stopped' },
                    ],
                    default: 'running',
                },
                {
                    type: 'colorpicker',
                    label: 'Foreground color',
                    id: 'fg',
                    default: combineRgb(255, 255, 255)
                },
                {
                    type: 'colorpicker',
                    label: 'Background color',
                    id: 'bg',
                    default: combineRgb(0, 255, 0) // groen standaard
                }
            ],
            defaultStyle: {
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            callback: function(feedback) {
                return self.variables.timer_state === feedback.options.state
            }
        }
    })
}