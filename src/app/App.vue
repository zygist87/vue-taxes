<template>
  <div
    id="#app"
    class="app"
  >
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>
<script>
import Layout from '../layouts/Default'
export default {
	name: 'App',
	components: {
		Layout
	}

}
</script>
<style lang="scss">
	.app {
		background-color: lightgrey;
		padding-left: 10px;
	}
</style>
