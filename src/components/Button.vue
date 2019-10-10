<template>
  <button
    type="button"
    class="pay-button"
    @click="handleClick"
  >
    Pay
  </button>
</template>
<script>
export default {
	name: 'Button',
	methods: {
		handleClick (e) {
			this.$emit('click', e)
		}
	}
}
</script>

<style lang="scss">
	.pay-button {
		width: 100px;
		height: 24px;
		background-color: orange;
		border: 1px solid orange;
		border-radius: 6px;
	}
</style>
