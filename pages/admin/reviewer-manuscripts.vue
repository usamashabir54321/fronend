<template>
	<div id="main">

		<!-- HEADER BEADCRUMB -->
		<div id="breadcrumbs-wrapper" data-image="/admin/images/gallery/breadcrumb-bg.jpg" class="breadcrumbs-bg-image" style="background-image: url(&quot;/admin/images/gallery/breadcrumb-bg.jpg&quot;);">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 l6"><h5 class="breadcrumbs-title mt-1 mb-0"><span>Manu Scripts Configuration Page</span></h5></div>
					<div class="col s12 m6 l6">
						<button v-if="tmplt_name != 'ReviewerManuscriptList'" @click="tmplt_name = 'ReviewerManuscriptList'" class="btn waves-effect waves-light gradient-45deg-green-teal float-right">List</button>
					</div>
				</div>
			</div>
		</div>

		<Component :is="tmplt_name" :allRow="allRow" @goList="goList" @rowFunc="rowFunc"/>

	</div>
</template>

<script>
	import GlobalJs from '~/mixins/global.js';
	export default {
  		layout: 'admin',
  		mixins: [GlobalJs],
  		data () {
  			return {
  				tmplt_name: 'ReviewerManuscriptList',
  				allRow: {},
  			}
  		},
  		methods: {
  			goList () {
  				this.swalfire('success','Form is saved successfully.');
  				this.tmplt_name = 'ReviewerManuscriptList';
  			},
  			rowFunc (tmplt_name,row) {
  				this.allRow = row;
  				this.tmplt_name = tmplt_name;
  			},
  		},
	}
</script>