<template>
  <div>
    <h1>Payments history</h1>
    <ul>
      <li v-for="payment in payments">
        {{ payment.date }} ---------------------- {{ payment.pay }}
      </li>
    </ul>
    <ul>
      <li v-for="one in few">
        {{ one.date }} ---------------------- {{ one.pay }}
      </li>
    </ul>
    <span>{{ bla | moment("dddd, MMMM Do YYYY") }}</span>
    <span>{{ moment(bla).format("YYYY MMMM dddd, h:mm:ss") }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const moment = require('moment')
export default {
	name: 'HistoryView',
	data () {
		return {
			moment: moment
		}
	},
	computed: {
		...mapGetters('Payments', {
			payments: 'payments',
			few: 'few'
		})
	},
	mounted () {
		bla = new Date()
	}
}
</script>

<style>
</style>
