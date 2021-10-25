<template>
	<div id="main">

		<!-- HEADER BEADCRUMB -->
		<div id="breadcrumbs-wrapper" data-image="/admin/images/gallery/breadcrumb-bg.jpg" class="breadcrumbs-bg-image" style="background-image: url(&quot;/admin/images/gallery/breadcrumb-bg.jpg&quot;);">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 l6"><h5 class="breadcrumbs-title mt-1 mb-0"><span>Article Type Configuration Page</span></h5></div>
					<div class="col s12 m6 l6">
						<button v-if="tmplt_name == 'AdminArticleTypeList'" @click="tmplt_name = 'AdminArticleTypeCreate'" class="btn waves-effect waves-light gradient-45deg-green-teal float-right">Add</button>
						<button v-else @click="tmplt_name = 'AdminArticleTypeList'" class="btn waves-effect waves-light gradient-45deg-green-teal float-right">List</button>
					</div>
				</div>
			</div>
		</div>

		<Component :is="tmplt_name" :editRow="editRow" :allJournals="allJournals" @goList="goList" @updateFunc="updateFunc"/>

	</div>
</template>

<script>
	import GlobalJs from '~/mixins/global.js';
	export default {
  		layout: 'admin',
  		mixins: [GlobalJs],
  		data () {
  			return {
  				tmplt_name: 'AdminArticleTypeList',
  				editRow: {},
  				allJournals: [],
  			}
  		},
  		mounted () {
  			this.getAllJournals();
  		},
  		methods: {
  			goList () {
  				this.swalfire('success','Form is saved successfully.');
  				this.tmplt_name = 'AdminArticleTypeList';
  			},
  			updateFunc (row) {
  				this.editRow = row;
  				this.tmplt_name = 'AdminArticleTypeUpdate';
  			},
  			getAllJournals () {
  				this.$axios.get('/api/JournalContrlr').then(res => {
					this.allJournals = res.data
				});
  			},
  		},
	}
</script>