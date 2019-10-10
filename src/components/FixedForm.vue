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
      <button @click="toConsole">
        to console.log
      </button>
      <!-- <ul>
        <li v-for="one in neww">
          {{ one }}
        </li>
      </ul>
      {{ singlePayment }}
      {{ neww }} -->
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="rate"
        type="number"
        placeholder="Fixed part"
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
import { mapGetters } from 'vuex'

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
		}
	},
	data () {
		return {
			form: {
				name: this.name,
				rate: 0,
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
		// ...mapState('Payments', {
		// 	singlePayment: 'singlePayment'
		// })
		...mapGetters('Payments', {
			singlePayment: 'singlePayment',
			neww: 'new'
		})
	},
	created () {

	},
	methods: {
		toConsole () {
			console.log('name ' + this.form.name)
			console.log('rate ' + this.form.rate)
			console.log('pay ' + this.form.pay)
		}
	}
}

</script>

<style lang="scss">
	.fixed-form {
		padding-bottom: 10px;
	}
</style>
