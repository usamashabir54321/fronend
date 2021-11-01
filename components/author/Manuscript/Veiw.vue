<template>
	<div class="row">
		<div class="col s12">
			<div class="container">
				<div class="card subscriber-list-card animate fadeRight">

					<h4 class="pt-1 pl-3">My Script Details</h4>
					
					<table class="subscription-table responsive-table highlight">
						<thead>

							<tr>
								<th width="40%">Heading</th>
								<th>Value</th>
							</tr>

						</thead>
						<tbody>
								<!-- GENERAL DETAILS -->
							<tr>
								<th>Title</th>
								<td>{{ allRow.title }}</td>
							</tr>
							<tr>
								<th>Runnig Title</th>
								<td>{{ allRow.a_title }}</td>
							</tr>
							<tr>
								<th>Abstract</th>
								<td>{{ allRow.abstract }}</td>
							</tr>
							<tr>
								<th>Keywords</th>
								<td>{{ allRow.keywords }}</td>
							</tr>
							<tr>
								<th>Status</th>
								<td>
									<span v-if="allRow.status == 'progressing'" class="badge gradient-45deg-light-blue-cyan">{{ allRow.status }}</span>
								</td>
							</tr>
								<!-- STEP - 1 DETAILS -->
							<tr>
								<th>Jouranl</th>
								<td>{{ allRow.get_journal.title }}</td>
							</tr>
							<tr>
								<th>Journal Section</th>
								<td>{{ allRow.get_journal_sec.s_title }}</td>
							</tr>
							<tr>
								<th>Journal Section Article Type</th>
								<td>{{ allRow.get_sec_artcle_typ.a_t_title }}</td>
							</tr>
							<tr>
								<th>Article Type Special Issue</th>
								<td>{{ allRow.get_artcle_typ_sp_issue.sp_issue }}</td>
							</tr>
								<!-- STEP - 2 DETAILS -->
							<tr>
								<th>View Script Docx File</th>
								<td>
									<a :href="`${$axios.defaults.baseURL}${allRow.doc_file_n}`" download target="_blank">{{ allRow.doc_file_n }}</a>
								</td>
							</tr>
							<tr>
								<th>Script File Figure</th>
								<td>
									<img :src="`${$axios.defaults.baseURL}${allRow.figure_pic_n}`" width="200" height="200">
								</td>
							</tr>
							<tr>
								<th>View Script Additional Files</th>
								<td v-if="allRow.get_script_files.length > 0">
									<a v-for="(file , index) in allRow.get_script_files" :href="`${$axios.defaults.baseURL}${file.f_path}`" download target="_blank">{{ index+1 }} ) {{ file.f_path }} <br></a>
								</td>
								<td v-else><span>No Attached File</span></td>
							</tr>
							<tr>
								<th>Numbers Of Tables</th>
								<td>{{ allRow.a_no_tables }}</td>
							</tr>
								<!-- STEP - 3 DETAILS -->
							<tr>
								<th>Grouped Authors</th>
								<td class="main_user_td">
									<div v-for="(user , index) in groupAuthr" :key="index" class="div_users">
										<div class="user_sub">
											<div class="row">
												<div class="col s6 m6 l6"><b>Name</b></div>
												<div class="col s6 m6 l6">{{ user.title_h }} {{ user.frist_n }} {{ user.last_n }}</div>
												<div class="col s6 m6 l6"><b>Email</b></div>
												<div class="col s6 m6 l6">{{ user.email }}</div>
												<div class="col s6 m6 l6"><b>Affiliation</b></div>
												<div class="col s6 m6 l6">{{ user.affiliation }}</div>
												<div class="col s6 m6 l6"><b>Institute</b></div>
												<div class="col s6 m6 l6">{{ user.insitute }}</div>
												<div class="col s6 m6 l6"><b>Is Corresponding Author</b></div>
												<div class="col s6 m6 l6"><span v-if="user.cross_authr">Yes</span><span v-else>No</span></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
								<!-- STEP - 4 DETAILS -->
							<tr>
								<th>Included Reviewers</th>
								<td class="main_user_td">
									<div v-for="(user , index) in s_incRvwr" :key="index" class="div_users">
										<div class="user_sub">
											<div class="row">
												<div class="col s6 m6 l6"><b>Name</b></div>
												<div class="col s6 m6 l6">{{ user.title_h }} {{ user.frist_n }} {{ user.last_n }}</div>
												<div class="col s6 m6 l6"><b>Email</b></div>
												<div class="col s6 m6 l6">{{ user.email }}</div>
												<div class="col s6 m6 l6"><b>Affiliation</b></div>
												<div class="col s6 m6 l6">{{ user.affiliation }}</div>
												<div class="col s6 m6 l6"><b>Institute</b></div>
												<div class="col s6 m6 l6">{{ user.insitute }}</div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>Excluded Reviewers</th>
								<td class="main_user_td">
									<div v-for="(user , index) in s_excRvwr" :key="index" class="div_users">
										<div class="user_sub">
											<div class="row">
												<div class="col s6 m6 l6"><b>Name</b></div>
												<div class="col s6 m6 l6">{{ user.title_h }} {{ user.frist_n }} {{ user.last_n }}</div>
												<div class="col s6 m6 l6"><b>Email</b></div>
												<div class="col s6 m6 l6">{{ user.email }}</div>
												<div class="col s6 m6 l6"><b>Affiliation</b></div>
												<div class="col s6 m6 l6">{{ user.affiliation }}</div>
												<div class="col s6 m6 l6"><b>Institute</b></div>
												<div class="col s6 m6 l6">{{ user.insitute }}</div>
											</div>
										</div>
									</div>
								</td>
							</tr>
								<!-- STEP - 5 DETAILS -->
							<tr>
								<th>Is No Conflict Interest</th>
								<td>
									<p v-if="allRow.no_conf">Accepted</p>
									<p v-else>Rejected</p>
								</td>
							</tr>
							<tr>
								<th>Accepting all Conditions</th>
								<td>
									<p v-if="allRow.accept_con">Accepted</p>
									<p v-else>Rejected</p>
								</td>
							</tr>
							<tr>
								<th>Type Affliation</th>
								<td>
									<p v-if="allRow.con_typ_aff">{{ allRow.con_typ_aff }}</p>
									<p v-else>Nothing</p>
								</td>
							</tr>
								<!-- LAST INFORMATIONS -->
							<tr>
								<th>Created At</th>
								<td>
									{{
										new Date(allRow.created_at).toLocaleString('en-us', {
											month: 'long',
											day: 'numeric',
											year: 'numeric',
										})
									}}
								</td>
							</tr>

						</tbody>
					</table>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['allRow'],
		data () {
			return {
				groupAuthr: [],
				s_incRvwr: [],
				s_excRvwr: [],
			}
		},
		mounted () {
			this.$axios.get('/api/getScriptUsers/'+this.allRow.id).then(res => {
				this.groupAuthr = res.data.groupAuthr;
				this.s_incRvwr = res.data.s_incRvwr;
				this.s_excRvwr = res.data.s_excRvwr;
			});
		},
	}
</script>

<style scoped>
	th,td {
		text-align: center;
	}
	.div_users {
	    padding: 20px;
	    border-bottom: 1px solid #ddd;
	    width: 85%;
	    margin-left: auto;
	    text-align: left;
	}
	td.main_user_td .div_users:last-child {
	    border: none;
	}
</style>