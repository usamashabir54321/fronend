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
		<div v-show="!is_view_com" class="settper_container" id="m_script_f_id">
			<div class="row">
				<div class="col s1 m2 l2"></div>
				<div id="settper_main_id" class="col s11 m10 l8">

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
									<select required v-model="aStep1Data.j_sec_id" @change="getJSecIssues">
										<option value=" " disabled>Select Journal Section</option>
										<option v-for="(sec , index) in allJournalSecs" :key="index" :value="sec.id">{{ sec.s_title }}</option>
									</select>
									<label :class="aStep1Data.j_sec_id ? 'active' : ''"><span class="red-text">*</span> Select Journal Section</label>
								</div>
								<div class="input-field col s6 m6 l6">
									<select required v-model="aStep1Data.sp_issue_id" @change="getIssueArtcleTyp">
										<option value=" " disabled>Select Special Issue</option>
										<option v-for="(issue , index) in allIssues" :key="index" :value="issue.id">{{ issue.sp_issue }}</option>
									</select>
									<label :class="aStep1Data.sp_issue_id ? 'active' : ''"><span class="red-text">*</span> Special Issue</label>
								</div>
								<div class="input-field col s6 m6 l6">
									<select required v-model="aStep1Data.a_t_id">
										<option value=" " disabled>Select Article Type</option>
										<option v-for="(artcle , index) in allIssueArtcleTyp" :key="index" :value="artcle.id">{{ artcle.a_t_title }}</option>
									</select>
									<label :class="aStep1Data.a_t_id ? 'active' : ''"><span class="red-text">*</span> Select Article Type</label>
								</div>
								<div class="col s12 m12 l12 mb-1 mt-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Title <span class="info_note">Add title up to 30 words</span></label>
										<textarea required v-model="aStep1Data.title" class="form-control" rows="4" placeholder="Title" @keyup="maxlengthCheck(aStep1Data.title, 30,'ATitle')"></textarea>
									</div>
								</div>
								<div class="col s12 m12 l12 mb-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Running Title <span class="info_note">Add running title up to 10 words</span></label>
										<textarea required v-model="aStep1Data.a_title" class="form-control" rows="4" placeholder="Title" @keyup="maxlengthCheck(aStep1Data.a_title, 10,'ARtitle')"></textarea>
									</div>
								</div>
								<div class="col s12 m12 l12 mb-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Abstract <span class="info_note">Add abstract up to 300 words</span></label>
										<textarea required v-model="aStep1Data.abstract" class="form-control" rows="4" placeholder="Title" @keyup="maxlengthCheck(aStep1Data.abstract, 300,'AAbscract')"></textarea>
									</div>
								</div>
								<div class="col s12 m12 l12 mb-1">
									<div class="form-group">
										<label><span class="sign_requrd">*</span> Keywords <span class="info_note">Please enter 6 to 10 keywords separated by smicolons (;) like Keyword 1;Keyword 2</span></label>
										<div class="row" v-if="allKewords.length < 10">
											<div class="col s6 m6 l6 mb-1 c_inpt_div">
												<input type="text" class="custom_input" v-model="keywordTxt" @keypress.enter.prevent="addMyKeword"><button type="button" @click="addMyKeword"><i class="material-icons">add</i></button>
											</div>
										</div>
										<div id="all_keyword_div" class="mt-1">
											<button v-for="(key , index) in allKewords" :key="index" type="button" class="btn btn-info mt-1 mr-2">{{ key }} <span class="material-icons" @click.prevent="allKewords.splice(index,1)">close</span></button>
										</div>
									</div>
								</div>

							</div>
							<div class="settper_ftr">
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
								<button v-if="manu_script_id" @click="stteperPgIndx += 1" type="button" class="btn btn-info">Next <i class="material-icons right">arrow_forward</i></button>
							</div>

						</form>
					</div>
					<!-- 2ST STTERPER PAGE HTML -->
					<div id="settper_2" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 2">
						<form @submit.prevent="articleStep2Post">
							<div class="settper_hdr"><hr><span>2</span></div>
							<div class="row settper_body">
								<div class="col s6 m6 l6">
									<div class="form-group file_group_btn">
										<label><span class="sign_requrd">*</span> Manuscript (.docx)</label><br>
										<div class="row mt-3">
											<div class="col s3 m3 l3">
												<input id="a_doc_file" type="file" accept=".xlsx,.xls,.doc,.docx,.ppt,.pptx,.txt,.pdf" ref="a_doc_file" class="display-none" @change="uploadDocFile">
												<button type="button" onclick="document.getElementById('a_doc_file').click();" class="btn btn-info">Upload</button>
											</div>
											<div class="col s9 m9 l9">
												<div v-if="docFileArr.doc_file_n" class="row mb-2">
													<div class="col s8 l8 m8 pt-1">{{ docFileArr.doc_file_n }}</div>
													<div class="col s4 l4 m4 pt-1">
														<a :href="`${$axios.defaults.baseURL}${docFileArr.doc_file_path}`" download target="_blank"><span>View</span></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group mt-2">
										<label>Additional Files</label><br>
										<div class="row mt-3">
											<div class="col s3 m3 l3">
												<input id="a_mutli_files" type="file" multiple ref="a_mutli_files" class="display-none" @change="uploadAddFiles">
												<button type="button" onclick="document.getElementById('a_mutli_files').click();" class="btn btn-info">Upload</button>
											</div>
											<div class="col s9 m9 l9">
												<div v-for="(file , index) in allAddFiles" :key="index" class="row mb-2">
													<div class="col s8 l8 m8 pt-1">{{ index+1 }}) {{ file.f_name }}</div>
													<div class="col s4 l4 m4 p_0">
														<a :href="`${$axios.defaults.baseURL}${file.f_path}`" download target="_blank"><span>View</span></a>
														<a @click="deleteFunc(file.id,'delAddFiles',index)" class="btn-floating waves-effect waves-light purple lightrn-1"><i class="material-icons">clear</i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group file_group_btn">
										<label><span class="sign_requrd">*</span> Figures</label><br>
										<div class="row mt-3">
											<div class="col s3 m3 l3">
												<input id="a_figure_pic" type="file" accept=".jpg,.jpeg,.tiff" ref="a_figure_pic" class="display-none" @change="uploadFigFiles">
												<button type="button" onclick="document.getElementById('a_figure_pic').click();" class="btn btn-info">Upload</button>
												<input type="text" v-model="figureFName" placeholder="Enter figure file name" class="mt-5">
											</div>
											<div class="col s9 m9 l9">
												<div v-for="(file , index) in allFigFiles" :key="index" class="row mb-2">
													<div class="col s8 l8 m8 pt-1">{{ index+1 }}) {{ file.f_name }}</div>
													<div class="col s4 l4 m4 p_0">
														<a :href="`${$axios.defaults.baseURL}${file.f_path}`" download target="_blank"><span>View</span></a>
														<a @click="deleteFunc(file.id,'delFigFiles',index)" class="btn-floating waves-effect waves-light purple lightrn-1"><i class="material-icons">clear</i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group mb-3">
										<label><span class="sign_requrd">*</span> Select No of Tables and Figures</label><br>
										<div class="row mt-3">
											<div class="col s6 m6 l6">
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
													<option value="10">11</option>
													<option value="10">12</option>
													<option value="10">13</option>
													<option value="10">14</option>
												</select>
											</div>
											<div class="col s6 m6 l6">
												<label>Select No of Figure</label>
												<select required v-model="aStep2Data.a_no_figures" class="form-control">
													<option value="" selected disabled>Select No of Figure</option>
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
													<option value="10">11</option>
													<option value="10">12</option>
													<option value="10">13</option>
													<option value="10">14</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="settper_ftr">
								<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
								<button v-if="is_next" @click="stteperPgIndx += 1" type="button" class="btn btn-info">Next <i class="material-icons right">arrow_forward</i></button>
							</div>
						</form>
					</div>
					<!-- 3ST STTERPER PAGE HTML -->
					<div id="settper_3" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 3">
						
						<div class="settper_hdr"><hr><span>3</span></div>
						<div id="all_add_authors">
							<div v-for="(authr , index) in allScrpAuthr" :key="index" class="mb-2">
								<h6>{{ index+1 }} {{ authr.title_h }} {{ authr.frist_n }} {{ authr.last_n }} <span v-if="authr.cross_authr">[ Corresponding Author ]</span> </h6>
								<div class="row">
									<div class="col s8 m8 l8">
										<h6 class="pl-1">Email <a href="javascript:;">{{ authr.email }}</a></h6>
										<h6 class="pl-1">{{ authr.affiliation }}</h6>
										<h6 class="pl-1">{{ authr.insitute }}</h6>
									</div>
									<div class="col s4 m4 l4">
										<a @click="updateAuthr = authr" class="btn btn-info mr-2">Edit</a>
										<a v-if="index != 0" @click="deleteFunc(authr.id,'delAuthr',index)" class="btn btn-info">Delete</a>
									</div>
								</div>
							</div>
						</div>
						<form v-if="updateAuthr.frist_n" @submit.prevent="updateAuthrFunc">
							<h4 class="form_title">Update Author</h4>
							<div class="row settper_body mt-3">
								<div class="col s12 m12 l12 left-text mb-3">
									<button @click="updateAuthr = {},getScrpAuthr()" type="button" class="red btn btn-reset"><i class="material-icons left">clear</i>Remove</button>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label><span class="red-text">*</span> Email</label>
										<input v-if="index != 0" type="email" class="form-control" required placeholder="Type author email" v-model="updateAuthr.email">
									</div>
									<div class="form-group mb-3">
										<label><span class="red-text">*</span> Frist Name</label>
										<input type="text" class="form-control" required placeholder="Type Frist Name" v-model="updateAuthr.frist_n">
									</div>
									<div class="form-group mb-3">
										<label>Affiliation</label>
										<input type="text" class="form-control" placeholder="Type Affiliation" v-model="updateAuthr.affiliation">
									</div>
									<div class="form-group mb-3">
										<label>This is the corresponding author</label>
										<div class="switch"><label class="float-left"><input type="checkbox" v-model="updateAuthr.cross_authr" @change.prevent="swithOldAuthr('prevAuthr')"> <span class="lever ml-0"></span></label></div>
									</div>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>Title</label>
										<select class="form-control" v-model="updateAuthr.title_h">
											<option selected disabled>Selected Title</option>
											<option value="Mr.">Mr.</option>
											<option value="Mrs.">Mrs.</option>
											<option value="Dr.">Dr.</option>
										</select>
									</div>
									<div class="form-group mb-3 mt-5">
										<label>Last Name</label>
										<input type="text" class="form-control" placeholder="Type Last Name" v-model="updateAuthr.last_n">
									</div>
									<div class="form-group mb-3">
										<label>Institute</label>
										<input type="text" class="form-control" placeholder="Type Institute" v-model="updateAuthr.insitute">
									</div>
								</div>
							</div>
							<div class="settper_ftr add_more_ftr">
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Update</button>
							</div>
						</form>
						<form v-if="!allScrpAuthr.length > 0" @submit.prevent="articleStep3Post">
							<h4 class="form_title">Add Author</h4>
							<div v-for="(obj , index) in aStep3Data" :key="index" class="row settper_body mt-3">
								<div class="col s12 m12 l12 left-text mb-3" v-if="index != 0 && index != 1">
									<button @click="aStep3Data.splice(index, 1)" type="button" class="red btn btn-reset"><i class="material-icons left">clear</i>Remove</button>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>{{ index+1 }} ) <span class="red-text">*</span> Email</label>
										<input v-if="index == 0" type="email" class="form-control" required placeholder="Type author email" v-model="obj.email" readonly>
										<input v-if="index != 0" type="email" class="form-control" required placeholder="Type author email" v-model="obj.email">
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
										<div class="switch"><label class="float-left"><input type="checkbox" v-model="obj.cross_authr" @change.prevent="chngSwithCheck(index)"> <span class="lever ml-0"></span></label></div>
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
							<div class="col s6 m6 l6 add_more_btn" v-if="aStep3Data.length < 3">
								<button type="button" class="btn waves-effect waves-light amber darken-4 mt-1" @click="aStep3Data.push({title_h:'Mr.',step: 'step3',cross_authr:0,})">Add another Author</button>
							</div>
							<div class="settper_ftr add_more_ftr">
								<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
								<button type="submit" class="btn waves-effect waves-light amber darken-4">Save</button>
							</div>
						</form>
						<form v-if="allScrpAuthr.length > 0 && allScrpAuthr.length < 3" @submit.prevent="addNewAuthr">
							<h4 class="form_title">Add Author</h4>
							<div class="row settper_body mt-3">
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label><span class="red-text">*</span> Email</label>
										<input v-if="index == 0" type="email" class="form-control" required placeholder="Type author email" v-model="newAuthrAdd.email" readonly>
										<input v-if="index != 0" type="email" class="form-control" required placeholder="Type author email" v-model="newAuthrAdd.email">
									</div>
									<div class="form-group mb-3">
										<label><span class="red-text">*</span> Frist Name</label>
										<input type="text" class="form-control" required placeholder="Type Frist Name" v-model="newAuthrAdd.frist_n">
									</div>
									<div class="form-group mb-3">
										<label>Affiliation</label>
										<input type="text" class="form-control" placeholder="Type Affiliation" v-model="newAuthrAdd.affiliation">
									</div>
									<div class="form-group mb-3">
										<label>This is the corresponding author</label>
										<div class="switch"><label class="float-left"><input type="checkbox" v-model="newAuthrAdd.cross_authr" @change.prevent="swithOldAuthr('newAuthr')"> <span class="lever ml-0"></span></label></div>
									</div>
								</div>
								<div class="col s6 m6 l6">
									<div class="form-group mb-3">
										<label>Title</label>
										<select class="form-control" v-model="newAuthrAdd.title_h">
											<option selected disabled>Selected Title</option>
											<option value="Mr.">Mr.</option>
											<option value="Mrs.">Mrs.</option>
											<option value="Dr.">Dr.</option>
										</select>
									</div>
									<div class="form-group mb-3 mt-5">
										<label>Last Name</label>
										<input type="text" class="form-control" placeholder="Type Last Name" v-model="newAuthrAdd.last_n">
									</div>
									<div class="form-group mb-3">
										<label>Institute</label>
										<input type="text" class="form-control" placeholder="Type Institute" v-model="newAuthrAdd.insitute">
									</div>
								</div>
							</div>
							<div class="settper_ftr add_more_ftr">
								<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
								<button v-if="allScrpAuthr.length > 0" @click="stteperPgIndx += 1;" type="button" class="btn btn-info">Next <i class="material-icons right">arrow_forward</i></button>
							</div>
						</form>
						<div v-if="allScrpAuthr.length >= 3" class="settper_ftr add_more_ftr">
							<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
							<button @click="stteperPgIndx += 1;" type="button" class="btn btn-info">Next <i class="material-icons right">arrow_forward</i></button>
						</div>
					</div>
					<!-- 4ST STTERPER PAGE HTML -->
					<div id="settper_4" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 4">
						<div class="settper_hdr"><hr><span>4</span></div>
						<!-- SAVING REVIEWERS TO INCLUDE AND ECLUDE -->
						<div v-if="allIncRevwr.length > 0">
							<!-- ALL REVIEWER TO INCLUDED HERE -->
							<div id="all_inc_revwr">
								<h4 class="form_title">Recommend Reviewers to Include:</h4><br>
								<div v-for="(obj , index) in allIncRevwr" :key="index" class="mb-2">
									<h6>{{ index+1 }} {{ obj.title_h }} {{ obj.frist_n }} {{ obj.last_n }} </h6>
									<div class="row">
										<div class="col s8 m8 l8">
											<h6 class="pl-1">Email <a href="javascript:;">{{ obj.email }}</a></h6>
											<h6 class="pl-1">{{ obj.affiliation }}</h6>
											<h6 class="pl-1">{{ obj.insitute }}</h6>
										</div>
										<div class="col s4 m4 l4">
											<a @click="updIncRewr = obj" class="btn btn-info mr-2">Edit</a>
											<a @click="deleteFunc(obj.id,'delIncRewr',index)" class="btn btn-info">Delete</a>
										</div>
									</div>
								</div>
								<!-- UPDATE ANY INCLUDED REVIEWER -->
								<form v-if="updIncRewr.email" @submit.prevent="updateIncRewer">
									<div class="col s12 m12 l12 left-text mb-3">
										<button @click="updIncRewr = {},getIncRevwr()" type="button" class="red btn btn-reset"><i class="material-icons left">clear</i>Remove</button>
									</div>
									<h4 class="form_title">Update Included Reviewer:</h4>
									<div class="row settper_body mt-1">
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Email</label>
												<input type="email" class="form-control" placeholder="Type reviewer email" v-model="updIncRewr.email" required>
											</div>
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Frist Name</label>
												<input type="text" class="form-control" placeholder="Type Frist Name" v-model="updIncRewr.frist_n" required>
											</div>
											<div class="form-group mb-3">
												<label>Affiliation</label>
												<input type="text" class="form-control" placeholder="Type Affiliation" v-model="updIncRewr.affiliation">
											</div>
										</div>
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label>Title</label>
												<select class="form-control" v-model="updIncRewr.title_h">
													<option selected disabled>Selected Title</option>
													<option value="Mr.">Mr.</option>
													<option value="Mrs.">Mrs.</option>
													<option value="Dr.">Dr.</option>
												</select>
											</div>
											<div class="form-group mb-3 mt-5">
												<label>Last Name</label>
												<input type="text" class="form-control" placeholder="Type Last Name" v-model="updIncRewr.last_n">
											</div>
											<div class="form-group mb-3">
												<label>Institute</label>
												<input type="text" class="form-control" placeholder="Type Institute" v-model="updIncRewr.insitute">
											</div>
										</div>
									</div>
									<div class="settper_ftr"><button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Update</button></div>
								</form>
								<!-- ADDING ANY INCLUDED REVIEWER -->
								<form v-if="allIncRevwr.length < 5" @submit.prevent="addIncRewr">
									<h4 class="form_title">Include Reviewer:</h4>
									<div class="row settper_body mt-1">
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Email</label>
												<input type="email" class="form-control" placeholder="Type reviewer email" v-model="newIncRewrAdd.email" required>
											</div>
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Frist Name</label>
												<input type="text" class="form-control" placeholder="Type Frist Name" v-model="newIncRewrAdd.frist_n" required>
											</div>
											<div class="form-group mb-3">
												<label>Affiliation</label>
												<input type="text" class="form-control" placeholder="Type Affiliation" v-model="newIncRewrAdd.affiliation">
											</div>
										</div>
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label>Title</label>
												<select class="form-control" v-model="newIncRewrAdd.title_h">
													<option selected disabled>Selected Title</option>
													<option value="Mr.">Mr.</option>
													<option value="Mrs.">Mrs.</option>
													<option value="Dr.">Dr.</option>
												</select>
											</div>
											<div class="form-group mb-3 mt-5">
												<label>Last Name</label>
												<input type="text" class="form-control" placeholder="Type Last Name" v-model="newIncRewrAdd.last_n">
											</div>
											<div class="form-group mb-3">
												<label>Institute</label>
												<input type="text" class="form-control" placeholder="Type Institute" v-model="newIncRewrAdd.insitute">
											</div>
										</div>
									</div>
									<div class="settper_ftr"><button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button></div>
								</form>
							</div>
							<!-- ALL REVIEWER TO EXCLUDED HERE -->
							<div id="all_inc_revwr">
								<h4 class="form_title">Recommend Reviewers to Exclude:</h4><br>
								<div v-for="(obj , index) in allExcRevwr" :key="index" class="mb-2">
									<h6>{{ index+1 }} {{ obj.title_h }} {{ obj.frist_n }} {{ obj.last_n }} </h6>
									<div class="row">
										<div class="col s8 m8 l8">
											<h6 class="pl-1">Email <a href="javascript:;">{{ obj.email }}</a></h6>
											<h6 class="pl-1">{{ obj.affiliation }}</h6>
											<h6 class="pl-1">{{ obj.insitute }}</h6>
										</div>
										<div class="col s4 m4 l4">
											<a @click="updExcRewr = obj" class="btn btn-info mr-2">Edit</a>
											<a @click="deleteFunc(obj.id,'delExcRewr',index)" class="btn btn-info">Delete</a>
										</div>
									</div>
								</div>
								<!-- UPDATE ANY EXCLUDED REVIEWER -->
								<form v-if="updExcRewr.email" @submit.prevent="updateExcRewer">
									<div class="col s12 m12 l12 left-text mb-3">
										<button @click="updExcRewr = {},getExcRevwr()" type="button" class="red btn btn-reset"><i class="material-icons left">clear</i>Remove</button>
									</div>
									<h4 class="form_title">Update Excluded Reviewer:</h4>
									<div class="row settper_body mt-1">
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Email</label>
												<input type="email" class="form-control" placeholder="Type reviewer email" v-model="updExcRewr.email" required>
											</div>
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Frist Name</label>
												<input type="text" class="form-control" placeholder="Type Frist Name" v-model="updExcRewr.frist_n" required>
											</div>
											<div class="form-group mb-3">
												<label>Affiliation</label>
												<input type="text" class="form-control" placeholder="Type Affiliation" v-model="updExcRewr.affiliation">
											</div>
										</div>
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label>Title</label>
												<select class="form-control" v-model="updExcRewr.title_h">
													<option selected disabled>Selected Title</option>
													<option value="Mr.">Mr.</option>
													<option value="Mrs.">Mrs.</option>
													<option value="Dr.">Dr.</option>
												</select>
											</div>
											<div class="form-group mb-3 mt-5">
												<label>Last Name</label>
												<input type="text" class="form-control" placeholder="Type Last Name" v-model="updExcRewr.last_n">
											</div>
											<div class="form-group mb-3">
												<label>Institute</label>
												<input type="text" class="form-control" placeholder="Type Institute" v-model="updExcRewr.insitute">
											</div>
										</div>
									</div>
									<div class="settper_ftr"><button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Update</button></div>
								</form>
								<!-- ADDING ANY EXCLUDED REVIEWER -->
								<form v-if="allExcRevwr.length < 3" @submit.prevent="addExcRewr">
									<h4 class="form_title">Exclude Reviewer:</h4>
									<div class="row settper_body mt-1">
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Email</label>
												<input type="email" class="form-control" placeholder="Type reviewer email" v-model="newExcRewrAdd.email" required>
											</div>
											<div class="form-group mb-3">
												<label><span class="red-text">*</span> Frist Name</label>
												<input type="text" class="form-control" placeholder="Type Frist Name" v-model="newExcRewrAdd.frist_n" required>
											</div>
											<div class="form-group mb-3">
												<label>Affiliation</label>
												<input type="text" class="form-control" placeholder="Type Affiliation" v-model="newExcRewrAdd.affiliation">
											</div>
										</div>
										<div class="col s6 m6 l6">
											<div class="form-group mb-3">
												<label>Title</label>
												<select class="form-control" v-model="newExcRewrAdd.title_h">
													<option selected disabled>Selected Title</option>
													<option value="Mr.">Mr.</option>
													<option value="Mrs.">Mrs.</option>
													<option value="Dr.">Dr.</option>
												</select>
											</div>
											<div class="form-group mb-3 mt-5">
												<label>Last Name</label>
												<input type="text" class="form-control" placeholder="Type Last Name" v-model="newExcRewrAdd.last_n">
											</div>
											<div class="form-group mb-3">
												<label>Institute</label>
												<input type="text" class="form-control" placeholder="Type Institute" v-model="newExcRewrAdd.insitute">
											</div>
										</div>
									</div>
									<div class="settper_ftr">
										<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
										<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
										<button v-if="allIncRevwr.length >= 3" @click="stteperPgIndx += 1;" type="button" class="btn btn-info">Next <i class="material-icons right">arrow_forward</i></button>
									</div>
								</form>
								<div v-if="allIncRevwr.length >= 3 && allExcRevwr.length >= 3" class="settper_ftr">
									<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
									<button @click="stteperPgIndx += 1;" type="button" class="btn btn-info">Next <i class="material-icons right">arrow_forward</i></button>
								</div>
							</div>
						</div>

						<form v-if="!allIncRevwr.length > 0" @submit.prevent="articleStep4Post">
							<h4 class="form_title">Recommend Reviewers to Include:</h4>
							<div v-for="(objIn , indIn) in aStep4IncData" :key="indIn" class="row settper_body mt-3">
								<div class="col s12 m12 l12 left-text mb-3" v-if="indIn > 2">
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
							<button v-if="aStep4IncData.length < 5" type="button" @click="aStep4IncData.push({step: 'step4',action_typ: 'inc reviewer',title_h:'Mr.',})" class="btn waves-effect waves-light amber darken-4">Suggest another reviewer</button>

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
							<button v-if="aStep4ExcData.length < 3" type="button" @click="aStep4ExcData.push({step: 'step4',action_typ: 'exc reviewer',title_h:'Mr.'})" class="btn waves-effect waves-light amber darken-4">Exclude another reviewer</button>
							<div class="settper_ftr">
								<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
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
									<p><label><input type="checkbox" v-model="aStep5Data.no_conf" @change="aStep5Data.accept_con ? aStep5Data.accept_con = 0 : ''"> <span>The authors declare that there is no conflict of interest</span></label></p>
								</div>
								<div class="form-group mb-2">
									<p><label><input type="checkbox" v-model="aStep5Data.accept_con" @change="aStep5Data.no_conf ? aStep5Data.no_conf = 0 : ''"> <span>I am authorized to submit this article and to agree to the following conditions on behalf of all co-author of this manuscript:</span></label></p>
								</div>
								<div v-if="aStep5Data.accept_con" class="form-group mb-3">
									<label>The authors declare a conflict of interest</label>
									<input type="text" class="form-control" placeholder="Type Affiliation" v-model="aStep5Data.con_typ_aff">
								</div>
								<ul id="settper_5_ul">
									<li>This manuscript is not currently under consideration for publication elsewhere and has not been previously published by any other journal or publication forum.</li>
									<li>This manuscript adheres to Scilip Publishing policies in its publishing requirements and standards.</li>
									<li>I have obtained all necessary consents to permit Scilip to publish this article, including any third-party materials,on CC-BY terms.</li>
								</ul>
								<div class="form-group mb-2">
									<p>
										<label>
											<input type="checkbox" v-model="aStep5Data.accept_terms">
											<span>I have read, understood and hereby accept the Scilip Terms & Conditions.</span>
										</label>
									</p>
								</div>
							</div>
							<div class="settper_ftr">
								<button @click="stteperPgIndx -= 1;" class="btn cyan waves-effect waves-light mr-2" type="button"><i class="material-icons left">arrow_back</i> Back</button>
								<button type="submit" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
								<button @click="showViewComp('add')" type="button" class="btn btn-info">View information / metadata</button>
							</div>
						</form>
					</div>

				</div>
			</div>
		</div>

		<div v-if="is_view_com" class="view_comp_m_id">
			<AuthorManuscriptView :allRow="allManScrpt" @goList="goList"/>
		</div>

	</div>
</template>

<script>
	import GlobalJs from '~/mixins/global.js';
	import MScript from '~/mixins/addMScript.js';
	export default {
		layout: 'admin',
		mixins: [GlobalJs,MScript],
		mounted () {
  			this.getAllJournals();
  			setTimeout(() => {
  				this.aStep3Data[0].email = this.$store.state.logReg.auth_user.email;
  				this.aStep3Data[0].frist_n = this.$store.state.logReg.auth_user.f_name;
  				this.aStep3Data[0].last_n = this.$store.state.logReg.auth_user.l_name;
  			},5000);
  		},
	}
</script>
