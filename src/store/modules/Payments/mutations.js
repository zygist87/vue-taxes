import {
	SET_SINGLE_LINE,
	UPDATE_SINGLE_PAYMENT,
	TOTAL_PAY
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
	}
	// [SET_SINGLE_LINE] (state, payment) {
	// 	state.new = products.map((product, index) => {
	// 		product.id = index + 1
	// 		product.image = `${product.image}?c=${index + 1}`
	// 		return product
	// 	})
	// }

	// 	[UPDATE_FAVOURITE] (state, product) {
	// 		if (!state.favourites.includes(product.id)) {
	// 			state.favourites.push(product.id)
	// 		} else {
	// 			state.favourites = state.favourites.filter(
	// 				favourite => favourite !== product.id
	// 			)
	// 		}
	// 		localStorage.setItem('favourites', JSON.stringify(state.favourites))
	// 	}
}
