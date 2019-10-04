// import axios from '@/packages/vue-axios'
// import { FETCH_PRODUCTS } from './action-types'
// import { REQUESTING, ERROR, DONE } from './status-types'
// import { SET_PRODUCTS, UPDATE_STATUS } from './mutation-types'

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
