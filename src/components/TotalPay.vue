<template>
  <div>
    <VueGrid
      align="stretch"
      justify="start"
      class="total-pay"
    >
      <VueCell width="10of12">
        <h2>Total Pay</h2>
      </VueCell>
      <VueCell width="2of12">
        <h2>€ {{ totalPay }}</h2>
      </VueCell>
    </VueGrid>
    <VueGrid
      align="stretch"
      justify="end"
      class="total-pay"
    >
      <VueCell
        width="2of12"
      >
        <Button @click="toLocalStorage" />
      </VueCell>
    </VueGrid>
  </div>
</template>

<script>

import { VueGrid, VueCell } from 'vue-grd'
import Button from './Button'
import { mapGetters, mapActions } from 'vuex'
import { TO_LOCAL_STORAGE } from '@/store/modules/Payments/action-types'
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
			moment: moment,
			formyte: 'aneeeeeeee'
		}
	},
	computed: {
		...mapGetters('Payments', {
			totalPay: 'totalPay'
		})
	},
	methods: {
		...mapActions('Payments', {
			toLocalStorage: TO_LOCAL_STORAGE
		}),
		handleClick (event) {
		}

	}
}
</script>

<style lang="scss">
	.total-pay {
		padding-top: 20px;
	}
</style>
