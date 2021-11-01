<template>
	<div id="main">

		<!-- HEADER BEADCRUMB -->
		<div id="breadcrumbs-wrapper" data-image="/admin/images/gallery/breadcrumb-bg.jpg" class="breadcrumbs-bg-image" style="background-image: url(&quot;/admin/images/gallery/breadcrumb-bg.jpg&quot;);">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 l6"><h5 class="breadcrumbs-title mt-0 mb-0"><span>Add Manu Script Page</span></h5></div>
				</div>
			</div>
		</div>

		<!-- MENU SCIRPT MULITSTEPPER PAGES -->
		<div class="settper_container">
			<div class="row">
				<div class="col s1 m2 l3"></div>
				<div class="col s10 m8 l6" id="settper_main_id">
					<!-- 1ST STTERPER PAGE HTML -->
					<div id="settper_1" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 1">
						<form @submit.prevent="articleStep1Post">

							<div class="settper_hdr"><hr><span>1</span></div>
							<div class="row settper_body">

								<div class="input-field col s6 m6 l6">
									<select required v-model="aStep1Data.j_id" @change="getJournalSecs">
										<option value=" " disabled>Select your journal title</option>
										<option v-for="(journal , index) in allJournals" :key="index" :value="journal.id">{{ journal.title }}</option>
									</select>
									<label :class="aStep1Data.j_id ? 'active' : ''"><span class="red-text">*</span> Select Journal Title</label>
								</div>
								<div class="input-field col s6 m6 l6">
									<select required v-model="aStep1Data.j_sec_id" @change="getSecsArtcleTyp">
										<option value=" " disabled>Select Journal Section Title</option>
										<option v-for="(sec , index) in allJournalSecs" :key="index" :value="sec.id">{{ sec.s_title }}</option>
									</select>
									<label :class="aStep1Data.j_sec_id ? 'active' : ''"><span class="red-text">*</span> Select Journal Section Title</label>
								</div>
								<div class="input-field col s6 m6 l6">
									<select required v-model="aStep1Data.a_t_id" @change="getArtcleTypIssues">
										<option value=" " disabled>Select Article Type Title</option>
										<option v-for="(artcle , index) in allSecsArtcleTyp" :key="index" :value="artcle.id">{{ artcle.a_t_title }}</option>
									</select>
									<label :class="aStep1Data.a_t_id ? 'active' : ''"><span class="red-text">*</span> Select Article Type Title</label>
								</div>
								<div class="input-field col s6 m6 l6">
									<select required v-model="aStep1Data.sp_issue_id">
										<option value=" " disabled>Select Article Type Title</option>
										<option v-for="(issue , index) in allArtcleTypIssues" :key="index" :value="issue.id">{{ issue.sp_issue }}</option>
									</select>
									<label :class="aStep1Data.sp_issue_id ? 'active' : ''"><span class="red-text">*</span> Special Issue</label>
								</div>

								<div class="col s12 m12 l12 mb-1 mt-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Title <span class="info_note">you can add title upto 250 characters</span></label>
										<textarea required v-model="aStep1Data.title" class="form-control" rows="4" placeholder="Title" maxlength="300"></textarea>
									</div>
								</div>
								<div class="col s12 m12 l12 mb-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Running Title <span class="info_note">you can add title upto 50 characters</span></label>
										<textarea required v-model="aStep1Data.a_title" class="form-control" rows="4" placeholder="Title" maxlength="80"></textarea>
									</div>
								</div>
								<div class="col s12 m12 l12 mb-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Abstract</label>
										<textarea required v-model="aStep1Data.abstract" class="form-control" rows="4" placeholder="Title" maxlength="40"></textarea>
									</div>
								</div>
								<div class="col s12 m12 l12 mb-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Keywords <span class="info_note">you can write as keword1 , keyword2 ...</span></label>
										<textarea required v-model="aStep1Data.keywords" class="form-control" rows="4" placeholder="Keywords"></textarea>
									</div>
								</div>
							</div>
							<div class="settper_ftr">
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
							</div>

						</form>
					</div>
					<!-- 2ST STTERPER PAGE HTML -->
					<div id="settper_2" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 2">
						<form @submit.prevent="articleStep2Post">
							<div class="settper_hdr"><hr><span>2</span></div>
							<div class="row settper_body">
								<div class="col s6 m6 l6">
									<div class="form-group border_b file_group_btn">
										<label><span class="sign_requrd">*</span> Manuscript without authors details (.docx)</label>
										<input id="a_doc_file" type="file" class="form-control input_type_file" required accept=".xlsx,.xls,.doc,.docx,.ppt,.pptx,.txt,.pdf" ref="a_doc_file">
										<button type="button" onclick="document.getElementById('a_doc_file').click();" class="btn btn-info wrap_file_btn">Upload</button>
									</div>
									<div class="form-group mt-2">
										<label>Additional Files</label><br>
										<input id="a_mutli_files" type="file" class="form-control input_type_file" multiple style="margin-left: 14px;" ref="a_mutli_files">
										<button type="button" onclick="document.getElementById('a_mutli_files').click();" class="btn btn-info wrap_file_btn">Upload</button>
									</div>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3 border_b file_group_btn">
										<label><span class="sign_requrd">*</span> Figures</label><br>
										<input id="a_figure_pic" type="file" class="form-control input_type_file" style="margin-left: 75px;" required accept="image/*" ref="a_figure_pic">
										<button type="button" onclick="document.getElementById('a_figure_pic').click();" class="btn btn-info wrap_file_btn">Upload Picture</button>
									</div>
									<div class="form-group mb-3">
										<label>Select No of Tables</label>
										<select required v-model="aStep2Data.a_no_tables" class="form-control">
											<option value="" selected disabled>Select No of Table</option>
											<option value="0">0</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
										</select>
									</div>
								</div>
							</div>
							<div class="settper_ftr">
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
							</div>
						</form>
					</div>
					<!-- 3ST STTERPER PAGE HTML -->
					<div id="settper_3" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 3">
						<form @submit.prevent="articleStep3Post">
							<div class="settper_hdr"><hr><span>3</span></div>
							<h4 class="form_title">Add Author</h4>
							<div v-for="(obj , index) in aStep3Data" :key="index" class="row settper_body mt-3">
								<div class="col s12 m12 l12 left-text mb-3" v-if="index != 0">
									<button @click="aStep3Data.splice(index, 1)" type="button" class="red btn btn-reset"><i class="material-icons left">clear</i>Remove</button>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>{{ index+1 }} ) <span class="red-text">*</span> Email</label>
										<input type="email" class="form-control" required placeholder="Type author email" v-model="obj.email">
									</div>
									<div class="form-group mb-3">
										<label><span class="red-text">*</span> Frist Name</label>
										<input type="text" class="form-control" required placeholder="Type Frist Name" v-model="obj.frist_n">
									</div>
									<div class="form-group mb-3">
										<label>Affiliation</label>
										<input type="text" class="form-control" placeholder="Type Affiliation" v-model="obj.affiliation">
									</div>
									<div class="form-group mb-3">
										<label>This is the corresponding author</label>
										<div class="switch"><label class="float-left"><input type="checkbox" v-model="obj.cross_authr"> <span class="lever ml-0"></span></label></div>
									</div>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>Title</label>
										<select class="form-control" v-model="obj.title_h">
											<option selected disabled>Selected Title</option>
											<option value="Mr.">Mr.</option>
											<option value="Mrs.">Mrs.</option>
											<option value="Dr.">Dr.</option>
										</select>
									</div>
									<div class="form-group mb-3 mt-5">
										<label>Last Name</label>
										<input type="text" class="form-control" placeholder="Type Last Name" v-model="obj.last_n">
									</div>
									<div class="form-group mb-3">
										<label>Institute</label>
										<input type="text" class="form-control" placeholder="Type Institute" v-model="obj.insitute">
									</div>
								</div>
							</div>
							<div class="col s6 m6 l6 add_more_btn">
								<button type="button" class="btn waves-effect waves-light amber darken-4 mt-1" @click="aStep3Data.push({title_h:'Mr.',step: 'step3',})">Add another Author</button>
							</div>
							<div class="settper_ftr add_more_ftr">
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
								<button @click="stteperPgIndx += 1;" type="button" class="red btn btn-reset">Skip <i class="material-icons right">arrow_forward</i></button>
							</div>
						</form>
					</div>
					<!-- 4ST STTERPER PAGE HTML -->
					<div id="settper_4" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 4">
						<form @submit.prevent="articleStep4Post">
							<div class="settper_hdr"><hr><span>4</span></div>
							<h4 class="form_title">Recommend Reviewers to Include:</h4>
							<div v-for="(objIn , indIn) in aStep4IncData" :key="indIn" class="row settper_body mt-3">
								<div class="col s12 m12 l12 left-text mb-3" v-if="indIn != 0 && indIn != 1 && indIn != 2">
									<button @click="aStep4IncData.splice(indIn, 1)" type="button" class="red btn btn-reset"><i class="material-icons left">clear</i>Remove</button>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>{{ indIn+1 }} ) <span class="red-text">*</span> Email</label>
										<input type="email" class="form-control" placeholder="Type reviewer email" v-model="objIn.email" required>
									</div>
									<div class="form-group mb-3">
										<label><span class="red-text">*</span> Frist Name</label>
										<input type="text" class="form-control" placeholder="Type Frist Name" v-model="objIn.frist_n" required>
									</div>
									<div class="form-group mb-3">
										<label>Affiliation</label>
										<input type="text" class="form-control" placeholder="Type Affiliation" v-model="objIn.affiliation">
									</div>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>Title</label>
										<select class="form-control" v-model="objIn.title_h">
											<option selected disabled>Selected Title</option>
											<option value="Mr.">Mr.</option>
											<option value="Mrs.">Mrs.</option>
											<option value="Dr.">Dr.</option>
										</select>
									</div>
									<div class="form-group mb-3 mt-5">
										<label>Last Name</label>
										<input type="text" class="form-control" placeholder="Type Last Name" v-model="objIn.last_n">
									</div>
									<div class="form-group mb-3">
										<label>Institute</label>
										<input type="text" class="form-control" placeholder="Type Institute" v-model="objIn.insitute">
									</div>
								</div>
							</div>
							<button type="button" @click="aStep4IncData.push({step: 'step4',action_typ: 'inc reviewer',title_h:'Mr.'})" class="btn waves-effect waves-light amber darken-4">Suggest another reviewer</button>
							<h4 class="form_title">Recommend Reviewers to Exclude:</h4>
							<div v-for="(objEx , indEx) in aStep4ExcData" :key="indEx" class="row settper_body mt-3">
								<div class="col s12 m12 l12 left-text mb-3" v-if="indEx != 0">
									<button @click="aStep4ExcData.splice(indEx, 1)" type="button" class="red btn btn-reset"><i class="material-icons left">clear</i>Remove</button>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>{{ indEx+1 }} ) <span class="red-text">*</span> Email</label>
										<input type="email" class="form-control" placeholder="Type reviewer email" v-model="objEx.email">
									</div>
									<div class="form-group mb-3">
										<label><span class="red-text">*</span> Frist Name</label>
										<input type="text" class="form-control" placeholder="Type Frist Name" v-model="objEx.frist_n">
									</div>
									<div class="form-group mb-3">
										<label>Affiliation</label>
										<input type="text" class="form-control" placeholder="Type Affiliation" v-model="objEx.affiliation">
									</div>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>Title</label>
										<select class="form-control" v-model="objEx.title_h">
											<option selected disabled>Selected Title</option>
											<option value="Mr.">Mr.</option>
											<option value="Mrs.">Mrs.</option>
											<option value="Dr.">Dr.</option>
										</select>
									</div>
									<div class="form-group mb-3 mt-5">
										<label>Last Name</label>
										<input type="text" class="form-control" placeholder="Type Last Name" v-model="objEx.last_n">
									</div>
									<div class="form-group mb-3">
										<label>Institute</label>
										<input type="text" class="form-control" placeholder="Type Institute" v-model="objEx.insitute">
									</div>
								</div>
							</div>
							<button type="button" @click="aStep4ExcData.push({step: 'step4',action_typ: 'exc reviewer',title_h:'Mr.'})" class="btn waves-effect waves-light amber darken-4">Exclude another reviewer</button>

							<div class="settper_ftr">
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
							</div>
						</form>
					</div>
					<!-- 5ST STTERPER PAGE HTML -->
					<div id="settper_5" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 5">
						<form @submit.prevent="articleStep5Post">
							<div class="settper_hdr"><hr><span>5</span></div>
							<h4 class="form_title">Recommend Reviewers to Include:</h4>
							<div class="settper_body">
								<div class="form-group mb-2">
									<p><label><input type="checkbox" v-model="aStep5Data.no_conf"> <span>The authors declare that there is no conflict of interest</span></label></p>
								</div>
								<div class="form-group mb-2">
									<p><label><input type="checkbox" v-model="aStep5Data.accept_con"> <span>I am authorized to submit this article and to agree to the following conditions on behalf of all co-author of this manuscript:</span></label></p>
								</div>
								<div class="form-group mb-3">
									<label>The authors declare a conflict of interest</label>
									<input type="text" class="form-control" placeholder="Type Affiliation" v-model="aStep5Data.con_typ_aff">
								</div>
								<ul id="settper_5_ul">
									<li>This manuscript is not currently under consideration for publication elsewhere and has not been previously published by any other journal or publication forum.</li>
									<li>This manuscript adheres to Scilip Publishing policies in its publishing requirements and standards.</li>
									<li>I have obtained all necessary consents to permit Scilip to publish this article, including any third-party materials,on CC-BY terms.</li>
									<li>I have read, understood and hereby accept the Scilip Terms & Conditions.</li>
								</ul>
							</div>
							<div class="settper_ftr"><button type="submit" class="btn waves-effect waves-light amber darken-4">Save</button></div>
						</form>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import GlobalJs from '~/mixins/global.js';
	export default {
		layout: 'admin',
		mixins: [GlobalJs],
		data () {
			return {
				stteperPgIndx : 1,
				manu_script_id: null,
				allJournals: [],
				allJournalSecs: [],	
				allSecsArtcleTyp: [],
				allArtcleTypIssues: [],
				aStep1Data: { j_id: null,step: 'step1', },
				aStep2Data: { a_no_tables: 0, },
				aStep3Data: [ {title_h:'Mr.',step: 'step3',} ],
				aStep4IncData: [ {step: 'step4',action_typ: 'inc reviewer',title_h:'Mr.',},{step: 'step4',action_typ: 'inc reviewer',title_h:'Mr.',},{step: 'step4',action_typ: 'inc reviewer',title_h:'Mr.',} ],
				aStep4ExcData: [ {step: 'step4',action_typ: 'exc reviewer',title_h:'Mr.'} ],
				aStep5Data: {step: 'step5',manu_script_id:null,},
			}
		},
		mounted () {
  			this.getAllJournals();
  		},
		methods: {
			articleStep1Post () {
				this.$axios.post('api/manuScriptContrlr',this.aStep1Data).then(res => {
					this.manu_script_id = res.data;
					this.swalfire('success','First step is completed successfully.');
					this.stteperPgIndx += 1;
				});
			},
			articleStep2Post () {
				let formData = new FormData();
				formData.append("a_doc_file", this.$refs.a_doc_file.files[0]);
				formData.append("a_figure_pic", this.$refs.a_figure_pic.files[0]);
				formData.append("a_no_tables", this.aStep2Data.a_no_tables);
				formData.append("step", 'step2');
				formData.append("manu_script_id", this.manu_script_id);
				for( var i = 0; i < this.$refs.a_mutli_files.files.length; i++ ){
					let multi_file = this.$refs.a_mutli_files.files[i];
					formData.append('a_mutli_files[' + i + ']', multi_file);
				}
				this.$axios.post('api/manuScriptContrlr',formData).then(res => {
					this.swalfire('success','Second step is completed successfully.');
					this.stteperPgIndx += 1;
				});
			},
			articleStep3Post () {
				for (var i = 0; i < this.aStep3Data.length; i++) {
					this.$axios.patch('api/manuScriptContrlr/'+this.manu_script_id,this.aStep3Data[i]).then(res => {
						if (res.data == 0) {
							this.swalfire('error','This email is already taken as manu script author role.');
						} else if (res.data == 2) {
							this.swalfire('error','This is your email');
						} else {
							this.stteperPgIndx = 4;
							this.swalfire('success','step3 is completed successfully.');
						}
					});
				}
			},
			articleStep4Post () {
				for (var i = 0; i < this.aStep4IncData.length; i++) {
					this.$axios.patch('api/manuScriptContrlr/'+this.manu_script_id,this.aStep4IncData[i]).then(res => {
						if (res.data == 0) {
							this.swalfire('error','This email is already taken.');
						} else if (res.data == 2) {
							this.swalfire('error','This is your email');
						} else {
							this.swalfire('success','Form is saved successfully.');
						}
					});
				}
				setTimeout(() => {
					for (var i = 0; i < this.aStep4ExcData.length; i++) {
						this.$axios.patch('api/manuScriptContrlr/'+this.manu_script_id,this.aStep4ExcData[i]).then(res => {
							if (res.data == 0) {
								this.swalfire('error','This email is already taken.');
							} else if (res.data == 2) {
								this.swalfire('error','This is your email');
							} else {
								this.swalfire('success','Form is saved successfully.');
							}
						});
					}
				},1000);
				setTimeout(() => { this.stteperPgIndx = 5; },3000);
			},
			articleStep5Post () {
				this.aStep5Data.manu_script_id = this.manu_script_id;
				this.$axios.post('api/manuScriptContrlr',this.aStep5Data).then(res => {
					this.swalfire('success','Last step is completed successfully.');
					this.$router.push({name : 'admin-author-manuscripts'});
				});
			},
			getAllJournals () {
  				this.$axios.get('/api/JournalContrlr').then(res => {
					this.allJournals = res.data
				});
  			},
  			getJournalSecs () {
				this.$axios.get('api/getJournalSecs/'+this.aStep1Data.j_id).then(res => {
					this.allJournalSecs = res.data;
				});
			},
			getSecsArtcleTyp () {
				this.$axios.get('api/getSecsArtcleTyp/'+this.aStep1Data.j_sec_id).then(res => {
					this.allSecsArtcleTyp = res.data;
				});
			},
			getArtcleTypIssues () {
				this.$axios.get('api/getArtcleTypIssues/'+this.aStep1Data.a_t_id).then(res => {
					this.allArtcleTypIssues = res.data;
				});
			},
		},
	}
