export default {
	singlePayment: state => state.singlePayment,
	totalPay: state => state.totalPay,
	paymentDate: state => state.paymentDate
	// favorites: state => state.favorites,
	// products: state => {
	// 	return state.products.map(product => {
	// 		product = { ...product }
	// 		product.isFavored = state.favorites.includes(product.id)
	// 		return product
	// 	})
	// }
}
