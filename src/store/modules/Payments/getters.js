export default {
	singlePayment: state => state.singlePayment,
	new: state => state.new,
	payments: state => state.payments,
	few: state => state.few
	// favorites: state => state.favorites,
	// products: state => {
	// 	return state.products.map(product => {
	// 		product = { ...product }
	// 		product.isFavored = state.favorites.includes(product.id)
	// 		return product
	// 	})
	// }
}
