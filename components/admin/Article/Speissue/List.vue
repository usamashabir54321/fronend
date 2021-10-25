<template>
	<div class="row">
		<div class="col s12">
			<div class="container">
				<div class="card subscriber-list-card animate fadeRight">
					
					<table class="subscription-table responsive-table highlight">
						<thead>
							<tr>
								<th>Id</th>
								<th>Special Issue</th>
								<th>Journal Title</th>
								<th>Sections Title</th>
								<th>Aritcle Type Title</th>
								<th class="center-align">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row , index) in listData" :key="index">
								<td>{{ index+1 }}</td>
								<td>{{ row.sp_issue }}</td>
								<td>{{ row.get_journal.title }}</td>
								<td>{{ row.get_journal_sec.s_title }}</td>
								<td>{{ row.get_sec_artcle_typ.a_t_title }}</td>
								<td class="center-align">
									<a @click="$emit('updateFunc',row)" class="btn-floating waves-effect waves-light gradient-45deg-purple-deep-orange gradient-shadow"><i class="material-icons">edit</i></a>&nbsp;
									<a @click="deleteFunc(row.id)" class="btn-floating waves-effect waves-light gradient-45deg-amber-amber gradient-shadow"><i class="material-icons">delete</i></a>
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
		data () {
			return {
				listData: [],
			}
		},
		mounted () {
			this.getData();
		},
		methods: {
			getData () {
				this.$axios.get('/api/SpecialIssueContrlr').then(res => {
					this.listData = res.data
				});
			},
			deleteFunc (row_id) {
				const swalWithBootstrapButtons = this.$swal.mixin({
					customClass: {
						confirmButton: 'btn btn-large waves-effect waves-light gradient-45deg-green-teal gradient-shadow',
						cancelButton: 'btn btn-large waves-effect waves-light gradient-45deg-purple-deep-orange gradient-shadow m_20'
					},
					buttonsStyling: false
				})
				swalWithBootstrapButtons.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonText: 'Yes, delete it!',
					cancelButtonText: 'No, cancel!',
					reverseButtons: true
				}).then((result) => {
					if (result.isConfirmed) {
						/*DELETING BY AXIOS*/
						this.$axios.delete('/api/SpecialIssueContrlr/'+row_id).then(res => {
							this.getData();
						});
						swalWithBootstrapButtons.fire(
							'Deleted!',
							'Your file has been deleted.',
							'success'
						)
					} else if (
						result.dismiss === this.$swal.DismissReason.cancel
						) {
						swalWithBootstrapButtons.fire(
							'Cancelled',
							'Your imaginary file is safe :)',
							'error'
						)
					}
				})
			},
		},
	}
</script>

<style>
	.m_20 {margin-right: 20px;}
	.btn-floating {line-height: unset;width: 34px;height: 34px;}
	.btn-floating i {font-size: 1.3rem;line-height: 35px;}
</style>