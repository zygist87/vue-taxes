<template>
  <div class="product-view">
    <NotFixedForm
      :id="electricity"
      name="Electricity"
      :from="updateForm(electricity)"
      :rate="0.13"
    >
      Electricity
    </NotFixedForm>
    <NotFixedForm
      :id="coldWater"
      name="Cold Water"
      :from="updateForm(coldWater)"
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
      :from="updateForm(gas)"
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
			singlePayment: 'singlePayment',
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
		updateForm (name) {
			const bla = this.fromLocal.singlePayment
			let result = 0
			bla.map(provider => {
				if (provider.id === name) {
					result = provider.to
				}
			})
			return result
		}
	}
}
</script>

<style lang="scss">
	.total-pay {
		color: darkgreen;
	}
</style>
