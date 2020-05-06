<template>
	<div id="app">
		<v-tabBar></v-tabBar>
		<router-view></router-view>
	</div>
</template>

<script>
	import tabBar from './components/tabBar/tabBar'
	export default {
		name:"App",
		components:{
			"v-tabBar":tabBar
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#app
		width 100%
		height 100%
		overflow hidden
</style>
