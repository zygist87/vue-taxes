const Welcome = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Welcome')

export default [
	{
		path: '/',
		component: Welcome
	}
]
