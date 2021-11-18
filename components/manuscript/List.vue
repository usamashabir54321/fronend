<template>
	<div class="row">
		<div class="col s12">
			<div class="container">
				<div class="card subscriber-list-card animate fadeRight">

					<h4 class="pt-2 pl-2"><b>My Submissions</b></h4>
					
					<div v-if="script.length > 0" id="scrpt_m_id">
						<div v-for="(row , index) in script" :key="index" class="my_scrpt">
							<div class="scrpt_hdr"><span class="blue-text">{{ index+1 }}.</span> <span class="a_id green-text">{{ row.artcle_id }}</span></div>
							<div class="scrpt_bdy">
								<p class="black-text">{{ row.status }}</p>
								<p class="gray-text">{{ row.artcl_tp.a_t_title }}</p>
								<h5 class="a_title">{{ row.title }}</h5>
								<h5 class="a_authrs"><span v-for="(obj,index) in row.authors" :key="index" class="athr">{{ obj.frist_n }} {{ obj.last_n }} <span class="termntr">, </span></span></h5>
								<p><b>{{ row.journal.title }}</b></p>
								<p><b>{{ row.j_sec.s_title }}</b></p>
								<p><b>{{ row.sp_issue.sp_issue }}</b></p>
								<div class="row pt-1 pb-1">
									<div class="col m1 text_center border-right">
										<div class="black-text">Submitted on</div>
										<div class="gray-text">
											{{
												new Date(row.created_at).toLocaleString('en-us', {
													month: 'long',
													day: 'numeric',
													year: 'numeric',
												})
											}}
										</div>
									</div>
									<div class="col m1 text_center border-right">
										<div class="black-text">Received on</div>
										<div v-if="row.received_on" class="gray-text">02/06/2021</div>
										<div v-else class="gray-text">Not Yet</div>
									</div>
									<div class="col m1 text_center">
										<div class="black-text">Accepted on</div>
										<div v-if="row.accept_on" class="gray-text">02/06/2021</div>
										<div v-else class="gray-text">Not Yet</div>
									</div>
								</div>
								<div class="text_right">
									<button @click="$emit('rowFunc','ManuscriptView',row)" class="btn btn-info mr-2">View Submission</button>
									<button @click="getScrptPdf(row.id)" class="btn btn-info">Download PDF form manuscript</button>
								</div>
							</div>
						</div>
					</div>
					<div v-else class="card-alert card purple">
						<div class="card-content white-text"><b>No Submissions.</b></div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['script'],
	}
</script>

<style>
	div#scrpt_m_id {
	    padding: 25px;
	}
	div#scrpt_m_id .scrpt_hdr {
	    font-size: 22px;
	    font-weight: 900;
	}
	div#scrpt_m_id .scrpt_hdr .a_id {
	    padding-left: 8px;
	}
	div#scrpt_m_id .scrpt_bdy {
	    padding-left: 35px;
	}
	div#scrpt_m_id .scrpt_bdy p {
	    margin: 4px 0;
	}
	div#scrpt_m_id .scrpt_bdy .a_title {
	    font-weight: bold;
	}
	div#scrpt_m_id .scrpt_bdy .athr:last-child .termntr {
		display: none;
	}
	div#scrpt_m_id .scrpt_bdy p b {
	    font-weight: 900;
	    color: black;
	}
	.col.border-right {
	    border-right: 1px solid #ddd;
	}
</style>