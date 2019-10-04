<template>
  <div>
    <header class="app-header">
      <p class="app-header--link">
        Declaration
      </p>
      <p class="app-header--link">
        History
      </p>
    </header>
  </div>
</template>

<script>
export default {
	name: 'AppHeader'
}
</script>

<style lang="scss">
	.app-header {
		justify-content: center;
		text-align: center;
		color: red;
		display: flex;
		padding-bottom: 20px;
		&--link {
			padding: 10px;
		}
	}
</style>
