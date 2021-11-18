<template>
	<div class="row" ref="pdf_id">
		<div class="col s12">
			<div class="container">
				<div class="card subscriber-list-card animate fadeRight">

					<h4 class="pt-1 pl-3">My Script Details</h4>

					<table class="subscription-table responsive-table highlight">
						<tbody>
								<!-- PART -  1 -->
							<tr>
								<th>Type of article</th>
								<td>{{ allRow.artcl_tp.a_t_title }}</td>
							</tr>
							<tr>
								<th>Title</th>
								<td>{{ allRow.title }}</td>
							</tr>
							<tr>
								<th>Running title</th>
								<td>{{ allRow.a_title }}</td>
							</tr>
							<tr>
								<th>Journal Name</th>
								<td>{{ allRow.journal.title }}</td>
							</tr>
							<tr>
								<th>Section</th>
								<td>{{ allRow.j_sec.s_title }}</td>
							</tr>
							<tr>
								<th>Special issue</th>
								<td>{{ allRow.sp_issue.sp_issue }}</td>
							</tr>
							<tr>
								<th>Abstract</th>
								<td>{{ allRow.abstract }}</td>
							</tr>
							<tr>
								<th>Keywords</th>
								<td>{{ allRow.keywords }}</td>
							</tr>
								<!-- PART -  3 -->
							<tr>
								<th>Order of authors</th>
								<td>
									<div v-for="(obj , index) in allRow.authors" :key="index" class="mb-2">
										<h6>{{ index+1 }} {{ obj.title_h }} {{ obj.frist_n }} {{ obj.last_n }} <span v-if="obj.cross_authr">[ Corresponding Author ]</span></h6>
										<h6 class="pl-1">Email <a href="javascript:;">{{ obj.email }}</a></h6>
										<h6 class="pl-1">{{ obj.affiliation }}</h6>
										<h6 class="pl-1">{{ obj.insitute }}</h6>
									</div>
								</td>
							</tr>
							<tr>
								<th>Included reviewer</th>
								<td>
									<div v-for="(obj , index) in allRow.inc_revwr" :key="index" class="mb-2">
										<h6>{{ index+1 }} {{ obj.title_h }} {{ obj.frist_n }} {{ obj.last_n }}</h6>
										<h6 class="pl-1">Email <a href="javascript:;">{{ obj.email }}</a></h6>
										<h6 class="pl-1">{{ obj.affiliation }}</h6>
										<h6 class="pl-1">{{ obj.insitute }}</h6>
									</div>
								</td>
							</tr>
							<tr>
								<th>Excluded reviewer</th>
								<td>
									<div v-for="(obj , index) in allRow.exc_revwr" :key="index" class="mb-2">
										<h6>{{ index+1 }} {{ obj.title_h }} {{ obj.frist_n }} {{ obj.last_n }}</h6>
										<h6 class="pl-1">Email <a href="javascript:;">{{ obj.email }}</a></h6>
										<h6 class="pl-1">{{ obj.affiliation }}</h6>
										<h6 class="pl-1">{{ obj.insitute }}</h6>
									</div>
								</td>
							</tr>
								<!-- PART -  2 -->
							<tr>
								<th>Conflict of interest</th>
								<td><span v-if="allRow.no_conf">Yes</span><span v-else>No</span></td>
							</tr>
							<tr>
								<th>Number of tables</th>
								<td>{{ allRow.a_no_tables }}</td>
							</tr>
							<tr>
								<th>Number of figures</th>
								<td>{{ allRow.a_no_figures }}</td>
							</tr>
							<tr>
								<th>Full manuscript file</th>
								<td><a :href="`${$axios.defaults.baseURL}${allRow.doc_file_path}`" target="_blank">{{ allRow.doc_file_n }}</a></td>
							</tr>
							<tr>
								<th>Figures</th>
								<td>
									<div class="row">
										<div v-for="(obj , index) in allRow.figures" :key="index" class="col m4 mt-1"><img :src="`${$axios.defaults.baseURL}${obj.f_path}`" width="200" height="200"></div>
									</div>
								</td>
							</tr>
							<tr>
								<th>Additional Files</th>
								<td v-if="allRow.add_files.length > 0">
									<a v-for="(obj , index) in allRow.add_files" :key="index" :href="`${$axios.defaults.baseURL}${obj.f_path}`" download target="_blank">{{ index+1 }} ) {{ obj.f_name }} <br></a>
								</td>
								<td v-else><span>No Attached File</span></td>
							</tr>
						</tbody>
					</table>

					<div class="text_center mt-3 pb-3">
						<button @click="$emit('goList','AuthorManuscriptUpdate')" class="btn btn-info mr-2">Edit Submission</button>
						<button @click="$emit('goList','AuthorManuscriptList')" class="btn btn-info mr-2"> Save & Submit later</button>
						<button v-if="allRow.is_comp" @click="getScrptPdf(allRow.id)" class="btn btn-info">Proceed to Build PDF and Approve submission</button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['allRow'],
	}
</script>

<style scoped>
	th {width: 45%;padding-left: 65px !important;}td {width: 55%;}
	th,td,td h6 {color: black;}
	.div_users {
	    padding: 20px;
	    border-bottom: 1px solid #ddd;
	    width: 85%;
	    margin-left: auto;
	    text-align: left;
	}
	td.main_user_td .div_users:last-child {border: none;}
</style>