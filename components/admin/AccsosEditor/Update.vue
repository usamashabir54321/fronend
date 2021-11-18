<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Update Accossiate Editor</h4>
					<form @submit.prevent="updateFunc">

						<div class="row">
							<div class="input-field col s6">
								<input type="text" required v-model="editRow.f_name">
								<label class="active">Editor First Name</label>
							</div>
							<div class="input-field col s6">
								<input type="text" required v-model="editRow.l_name">
								<label class="active">Editor Last Name</label>
							</div>
							<div class="input-field col s12">
								<input type="email" required v-model="editRow.email">
								<label class="active">Editor Email</label>
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
								<select v-model="editRow.new_j_id">
									<option value=" " disabled>Select journal title</option>
									<option v-for="(journal , index) in allJournals" :key="index" :value="journal.id">{{ journal.title }}</option>
								</select>
								<label :class="editRow.new_j_id ? 'active' : ''">Update Journal <span v-if="editRow.get_journal.title">{{ editRow.get_journal.title }}</span></label>
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
				allJournals: [],
				isPass: null,
			}
		},
		mounted () {
			this.getRemainJournl();
		},
		methods: {
			updateFunc () {
				this.$axios.patch('/api/AcosiateEditorContrlr/'+this.editRow.id,this.editRow).then(res => {
					this.$emit('goList');
				});
			},
			getRemainJournl () {
				this.$axios.get('api/accContrlrCode/getEmptyJrnl').then(res => {
					this.allJournals = res.data;
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