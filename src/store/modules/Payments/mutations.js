import { SET_SINGLE_LINE } from './mutation-types'

export default {
	[SET_SINGLE_LINE] (state, form) {
		// state.singlePayment = [...state.singlePayment, form]
		const bla = state.singlePayment
		if (bla.length < 5) {
			state.singlePayment = [...state.singlePayment, form]
		}

		localStorage.setItem(
			'singlePayment',
			JSON.stringify(state.singlePayment)
		)
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
