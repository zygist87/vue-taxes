<template>
  <div class="product-view">
    <NotFixedForm
      name="Electricity"
      from="0"
      rate="0.13"
    >
      Electricity
    </NotFixedForm>
    <NotFixedForm
      name="Cold Water"
      from="0"
      rate="0.56"
    >
      Cold water
    </NotFixedForm>
    <FixedForm name="Cold Water Fixed Part">
      Cold water fixed part
    </FixedForm>
    <FixedForm name="Heating">
      Heating
    </FixedForm>
    <FixedForm name="Other Services">
      Other services
    </FixedForm>
    <NotFixedForm name="Gas">
      Gas
    </NotFixedForm>
    <FixedForm
      name="Gas Fixed"
      from="0"
      rate="1.36"
    >
      Gas fixed part
    </FixedForm>
    <FixedForm name="Internet">
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
