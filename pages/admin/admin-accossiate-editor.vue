<template>
	<div id="main">

		<!-- HEADER BEADCRUMB -->
		<div id="breadcrumbs-wrapper" data-image="/admin/images/gallery/breadcrumb-bg.jpg" class="breadcrumbs-bg-image" style="background-image: url(&quot;/admin/images/gallery/breadcrumb-bg.jpg&quot;);">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 l6"><h5 class="breadcrumbs-title mt-1 mb-0"><span>Accossiate Editor Configuration Page</span></h5></div>
					<div class="col s12 m6 l6">
						<button v-if="tmplt_name == 'AdminAccsosEditorList'" @click="tmplt_name = 'AdminAccsosEditorCreate'" class="btn waves-effect waves-light gradient-45deg-green-teal float-right">Add</button>
						<button v-else @click="tmplt_name = 'AdminAccsosEditorList'" class="btn waves-effect waves-light gradient-45deg-green-teal float-right">List</button>
					</div>
				</div>
			</div>
		</div>

		<Component :is="tmplt_name" :editRow="editRow" @goList="goList" @updateFunc="updateFunc"/>

	</div>
</template>

<script>
	export default {
  		layout: 'admin',
  		data () {
  			return {
  				tmplt_name: 'AdminAccsosEditorList',
  				editRow: {},
  			}
  		},
  		methods: {
  			goList (status) {
  				if (status == 'false') {
  					this.sweatAlert('error','Please enter a unique email');
  				} else {
  					this.sweatAlert('success','Form is saved successfully.');
  					this.tmplt_name = 'AdminAccsosEditorList';
  				}
  			},
  			updateFunc (row) {
  				this.editRow = row;
  				this.tmplt_name = 'AdminAccsosEditorUpdate';
  			},
  		},
	}
</script>