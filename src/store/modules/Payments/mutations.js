import {
	SET_SINGLE_LINE,
	UPDATE_SINGLE_PAYMENT,
	UPDATE_DATE,
	UPDATE_FROM_LOCAL,
	UPDATE_FROM_FIREBASE
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
		let pay = 0
		state.singlePayment.map(provider => {
			pay = pay + Number(provider.pay)
		})
		state.totalPay = pay.toFixed(2)
	},
	[UPDATE_DATE] (state, date) {
		state.paymentDate = date
	},
	[UPDATE_FROM_LOCAL] (state, result) {
		state.fromLocal = result
	},
	[UPDATE_FROM_FIREBASE] (state, result) {
		state.fromFirebase = result
	}
}

// this.$http.get('https://myfirstpersonalvuejs.firebaseio.com/posts.json').then(function(data) {
// 	return data.json();
// }).then(function(data) {
//   const blogsArray = [];
//   for (let key in data) {
// 	data[key].id = key;
// 	blogsArray.push(data[key])
//   }
//   this.blogs = blogsArray;
// })
