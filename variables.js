module.exports = function (self) {
	self.setVariableDefinitions([
		{ variableId: 'clock_time', name: 'Clock HH:MM:SS' }, 
		{ variableId: 'clock_mmss', name: 'Clock MM:SS' },
        { variableId: 'clock_hh', name: 'Clock hour' },
        { variableId: 'clock_mm', name: 'Clock minute' },
        { variableId: 'clock_ss', name: 'Clock second' },

		{ variableId: 'timer_time', name: 'Timer HH:MM:SS' },    // volledige tijd
        { variableId: 'timer_mmss', name: 'Timer MM:SS' },       // minuten:seconden
        { variableId: 'timer_hh', name: 'Timer hour' },
        { variableId: 'timer_mm', name: 'Timer minute' },
        { variableId: 'timer_ss', name: 'Timer second' },
        { variableId: 'timer_state', name: 'Timer State' }       // running/stopped
	])
}
