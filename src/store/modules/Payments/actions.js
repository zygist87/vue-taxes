import { TO_LOCAL_STORAGE } from './action-types'
import { UPDATE_DATE } from './mutation-types'

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
	}
}

// to
// methods: {
//     postBlog: function() {
//         this.$http.post('https://myfirstpersonalvuejs.firebaseio.com/posts.json', this.blog).then(function(data) {
//             console.log(data)
//             this.submitted = true
//         })
//     }
// }

// from
// created () {
// 	this.$http.get('https://myfirstpersonalvuejs.firebaseio.com/posts.json').then(function(data) {
// 	  return data.json();
// 	}).then(function(data) {
// 	  const blogsArray = [];
// 	  for (let key in data) {
// 		data[key].id = key;
// 		blogsArray.push(data[key])
// 	  }
// 	  this.blogs = blogsArray;
// 	})
//   }
