<template>
	<div class="row">
		<div class="col s12">
			<div class="container">
				<div class="card subscriber-list-card animate fadeRight">

					<table v-if="group_scrpts.length > 0" class="subscription-table responsive-table highlight">
						<thead>
							<tr>
								<th>Id</th>
								<th>Script Title</th>
								<th>Status</th>
								<th>Journal</th>
								<th>Sections</th>
								<th>Added By</th>
								<th>Created At</th>
								<th class="center-align">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row , index) in group_scrpts" :key="index">

								<td>{{ index+1 }}</td>
								<td>{{ row.title }}</td>
								<td>
									<span v-if="row.status == 'progressing'" class="badge gradient-45deg-light-blue-cyan">{{ row.status }}</span>
								</td>
								<td>{{ row.get_journal.title }}</td>
								<td>{{ row.get_journal_sec.s_title }}</td>
								<td>{{ row.get_added_by.name }}</td>
								<td>
									{{
										new Date(row.created_at).toLocaleString('en-us', {
											month: 'long',
											day: 'numeric',
											year: 'numeric',
										})
									}}
								</td>
								<td class="center-align">
									<a @click="$emit('rowFunc','AuthorManuscriptVeiw',row)" class="btn-floating waves-effect waves-light purple lightrn-1"><i class="material-icons">remove_red_eye</i></a>
								</td>
							</tr>
						</tbody>
					</table>
					<div v-else class="card-alert card purple">
						<div class="card-content white-text"><b>No Record.</b></div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				my_scripts: [],
				group_scrpts: [],
			}
		},
		mounted () {
			this.getData();
		},
		methods: {
			getData () {
				this.$axios.get('/api/manuScriptContrlr').then(res => {
					this.my_scripts = res.data.my_scripts;
					this.group_scrpts = res.data.group_scrpts;
				});
			},
		},
	}
</script>

<style>
	.m_20 {margin-right: 20px;}
	.btn-floating {line-height: unset;width: 34px;height: 34px;}
	.btn-floating i {font-size: 1.3rem;line-height: 35px;}
</style>