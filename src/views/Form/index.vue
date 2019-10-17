<template>
  <div class="product-view">
    <NotFixedForm
      :id="electricity"
      name="Electricity"
      :from="0"
      :rate="0.13"
    >
      Electricity
    </NotFixedForm>
    <NotFixedForm
      :id="coldWater"
      name="Cold Water"
      :from="0"
      :rate="1.36"
    >
      Cold water
    </NotFixedForm>
    <FixedForm
      :id="coldWaterFixed"
      name="Cold Water Fixed Part"
      :rate="1"
    >
      Cold water fixed part
    </FixedForm>
    <FixedForm
      :id="heating"
      name="Heating"
    >
      Heating
    </FixedForm>
    <FixedForm
      :id="otherServices"
      name="Other Services"
    >
      Other services
    </FixedForm>
    <NotFixedForm
      :id="gas"
      name="Gas"
      :from="0"
      :rate="0.66"
    >
      Gas
    </NotFixedForm>
    <FixedForm
      :id="gasFixed"
      name="Gas Fixed"
      rate="0.56"
    >
      Gas fixed part
    </FixedForm>
    <FixedForm
      :id="internet"
      name="Internet"
    >
      Internet
    </FixedForm>
    <TotalPay />
  </div>
</template>

<script>
import FixedForm from '@/components/FixedForm'
import NotFixedForm from '@/components/NotFixedForm'
import TotalPay from '@/components/TotalPay'
import { mapGetters, mapActions } from 'vuex'
import { FETCH_PAYMENTS } from '@/store/modules/Payments/action-types'
// import { FETCH_PRODUCTS } from '@/store/modules/Products/action-types'

export default {
	name: 'FormView',
	components: {
		NotFixedForm,
		FixedForm,
		TotalPay
	},
	data () {
		return {
			electricity: 'electricity',
			coldWater: 'coldWater',
			coldWaterFixed: 'coldWaterFixed',
			heating: 'heating',
			otherServices: 'otherServices',
			gas: 'gas',
			gasFixed: 'gasFixed',
			internet: 'internet'
		}
	},
	computed: {
		...mapGetters('Payments', {
			singlePayment: 'singlePayment'
		})
	},
	created () {
		this.fetchPayments()
	},
	methods: {
		...mapActions('Payments', {
			fetchPayments: FETCH_PAYMENTS
		})
	}
}
</script>

<style lang="scss">
	.total-pay {
		color: darkgreen;
	}
</style>
