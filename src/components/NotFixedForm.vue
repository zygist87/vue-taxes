<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="not-fixed-form"
  >
    <VueCell
      v-model="form.name = name"
      width="2of12"
    >
      <slot />
      <button @click="toConsole">
        to console.log
      </button>
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.from = from"
        type="number"
        placeholder="From"
        value="0"
        disabled
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.to"
        type="number"
        placeholder="To"
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.difference = form.to - form.from"
        type="text"
        placeholder="Difference"
        disabled
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.rate = rate"
        type="number"
        placeholder="Rate"
        disabled
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        v-model="form.pay = form.difference * form.rate"
        type="number"
        placeholder="Pay"
        disabled
      >
    </VueCell>
  </VueGrid>
</template>

<script>
import { VueGrid, VueCell } from 'vue-grd'
export default {
	name: 'NotFixedForm',
	components: {
		VueGrid,
		VueCell
	},
	props: [
		'name',
		'rate',
		'from'
	],
	data () {
		return {
			form: {
				name: '',
				from: '',
				to: '',
				difference: '',
				rate: '',
				pay: ''
			}
		}
	},
	methods: {
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
