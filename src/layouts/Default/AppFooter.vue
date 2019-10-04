<template>
  <div>
    <footer class="app-footer">
      © Copyright {{ date }}
    </footer>
  </div>
</template>

<script>
export default {
	name: 'AppFooter',
	data () {
		return {
			date: new Date().getFullYear()
		}
	}

}
</script>

<style lang="scss">
	.app-footer {
		text-align: center;
		color: red;
		padding-top: 60px;
		padding-bottom: 20px;
	}
</style>
