<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="fixed-form"
  >
    <VueCell
      v-model="form.name"
      width="8of12"
    >
      <slot />
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="rate"
        type="number"
        placeholder="Fixed part"
        @input="updateSinglePayment(form)"
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
import { SET_SINGLE_LINE, UPDATE_SINGLE_PAYMENT } from '@/store/modules/Payments/mutation-types'
import { mapGetters, mapMutations } from 'vuex'

export default {
	name: 'FixedForm',
	components: {
		VueGrid,
		VueCell
	},
	props: {
		name: {
			type: String,
			default: null
		},
		id: {
			type: String,
			default: null
		}
	},
	data () {
		return {
			form: {
				id: this.id,
				name: this.name,
				rate: this.rate,
				pay: 0
			}
		}
	},
	computed: {
		rate: {
			get () {
				return this.form.rate
			},
			set (value) {
				this.form.rate = value
				const rate = value.length > 0 ? value : 0
				this.form.pay = parseFloat(rate, 10).toFixed(2)
			}
		},
		...mapGetters('Payments', {
			singlePayment: 'singlePayment'
		})
	},
	created () {
		const itemFromState = this.singlePayment.find(item => item.id === this.form.id)
		if (!itemFromState) {
			this.setSingleLine({ ...this.form })
		} else {
			this.form = itemFromState
		}
	},
	methods: {
		...mapMutations('Payments', {
			setSingleLine: SET_SINGLE_LINE,
			updateSinglePayment: UPDATE_SINGLE_PAYMENT
		})
	}
}

</script>

<style lang="scss">
	.fixed-form {
		padding-bottom: 10px;
	}
</style>
