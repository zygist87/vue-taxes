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
		localStorage.setItem(
			'singlePayment',
			JSON.stringify(state.singlePayment)
		)
	},
	[UPDATE_SINGLE_PAYMENT] (state, form) {
		// provider => form.find(id => id.id === provider.id) || provider
		state.singlePayment.map(provider => {
			if (provider.id === form.id) {
				console.log('mutations ' + provider.id)
				const index = state.singlePayment.findIndex(
					x => x.id === form.id
				)
				console.log(index)
				const removed = state.singlePayment.splice(index, 1)
				console.log(removed)
				state.singlePayment = [...state.singlePayment, form]
				console.log(state.singlePayment)
				console.log('mutations total ' + state.totalPay)
				// return { ...singlePayment }
				localStorage.setItem(
					'singlePayment',
					JSON.stringify(state.singlePayment)
				)
			}
		})
		// let total = 0
		// state.totalPay = state.singlePayment.map(provider => {
		// 	total = total + provider.pay
		// 	return total
		// })
		// console.log('state ' + state.totalPay)
	}
	// [TOTAL_PAY](state, form) {
	// 	// total = 0
	// 	state.totalPay = state.totalPaytotal + form.pay
	// 	console.log(state.totalPay)
	// }
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