</script>

<style scoped>
	.settper_container {
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
		margin: 20px;
	}
	.settper_hdr {
	    text-align: center;
	    margin: 35px 0;
	}
	.settper_hdr span {
	    position: absolute;
	    margin-top: -24px;
	    background-color: hsl(19deg 89% 57%);
	    border-radius: 50%;
	    font-weight: bold;
	    color: white;
	    padding: 5px 8px;
	}
	.settper_ftr {
	    text-align: center;
	    margin: 35px 0;
	}
	label {
	    font-size: 16px;
	    font-weight: bold;
	    color: #201c1c;
	}
	span.sign_requrd {
	    color: #ff6f00;
	}
	span.info_note {
	    float: right;
	    color: hsl(217deg 36% 57%);
	    font-size: 12px;
	}
	textarea {
	    padding: 7px;
	}
	h4.form_title {
	    font-size: 18px;
	    margin-bottom: 7px;
	    font-weight: bold;
	}
	input.form-control.input_type_file {
	    margin-top: 13px;
	    margin-left: 19px;
	    z-index: 0;
	}
	button.wrap_file_btn {
	    z-index: 1;
	    position: absolute;
	    display: block;
	    margin-top: -29px;
	}
	.border_b {
		border-bottom: 1px solid #ddd;
	}
	.text_center {
		text-align: center;
	}
	ul#settper_5_ul li {
	    list-style: circle;
	    margin-top: 5px;
	}
	.file_group_btn {
		padding-bottom: 16px;
	}
	.add_more_btn {
		text-align: right;
		float: right;
		margin-top: -50px;
	}
	.add_more_ftr {
		text-align: center;
		float: right;
		width: 100%;
	}
</style>