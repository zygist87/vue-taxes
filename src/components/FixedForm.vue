<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="fixed-form"
  >
    <VueCell width="8of12">
      <!-- <slot />  -->
      <ul>
        <li v-for="one in neww">
          {{ one }}
        </li>
      </ul>
      {{ singlePayment }}
      {{ neww }}
    </VueCell>
    <VueCell width="2of12">
      <input
        type="text"
        placeholder="Fixed part"
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        type="text"
        placeholder="Pay"
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
	data () {
		return {
			payment: {}
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
	}
}

</script>

<style lang="scss">
	.fixed-form {
		padding-bottom: 10px;
	}
</style>
