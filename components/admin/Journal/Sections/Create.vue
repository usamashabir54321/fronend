<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Add Journal Section</h4>
					<form @submit.prevent="createFunc">
						<div class="row">
							<div class="input-field col s12">
								<select required v-model="storeData.j_id">
									<option value=" " disabled>Select your journal title</option>
									<option v-for="(journal , index) in allJournals" :key="index" :value="journal.id">{{ journal.title }}</option>
								</select>
								<label :class="storeData.j_id ? 'active' : ''">Select Journal Title</label>
							</div>
							<div class="input-field col s12">
								<input type="text" required v-model="storeData.s_title">
								<label>Section Title</label>
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
		props: ['allJournals'],
		data () {
			return {
				storeData: {},
			}
		},
		methods: {
			createFunc () {
				this.$axios.post('api/JournalSectionsContrlr',this.storeData).then(res => {
					this.$emit('goList');
				});
			},
		},
	}
</script>