<template>
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="basic-form" class="card card card-default scrollspy">
				<div class="card-content">
					<h4 class="card-title">Update Special Issue</h4>
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
								<select required v-model="editRow.j_sec_id" @change="getSecsArtcleTyp">
									<option value=" " disabled>Select Journal Section Title</option>
									<option v-for="(sec , index) in allJournalSecs" :key="index" :value="sec.id">{{ sec.s_title }}</option>
								</select>
								<label class="active">Select Journal Section Title</label>
							</div>
							<div class="input-field col s12">
								<input type="text" required v-model="editRow.sp_issue">
								<label class="active">Special Issue</label>
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
				allSecsArtcleTyp: [],
			}
		},
		mounted () {
			this.getJournalSecs();
			this.getSecsArtcleTyp();
		},
		methods: {
			updateFunc () {
				this.$axios.patch('/api/SpecialIssueContrlr/'+this.editRow.id,this.editRow).then(res => {
					this.$emit('goList');
				});
			},
			getJournalSecs () {
				this.$axios.get('api/getJournalSecs/'+this.editRow.j_id).then(res => {
					this.allJournalSecs = res.data;
				});
			},
			getSecsArtcleTyp () {
				this.$axios.get('api/getSecsArtcleTyp/'+this.editRow.j_sec_id).then(res => {
					this.allSecsArtcleTyp = res.data;
				});
			},
		},
	}
</script>