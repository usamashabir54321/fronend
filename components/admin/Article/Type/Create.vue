<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Add Article Type</h4>
					<form @submit.prevent="createFunc">
						<div class="row">
							<div class="input-field col s12">
								<select required v-model="storeData.j_id" @change="getJournalSecs">
									<option value=" " disabled>Select your journal title</option>
									<option v-for="(journal , index) in allJournals" :key="index" :value="journal.id">{{ journal.title }}</option>
								</select>
								<label :class="storeData.j_id ? 'active' : ''">Select Journal Title</label>
							</div>
							<div class="input-field col s12" @change="getJSecIssues">
								<select required v-model="storeData.j_sec_id">
									<option value=" " disabled>Select Journal Section Title</option>
									<option v-for="(sec , index) in allJournalSecs" :key="index" :value="sec.id">{{ sec.s_title }}</option>
								</select>
								<label :class="storeData.j_sec_id ? 'active' : ''">Select Journal Section Title</label>
							</div>
							<div class="input-field col s12">
								<select required v-model="storeData.issue_id">
									<option value=" " disabled>Select Special Issue</option>
									<option v-for="(issue , index) in allIssues" :key="index" :value="issue.id">{{ issue.sp_issue }}</option>
								</select>
								<label :class="storeData.issue_id ? 'active' : ''">Select Special Issue</label>
							</div>
							<div class="input-field col s12">
								<input type="text" required v-model="storeData.a_t_title">
								<label>Article Type Title</label>
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
				allJournalSecs: [],
				allIssues: [],
			}
		},
		methods: {
			createFunc () {
				this.$axios.post('api/ArticleTypeContrlr',this.storeData).then(res => {
					this.$emit('goList');
				});
			},
			getJournalSecs () {
				this.$axios.get('api/getJournalSecs/'+this.storeData.j_id).then(res => {
					this.allJournalSecs = res.data;
				});
			},
			getJSecIssues () {
				this.$axios.get('api/getJSecIssues/'+this.storeData.j_sec_id).then(res => {
					this.allIssues = res.data;
				});
			},
		},
	}
</script>