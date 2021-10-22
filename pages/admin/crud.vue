<template>
	<div id="main">
		<div class="card">
			<div class="card-content">
				<p class="caption mb-0">MY CRUD PAGE</p>
			</div>
		</div>
		<div id="child_pages_id">
			<nuxt-child />
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'admin',
	}
</script>