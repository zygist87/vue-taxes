export default () => ({
	singlePayment: 'HelloWorld',
	new: [],
	payments: [
		{ date: new Date().getFullYear(), pay: 230 },
		{ date: new Date().getFullYear(), pay: 440 },
		{ date: new Date().getFullYear(), pay: 23220 }
	],
	few: [
		{ date: new Date().toISOString().slice(0, 10), pay: 230 },
		{ date: new Date().getFullYear(), pay: 440 },
		{
			date: 262626262626,
			pay: 23220
		}
	]

	// singlePayment: []

	// status: null
	// stared: JSON.parse(localStorage.getItem('stared')) || []
})
