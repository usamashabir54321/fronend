<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Update Article Type</h4>
					<form @submit.prevent="updateFunc">
						<div class="row">
							<div class="input-field col s12">
								<select required v-model="editRow.j_id" @change="getJournalSecs">
									<option value=" " disabled>Select your journal title</option>
									<option v-for="(journal , index) in allJournals" :key="index" :value="journal.id">{{ journal.title }}</option>
								</select>
								<label class="active">Select Journal Title</label>
							</div>
							<div class="input-field col s12">
								<select required v-model="editRow.j_sec_id" @change="getJSecIssues">
									<option value=" " disabled>Select Journal Section Title</option>
									<option v-for="(sec , index) in allJournalSecs" :key="index" :value="sec.id">{{ sec.s_title }}</option>
								</select>
								<label class="active">Select Journal Section Title</label>
							</div>
							<div class="input-field col s12">
								<select required v-model="editRow.issue_id">
									<option value=" " disabled>Select Special Issue</option>
									<option v-for="(issue , index) in allIssues" :key="index" :value="issue.id">{{ issue.sp_issue }}</option>
								</select>
								<label class="active">Select Special Issue</label>
							</div>
							<div class="input-field col s12">
								<input type="text" required v-model="editRow.a_t_title">
								<label class="active">Article Type Title</label>
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
		data () {
			return {
				allJournalSecs: [],
				allIssues: [],
			}
		},
		mounted () {
			this.getJournalSecs();
			this.getJSecIssues();
		},
		methods: {
			updateFunc () {
				this.$axios.patch('/api/ArticleTypeContrlr/'+this.editRow.id,this.editRow).then(res => {
					this.$emit('goList');
				});
			},
			getJournalSecs () {
				this.$axios.get('api/getJournalSecs/'+this.editRow.j_id).then(res => {
					this.allJournalSecs = res.data;
				});
			},
			getJSecIssues () {
				this.$axios.get('api/getJSecIssues/'+this.editRow.j_sec_id).then(res => {
					this.allIssues = res.data;
				});
			},
		},
	}
</script>