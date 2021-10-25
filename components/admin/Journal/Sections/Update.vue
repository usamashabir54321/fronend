<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Update Journal Section</h4>
					<form @submit.prevent="updateFunc">
						<div class="row">
							<div class="input-field col s12">
								<select required v-model="editRow.j_id">
									<option value=" " disabled>Select your journal title</option>
									<option v-for="(journal , index) in allJournals" :key="index" :value="journal.id">{{ journal.title }}</option>
								</select>
								<label class="active">Select Journal Title</label>
							</div>
							<div class="input-field col s12">
								<input type="text" required v-model="editRow.s_title">
								<label class="active">Section Title</label>
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
		props: ['editRow','allJournals'],
		methods: {
			updateFunc () {
				this.$axios.patch('/api/JournalSectionsContrlr/'+this.editRow.id,this.editRow).then(res => {
					this.$emit('goList');
				});
			},
		},
	}
</script>