<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Add Accossiate Editor</h4>
					<form @submit.prevent="createFunc">

						<div class="row">
							<div class="input-field col s6">
								<input type="text" required v-model="storeData.f_name">
								<label>Editor First Name</label>
							</div>
							<div class="input-field col s6">
								<input type="text" required v-model="storeData.l_name">
								<label>Editor Last Name</label>
							</div>
							<div class="input-field col s12">
								<input type="email" required v-model="storeData.email">
								<label>Editor Email</label>
							</div>
							<div class="input-field col s12">
								<input type="text" required v-model="storeData.password" maxlength="20" minlength="5">
								<label>Editor Password</label>
							</div>
							<div class="input-field col s12">
								<select required v-model="storeData.j_id">
									<option value=" " disabled>Select journal title</option>
									<option v-for="(journal , index) in allJournals" :key="index" :value="journal.id">{{ journal.title }}</option>
								</select>
								<label :class="storeData.j_id ? 'active' : ''">Select Journal</label>
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
				storeData: {role:'accoss editor',},
				allJournals: [],
			}
		},
		mounted () {
			this.getRemainJournl();
		},
		methods: {
			createFunc () {
				this.$axios.post('api/AcosiateEditorContrlr',this.storeData).then(res => {
					if (res.data == 1) this.$emit('goList','true');
					else this.$emit('goList','false');
				});
			},
			getRemainJournl () {
				this.$axios.get('api/accContrlrCode/getEmptyJrnl').then(res => {
					this.allJournals = res.data;
				});
			},
		},
	}
</script>