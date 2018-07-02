
<style src="./assets/main.css"></style>


<template>
	<div id="app">

		<router-view />

	</div>
</template>


<script>
	import HeaderMain from './components/HeaderMain'
	import FooterMain from './components/FooterMain'

	export default {
		name: 'App',
		components: {
			HeaderMain,
			FooterMain
		}
	}
</script>
