<template>
	<div id="main">
		<h1>Link One Page</h1>
	</div>
</template>

<script>
	export default {
  		layout: 'admin',
  		mounted () {
  			this.$axios.get('/api/user/users');
  		},
	}
</script>