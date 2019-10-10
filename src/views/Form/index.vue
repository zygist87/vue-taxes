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
      :rate="0.56"
    >
      Cold water
    </NotFixedForm>
    <FixedForm
      :id="coldWaterFixed"
      name="Cold Water Fixed Part"
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
      :rate="1.36"
    >
      Gas
    </NotFixedForm>
    <FixedForm
      :id="gasFixed"
      name="Gas Fixed"
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
// import { FETCH_PRODUCTS } from '@/store/modules/Products/action-types'
// import { REQUESTING } from '@/store/modules/Products/status-types'
// import { createNamespacedHelpers } from 'vuex'
// const { mapActions, mapGetters } = createNamespacedHelpers('Products')
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
	}
	// computed: {
	// 	...mapGetters({
	// 		products: 'products',
	// 		status: 'status'
	// 	}),
	// 	isRequesting () {
	// 		return this.status === REQUESTING
	// 	}
	// },
	// created () {
	// 	this.fetchProducts()
	// },
	// methods: {
	// 	...mapActions({
	// 		fetchProducts: FETCH_PRODUCTS
	// 	}),
	// 	// ...mapMutations({
	// 	// 	setStarOnProduct: STAR_PRODUCT
	// 	// }),
	// 	starProduct (product) {
	// 		this.setStarOnProduct(product.id)
	// 	}
	// }
}
</script>

<style lang="scss">
	.total-pay {
		color: red;
	}
</style>
