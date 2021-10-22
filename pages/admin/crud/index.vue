<template>
	<div>
		<div class="row">
			<div class="col s12 m12 l12">
				<div id="highlight-table" class="card card card-default scrollspy animate fadeRight">
					<div class="card-content">
						<div class="row">
							<div class="col s10 m10 l10">
								<h4 class="card-title">Crud listing page index page</h4>
								<p class="mb-2">Add <code class="  language-markup">class="Highlight"</code> to the table tag for a highlighttable</p>
							</div>
							<div class="col s2 m2 l2 text-right">
								<nuxt-link to="/admin/crud/create" class="btn btn-info">Create</nuxt-link>
							</div>
						</div>
						<div class="row">
							<div class="col s12">
							</div>
							<div class="col s12">
								<table class="highlight">
									<thead>
										<tr>
											<th>Name</th>
											<th>Item Name</th>
											<th>Item Price</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Alvin</td>
											<td>Eclair</td>
											<td>$0.87</td>
										</tr>
										<tr>
											<td>Alan</td>
											<td>Jellybean</td>
											<td>$3.76</td>
										</tr>
										<tr>
											<td>Jonathan</td>
											<td>Lollipop</td>
											<td>$7.00</td>
										</tr>
										<tr>
											<td>Shannon</td>
											<td>KitKat</td>
											<td>$9.99</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
  		layout: 'admin',
	}
</script>