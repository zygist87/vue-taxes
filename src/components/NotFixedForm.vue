<template>
  <VueGrid
    align="stretch"
    justify="start"
    class="not-fixed-form"
  >
    <VueCell width="2of12">
      <slot />
    </VueCell>
    <VueCell width="2of12">
      <input
        type="text"
        placeholder="From"
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        type="text"
        placeholder="To"
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        type="text"
        placeholder="Difference"
      >
    </VueCell>
    <VueCell width="2of12">
      <input
        type="text"
        placeholder="Rate"
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
	name: 'NotFixedForm',
	components: {
		VueGrid,
		VueCell
	}
}
</script>

<style lang="scss">
	.not-fixed-form {
		padding-bottom: 10px;
	}
</style>
