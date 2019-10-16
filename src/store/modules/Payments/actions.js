// import axios from '@/packages/vue-axios'
// import { FETCH_PRODUCTS } from './action-types'
// import { REQUESTING, ERROR, DONE } from './status-types'
import { TO_LOCAL_STORAGE } from './action-types'

export default {
	async [TO_LOCAL_STORAGE] ({ commit, state }) {
		state.singlePayment.map(provider => {
			if (provider.pay <= 0) {
				console.log('kazkas nedarasyta arba -')
				alert('check fields')
			} else {
				console.log('viskas tvarkoje')
			}
		})
		const payment = {
			singlePayment: state.singlePayment,
			totalPay: state.totalPay,
			paymentDate: state.paymentDate
		}
		localStorage.setItem('singlePayment', JSON.stringify(payment))
	}
}

// export default {
// 	async [FETCH_PRODUCTS] ({ commit, state }) {
// 		if (!state.products.length) {
// 			commit(UPDATE_STATUS, REQUESTING)
// 			try {
// 				const { data } = await axios.get('/products')
// 				commit(SET_PRODUCTS, data)
// 				commit(UPDATE_STATUS, DONE)
// 			} catch (error) {
// 				console.log(error)
// 				commit(UPDATE_STATUS, ERROR)
// 			}
// 		}
// 	}
// }
