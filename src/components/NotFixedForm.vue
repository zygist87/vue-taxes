<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="not-fixed-form"
  >
    <VueCell
      v-model="form.name"
      width="2of12"
    >
      <slot />
      <button @click="toConsole">
        to console.log
      </button>
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.from"
        type="number"
        placeholder="From"
        value="0"
        disabled
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="to"
        type="number"
        placeholder="To"
		@input="updateSinglePayment(form)"
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.difference"
        type="number"
        placeholder="Difference"
        disabled
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.rate"
        type="number"
        placeholder="Rate"
        disabled
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.pay"
        type="number"
        placeholder="Pay"
        disabled
      >
    </VueCell>
  </VueGrid>
</template>

<script>
import { VueGrid, VueCell } from 'vue-grd'
import {SET_SINGLE_LINE, UPDATE_SINGLE_PAYMENT} from '@/store/modules/Payments/mutation-types'
import {mapMutations} from 'vuex'
export default {
	name: 'NotFixedForm',
	components: {
		VueGrid,
		VueCell
	},
	props: {
		id: {
			type: String,
			default: null
		},
		name: {
			type: String,
			default: null
		},
		from: {
			type: Number,
			default: 0
		},
		rate: {
			type: Number,
			default: 0
		}
	},
	data () {
		return {
			form: {
				id: this.id,
				name: this.name,
				from: this.from,
				to: 0,
				difference: 0,
				rate: this.rate,
				pay: 0
			}
		}
	},
	computed: {
		to: {
			get () {
				return this.form.to
			},
			set (value) {
				this.form.to = value
				const to = value.length > 0 ? value : 0
				this.form.difference = parseFloat(to, 10) - parseFloat(this.form.from, 10)
				this.form.pay = (this.form.difference * this.form.rate).toFixed(2)
			}
		}
	},
	created () {
		this.setSingleLine({...this.form})
	},
	methods: {
		...mapMutations('Payments', {
			setSingleLine: SET_SINGLE_LINE,
			updateSinglePayment: UPDATE_SINGLE_PAYMENT
		}),
		toConsole () {
			console.log('name ' + this.form.name)
			console.log('from ' + this.form.from)
			console.log('to ' + this.form.to)
			console.log('difference ' + this.form.difference)
			console.log('rate ' + this.form.rate)
			console.log('pay ' + this.form.pay)
		}
	}

}
</script>

<style lang="scss">
	.not-fixed-form {
		padding-bottom: 10px;
	}
</style>
