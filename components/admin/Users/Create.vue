<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Add Users</h4>
					<form @submit.prevent="createFunc">
						<div class="row">
							<div class="input-field col s12">
								<input type="text" required v-model="storeData.name">
								<label>User Name</label>
							</div>
							<div class="input-field col s12">
								<input type="email" required v-model="storeData.email">
								<label>User Email</label>
							</div>
							<div class="input-field col s12">
								<input type="text" required v-model="storeData.password" maxlength="20" minlength="5">
								<label>User Password</label>
							</div>
							<div class="input-field col s12">
								<select required v-model="storeData.role">
									<option value=" " disabled>Select User Role</option>
									<option value="publisher">Publisher</option>
									<option value="editor">Editor</option>
									<option value="reviewer">Reviewer</option>
									<option value="author">Author</option>
									<option value="copy-editor">Copy Editor</option>
									<option value="proofreader">Proofreader</option>
									<option value="academic-editor">Academic Editor</option>
									<option v-if="isChief" value="chief-editor">Chief In Editor</option>
								</select>
								<label :class="storeData.role ? 'active' : ''">User Role</label>
							</div>
							<div class="input-field col s12">
								<button class="btn cyan waves-effect waves-light right" type="submit">Save<i class="material-icons right">send</i></button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				storeData: {},
				isChief: null,
			}
		},
		mounted () {
			this.$axios.get('api/isChiefUser').then(res => {
				if (res.data == 0) {
					this.isChief = true;
				}
			});
		},
		methods: {
			createFunc () {
				this.$axios.post('api/UserContrlr',this.storeData).then(res => {
					if (res.data == 1) {
						console.log('true');
						this.$emit('goList','true');
					} else {
						console.log('false');
						this.$emit('goList','false');
					}
				});
			},
		},
	}
</script>