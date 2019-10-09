// import { SET_PRODUCTS, UPDATE_STATUS, UPDATE_FAVOURITE } from './mutation-types'

// export default {
// 	[UPDATE_STATUS] (state, status) {
// 		state.status = status
// 	},
// 	[SET_PRODUCTS] (state, products) {
// 		state.products = products.map((product, index) => {
// 			product.id = index + 1
// 			product.image = `${product.image}?c=${index + 1}`
// 			return product
// 		})
// 	},
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
// }
