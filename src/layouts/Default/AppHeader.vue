<template>
  <div>
    <header class="app-header">
      <nav class="app-navigation">
        <ul class="app-link">
          <li>
            <RouterLink
              v-for="route in links"
              :key="route.name"
              class="app-link"
              :to="{ name: route.name || route.meta.defaultName }"
              exact
            >
              {{ route.meta.displayName }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import routes from '@/routes'
export default {
	name: 'AppHeader',
	data () {
		return {
			routes
		}
	},
	computed: {
		links () {
			return this.routes.filter(route => route.meta.displayName)
		}
	}
}
</script>

<style scope lang="scss">
	.app-header {
		display: flex;
		justify-content: center;
		text-align: center;
		background-color: lightgrey;
		list-style-type: none;
	}
	.app-link {
		font-size: 24px;
		font-weight: 400;
		margin-right: 40px;
		list-style-type: none;
		text-decoration: none;
		color: black;
		width: auto;
	}
	.router-link-active {
		color: blue;
		text-decoration: underline;
	}
</style>
