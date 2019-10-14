<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="total-pay"
  >
    <VueCell width="6of12">
      Total Pay
    </VueCell>
    <VueCell width="4of12">
      <Button @click="handleClick" />
    </VueCell>

    <VueCell width="2of12">
      Mokėtina suma
    </VueCell>
  </VueGrid>
</template>

<script>

import { VueGrid, VueCell } from 'vue-grd'
import Button from './Button'
import { mapGetters } from 'vuex'
const moment = require('moment')

export default {
	name: 'TotalPay',
	components: {
		VueGrid,
		VueCell,
		Button
	},
	data () {
		return {

		}
	},
	computed: {
		...mapGetters('Payments', {
			singlePayment: 'singlePayment'
		})
	},
	methods: {

		handleClick (event) {
			console.log('labytis')
			console.log(moment().format('YYYY MM DD - h:mm:ss'))
		}
	}
}
</script>

<style lang="scss">
	.total-pay {
		padding-top: 20px;
	}
</style>
