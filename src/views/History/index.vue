<template>
  <div>
    <h3 class="history-title">
      Payments history
    </h3>
    <VueGrid
      align="stretch"
      justify="start"
      class="fixed-form"
    >
      <VueCell
        width="4of12"
        class="left-side"
      >
        <span>{{ moment(fromLocal.paymentDate).format("YYYY MM DD - h:mm:ss") }}</span>
      </VueCell>
      <VueCell
        width="2of12"
        class="left-side"
      >
        <button @click="showMoreLess">
          Show more
        </button>
      </VueCell>
      <VueCell
        width="6of12"
        class="right-side"
      >
        <span>€ {{ fromLocal.totalPay }}</span>
      </VueCell>
    </VueGrid>
    <ul
      v-for="provider in fromLocal.singlePayment"
      :key="provider.id"
    >
      <li>
        <span>{{ provider.name }}</span>
        <span>From: {{ provider.from }}</span>
        <span>To: {{ provider.to }}</span>
        <span>Difference: {{ provider.difference }}</span>
        <span>Rate: {{ provider.rate }}</span>
        <span>Pay: € {{ provider.pay }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { VueGrid, VueCell } from 'vue-grd'
import { mapGetters, mapActions } from 'vuex'
import { FETCH_PAYMENTS } from '@/store/modules/Payments/action-types'
const moment = require('moment')
export default {
	name: 'HistoryView',
	components: {
		VueGrid,
		VueCell
	},
	data () {
		return {
			moment: moment,
			paymentExpanded: false
		}
	},
	computed: {
		...mapGetters('Payments', {
			singlePayment: 'singlePayment',
			totalPay: 'totalPay',
			paymentDate: 'paymentDate',
			fromLocal: 'fromLocal'
		})
	},
	created () {
		this.fetchPayments()
	},
	methods: {
		...mapActions('Payments', {
			fetchPayments: FETCH_PAYMENTS
		}),
		showMoreLess () {
			console.log('Show more less')
		}
	}
}
</script>

<style scope lang="scss">
	span {
		padding: 10px;
	}
	.history-title {
		text-align: center;
		padding-bottom: 30px;
	}
	.left-side {
		color: darkgreen;
	}
	.right-side {
		text-align: right;
		padding-right: 20px;
		color: darkblue;
	}
</style>
