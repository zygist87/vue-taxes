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
      <Button />
    </VueCell>

    <VueCell width="2of12">
      Mokėtina suma
    </VueCell>
  </VueGrid>
</template>

<script>
import { VueGrid, VueCell } from 'vue-grd'
import Button from './Button'
export default {
	name: 'TotalPay',
	components: {
		VueGrid,
		VueCell,
		Button
	}
}
</script>

<style lang="scss">
	.total-pay {
		padding-top: 20px;
	}
</style>
