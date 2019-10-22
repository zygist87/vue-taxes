import axios from '@/packages/vue-axios'
import { TO_LOCAL_STORAGE, FETCH_PAYMENTS } from './action-types'
import {
	UPDATE_DATE,
	UPDATE_FROM_LOCAL,
	UPDATE_FROM_FIREBASE
} from './mutation-types'

export default {
	async [TO_LOCAL_STORAGE] ({ commit, state }) {
		state.singlePayment.map(provider => {
			if (provider.pay <= 0) {
				// console.log('kazkas nedarasyta arba -')
				// alert('check fields')
			} else {
				console.log('viskas tvarkoje')
			}
		})
		const payment = {
			singlePayment: state.singlePayment,
			totalPay: state.totalPay,
			paymentDate: Date.now()
		}
		commit(UPDATE_DATE, payment.paymentDate)
		localStorage.setItem('singlePayment', JSON.stringify(payment))
		try {
			await axios.post('/posts.json', {
				...payment
			})
		} catch (error) {
			console.log(error)
		}
		console.log('to firebase')
		location.reload()
	},

	async [FETCH_PAYMENTS] ({ commit }) {
		const fromLocal = JSON.parse(localStorage.getItem('singlePayment'))
		commit(UPDATE_FROM_LOCAL, fromLocal)
		try {
			const { data } = await axios.get('/posts.json')
			let ob = Object.keys(data)
				.map(key => data[key])
				.reverse()
			commit(UPDATE_FROM_FIREBASE, ob)
		} catch (error) {
			console.log(error)
		}
	}
}
