<template>
  <div>
    <h3 class="history-title">
      PAYMENTS HISTORY
    </h3>
    <!-- <VueGrid
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
          {{ paymentExpanded ? "Show less" : "Show more" }}
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
      <li v-if="paymentExpanded">
        <span>{{ provider.name }}</span>
        <span>From: {{ provider.from }}</span>
        <span>To: {{ provider.to }}</span>
        <span>Difference: {{ provider.difference }}</span>
        <span>Rate: {{ provider.rate }}</span>
        <span>Pay: € {{ provider.pay }}</span>
      </li>
    </ul>
    <h1>PAYMENTS FROM FIREBASE</h1> -->
    <button
      class="more-button"
      @click="showMoreLess"
    >
      {{ paymentExpanded ? "Show less" : "Show more" }}
    </button>
    <ul
      v-for="fire in fromFirebase"
      :key="fire.paymentDate"
    >
      <li>
        <span class="payment-title">{{ moment(fire.paymentDate).format("YYYY MM DD - h:mm:ss") }}</span>
        <!-- <button @click="showMoreLess">
          {{ paymentExpanded ? "Show less" : "Show more" }}
        </button> -->
        <span class="payment-title">€ {{ fire.totalPay }}</span>
        <ul
          v-for="single in fire.singlePayment"
          :key="single.paymentDate"
        >
          <li v-if="paymentExpanded">
            <span>{{ single.name }}</span>
            <span v-if="single.from">From: {{ single.from }}</span>
            <span v-if="single.to">To: {{ single.to }}</span>
            <span v-if="single.difference">Difference: {{ single.difference }}</span>
            <span>Rate: {{ single.rate }}</span>
            <span>Pay: € {{ single.pay }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// import { VueGrid, VueCell } from 'vue-grd'
import { mapGetters, mapActions } from 'vuex'
import { FETCH_PAYMENTS } from '@/store/modules/Payments/action-types'
const moment = require('moment')
export default {
	name: 'HistoryView',
	// components: {
	// 	VueGrid,
	// 	VueCell
	// },
	data () {
		return {
			moment: moment,
			paymentExpanded: '',
			payments: []
		}
	},
	computed: {
		...mapGetters('Payments', {
			singlePayment: 'singlePayment',
			totalPay: 'totalPay',
			paymentDate: 'paymentDate',
			fromLocal: 'fromLocal',
			fromFirebase: 'fromFirebase'
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
			if (this.paymentExpanded) {
				this.paymentExpanded = false
			} else {
				this.paymentExpanded = true
			}
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
	.more-button {
		width: 100px;
		height: 24px;
		background-color: orange;
		border: 1px solid orange;
		border-radius: 6px;
	}
	.payment-title {
		color: red;
		font-size: 20px;
	}
</style>
