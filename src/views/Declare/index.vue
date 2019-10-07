<template>
  <div class="product-view">
    <NotFixedForm>Electricity</NotFixedForm>
    <NotFixedForm>Cold water</NotFixedForm>
    <FixedForm> Cold water fixed part </FixedForm>
    <FixedForm> Heating </FixedForm>
    <FixedForm> Other services </FixedForm>
    <NotFixedForm>Gas</NotFixedForm>
    <FixedForm> Gas fixed part </FixedForm>
    <FixedForm> Internet </FixedForm>
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
	name: 'ProductView',
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
