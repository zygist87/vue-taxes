import {
	SET_SINGLE_LINE,
	UPDATE_SINGLE_PAYMENT,
	TOTAL_PAY,
	UPDATE_DATE
} from './mutation-types'

export default {
	[SET_SINGLE_LINE] (state, form) {
		if (state.singlePayment.length < 8) {
			state.singlePayment = [...state.singlePayment, form]
		}
	},
	[UPDATE_SINGLE_PAYMENT] (state, form) {
		// provider => form.find(id => id.id === provider.id) || provider
		state.singlePayment.map(provider => {
			if (provider.id === form.id) {
				const index = state.singlePayment.findIndex(
					x => x.id === form.id
				)
				state.singlePayment.splice(index, 1)
				state.singlePayment = [...state.singlePayment, form]
			}
		})
	},
	[TOTAL_PAY] (state) {
		let pay = 0
		state.singlePayment.map(provider => {
			pay = pay + Number(provider.pay)
		})
		state.totalPay = pay.toFixed(2)
	},
	[UPDATE_DATE] (state, date) {
		state.paymentDate = date
	}
}
