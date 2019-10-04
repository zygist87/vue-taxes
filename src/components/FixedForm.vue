<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="fixed-form"
  >
    <VueCell width="8of12">
      Electricity
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
export default {
	name: 'FixedForm',
	components: {
		VueGrid,
		VueCell
	}
}
</script>

<style lang="scss">
	.fixed-form {
		padding-bottom: 10px;
	}
</style>
