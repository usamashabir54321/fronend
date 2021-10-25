<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Update Journal</h4>
					<form @submit.prevent="updateFunc">
						<div class="row">
							<div class="input-field col s12">
								<input type="text" required v-model="editRow.title">
								<label class="active">Journal Title</label>
							</div>
							<div class="input-field col s12">
								<button class="btn cyan waves-effect waves-light right" type="submit"><i class="material-icons right">send</i></button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Update Users</h4>
					<form @submit.prevent="updateFunc">
						<div class="row">
							<div class="input-field col s12">
								<input type="text" required v-model="editRow.name">
								<label class="active">User Name</label>
							</div>
							<div class="input-field col s12">
								<input type="email" required v-model="editRow.email">
								<label class="active">User Email</label>
							</div>
							<div class="input-field col s12">
								<input type="text" v-model="editRow.confrm_pass" @keyup="confirmPass">
								<label :class="editRow.confrm_pass ? 'active' : ''">Confirm Password <span v-if="editRow.confrm_pass"><span class="green-text" v-if="isPass">Matched</span><span v-else class="red-text">Not Matched</span></span></label>
							</div>
							<div class="input-field col s12" v-if="isPass">
								<input type="text" required v-model="editRow.new_pass" maxlength="20" minlength="5">
								<label>User Password</label>
							</div>
							<div class="input-field col s12">
								<select v-model="editRow.role">
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
								<label class="active">User Role</label>
							</div>
							<div class="input-field col s12">
								<button class="btn cyan waves-effect waves-light right" type="submit">Update<i class="material-icons right">send</i></button>
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
		props: ['editRow'],
		data () {
			return {
				isChief: null,
				isPass: null,
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
			updateFunc () {
				this.$axios.patch('/api/UserContrlr/'+this.editRow.id,this.editRow).then(res => {
					this.$emit('goList');
				});
			},
			confirmPass () {
				this.$axios.get('api/confirmPass/'+this.editRow.id+'/'+this.editRow.confrm_pass).then(res => {
					if (res.data == 1) {
						this.isPass = true;
					}
				});
			},
		},
	}
</script>