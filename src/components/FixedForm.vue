<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="fixed-form"
  >
    <VueCell
      v-model="form.name = name"
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
        v-model="form.rate"
        type="number"
        placeholder="Fixed part"
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.pay = form.rate"
        type="text"
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
		name
	},
	data () {
		return {
			form: {
				name: '',
				// name: this.name,
				rate: '',
				pay: ''
			}
		}
	},
	computed: {
		// ...mapState('Payments', {
		// 	singlePayment: 'singlePayment'
		// })
		...mapGetters('Payments', {
			singlePayment: 'singlePayment',
			neww: 'new'
		})
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
