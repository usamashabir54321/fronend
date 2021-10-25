<template>
	<div id="main">

		<!-- HEADER BEADCRUMB -->
		<div id="breadcrumbs-wrapper" data-image="/admin/images/gallery/breadcrumb-bg.jpg" class="breadcrumbs-bg-image" style="background-image: url(&quot;/admin/images/gallery/breadcrumb-bg.jpg&quot;);">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 l6"><h5 class="breadcrumbs-title mt-1 mb-0"><span>Journals Configuration Page</span></h5></div>
					<div class="col s12 m6 l6">
						<button v-if="tmplt_name == 'AdminJournalList'" @click="tmplt_name = 'AdminJournalCreate'" class="btn waves-effect waves-light gradient-45deg-green-teal float-right">Add</button>
						<button v-else @click="tmplt_name = 'AdminJournalList'" class="btn waves-effect waves-light gradient-45deg-green-teal float-right">List</button>
					</div>
				</div>
			</div>
		</div>

		<Component :is="tmplt_name" :editRow="editRow" @goList="goList" @updateFunc="updateFunc"/>

	</div>
</template>

<script>
	import GlobalJs from '~/mixins/global.js';
	export default {
  		layout: 'admin',
  		mixins: [GlobalJs],
  		data () {
  			return {
  				tmplt_name: 'AdminJournalList',
  				editRow: {},
  			}
  		},
  		methods: {
  			goList () {
  				this.swalfire('success','Form is saved successfully.');
  				this.tmplt_name = 'AdminJournalList';
  			},
  			updateFunc (row) {
  				this.editRow = row;
  				this.tmplt_name = 'AdminJournalUpdate';
  			},
  		},
	}
</script>