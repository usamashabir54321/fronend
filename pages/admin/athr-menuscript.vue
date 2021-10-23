<template>
	<div id="main">

		<!-- HEADER BEADCRUMB -->
		<div id="breadcrumbs-wrapper" data-image="/admin/images/gallery/breadcrumb-bg.jpg" class="breadcrumbs-bg-image" style="background-image: url(&quot;/admin/images/gallery/breadcrumb-bg.jpg&quot;);">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 l6"><h5 class="breadcrumbs-title mt-0 mb-0"><span>Menu Script Page</span></h5></div>
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
						<div class="settper_hdr"><hr><span>1</span></div>
						<div class="row settper_body">

							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label><span class="sign_requrd">*</span> Choose Journal</label>
									<select class="form-control">
										<option selected disabled>Selected Journal Section</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
								<div class="form-group mb-3">
									<label><span class="sign_requrd">*</span> Aritcal Type</label>
									<select class="form-control">
										<option selected disabled>Selected Aritcal Type</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
							</div>
							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label><span class="sign_requrd">*</span> Selected Journal Section</label>
									<select class="form-control">
										<option selected disabled>Selected Journal Subcategory</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
								<div class="form-group mb-3">
									<label><span class="sign_requrd">*</span> Special Issues</label>
									<select class="form-control">
										<option selected disabled>Selected Special Issues</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
							</div>
							<div class="col s12 m12 l12 mb-1 mt-1">
								<div class="form-group">
									<label><span class="sign_requrd">*</span> Title <span class="info_note">you can add title upto 250 characters</span></label>
									<textarea class="form-control" rows="4" placeholder="Title"></textarea>
								</div>
							</div>
							<div class="col s12 m12 l12 mb-1">
								<div class="form-group">
									<label><span class="sign_requrd">*</span> Running Title <span class="info_note">you can add title upto 50 characters</span></label>
									<textarea class="form-control" rows="4" placeholder="Title"></textarea>
								</div>
							</div>
							<div class="col s12 m12 l12 mb-1">
								<div class="form-group">
									<label><span class="sign_requrd">*</span> Abstract</label>
									<textarea class="form-control" rows="4" placeholder="Title"></textarea>
								</div>
							</div>
							<div class="col s12 m12 l12 mb-1">
								<div class="form-group">
									<label><span class="sign_requrd">*</span> Keywords</label>
									<textarea class="form-control" rows="4" placeholder="Keywords"></textarea>
								</div>
							</div>

						</div>
						<div class="settper_ftr">
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4">Save And Continue</button>
						</div>
					</div>
					<!-- 2ST STTERPER PAGE HTML -->
					<div id="settper_2" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 2">
						<div class="settper_hdr"><hr><span>2</span></div>
						<div class="row settper_body">

							<div class="col s6 m6 l6">
								<div class="form-group border_b" style="padding-bottom: 16px;">
									<label><span class="sign_requrd">*</span> Manuscript without authors details (.docx)</label>
									<input type="file" class="form-control input_type_file">
									<button class="btn btn-info wrap_file_btn">Upload</button>
								</div>
								<div class="form-group mt-2">
									<label>Additional Files</label>
									<input type="file" class="form-control input_type_file">
									<button class="btn btn-info wrap_file_btn">Upload</button>
								</div>
							</div>
							<div class="col s6 m6 l6">
								<div class="form-group mb-3 border_b">
									<label><span class="sign_requrd">*</span> Figures</label><br>
									<button class="btn btn-info mt-2 mb-2">Upload Picture</button>
								</div>
								<div class="form-group mb-3">
									<label>Select No of Tables</label>
									<select class="form-control">
										<option selected disabled>Select No of Tables</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
							</div>

						</div>
						<div class="settper_ftr">
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4">Save And Continue</button>
						</div>
					</div>
					<!-- 3ST STTERPER PAGE HTML -->
					<div id="settper_3" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 3">
						<div class="settper_hdr"><hr><span>3</span></div>
						<h4 class="form_title">Add Auther</h4>
						<div class="row settper_body" id="add_auther">
							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label>Email</label>
									<input type="email" class="form-control" placeholder="Type reviewer email">
								</div>
								<div class="form-group mb-3">
									<label>Frist Name</label>
									<input type="text" class="form-control" placeholder="Type Frist Name">
								</div>
								<div class="form-group mb-3">
									<label>Affiliation</label>
									<input type="text" class="form-control" placeholder="Type Affiliation">
								</div>
							</div>
							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label>Title</label>
									<select class="form-control">
										<option selected disabled>Selected Title</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
								<div class="form-group mb-3 mt-5">
									<label>Last Name</label>
									<input type="text" class="form-control" placeholder="Type Last Name">
								</div>
								<div class="form-group mb-3">
									<label>Institute</label>
									<input type="text" class="form-control" placeholder="Type Institute">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col s6 m6 l6">
								<label>This is the corresponding author</label>
								<div class="switch"><label class="float-left"><input type="checkbox"> <span class="lever ml-0"></span></label></div>
							</div>
							<div class="col s6 m6 l6 text_center">
								<button class="btn waves-effect waves-light amber darken-4 mt-1">Add another Author</button>
							</div>
						</div>
						<div class="settper_ftr">
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4">Save And Continue</button>
						</div>
					</div>
					<!-- 4ST STTERPER PAGE HTML -->
					<div id="settper_4" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 4">
						<div class="settper_hdr"><hr><span>4</span></div>
						<h4 class="form_title">Recommend Reviewers to Include:</h4>
						<div class="row settper_body" id="reviewer_include">
							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label>Email</label>
									<input type="email" class="form-control" placeholder="Type reviewer email">
								</div>
								<div class="form-group mb-3">
									<label>Frist Name</label>
									<input type="text" class="form-control" placeholder="Type Frist Name">
								</div>
								<div class="form-group mb-3">
									<label>Affiliation</label>
									<input type="text" class="form-control" placeholder="Type Affiliation">
								</div>
							</div>
							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label>Title</label>
									<select class="form-control">
										<option selected disabled>Selected Title</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
								<div class="form-group mb-3 mt-5">
									<label>Last Name</label>
									<input type="text" class="form-control" placeholder="Type Last Name">
								</div>
								<div class="form-group mb-3">
									<label>Institute</label>
									<input type="text" class="form-control" placeholder="Type Institute">
								</div>
							</div>
						</div>
						<button class="btn waves-effect waves-light amber darken-4">Suggest another reviewer</button>
						<h4 class="form_title">Recommend Reviewers to Exclude:</h4>
						<div class="row settper_body" id="reviewer_exclude">
							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label>Email</label>
									<input type="email" class="form-control" placeholder="Type reviewer email">
								</div>
								<div class="form-group mb-3">
									<label>Frist Name</label>
									<input type="text" class="form-control" placeholder="Type Frist Name">
								</div>
								<div class="form-group mb-3">
									<label>Affiliation</label>
									<input type="text" class="form-control" placeholder="Type Affiliation">
								</div>
							</div>
							<div class="col s6 m6 l6">
								<div class="form-group mb-3">
									<label>Title</label>
									<select class="form-control">
										<option selected disabled>Selected Title</option>
										<option value="oneoption">1st</option>
									</select>
								</div>
								<div class="form-group mb-3 mt-5">
									<label>Last Name</label>
									<input type="text" class="form-control" placeholder="Type Last Name">
								</div>
								<div class="form-group mb-3">
									<label>Institute</label>
									<input type="text" class="form-control" placeholder="Type Institute">
								</div>
							</div>
						</div>
						<button class="btn waves-effect waves-light amber darken-4">Exclude another reviewer</button>

						<div class="settper_ftr">
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4 mr-2">Save</button>
							<button @click="stteperPgIndx += 1" class="btn waves-effect waves-light amber darken-4">Save And Continue</button>
						</div>
					</div>
					<!-- 5ST STTERPER PAGE HTML -->
					<div id="settper_5" class="animate__animated animate__zoomIn" v-show="stteperPgIndx == 5">
						<div class="settper_hdr"><hr><span>5</span></div>
						<h4 class="form_title">Recommend Reviewers to Include:</h4>
						<div class="settper_body">
							<div class="form-group mb-2">
								<p><label><input type="checkbox"> <span>The authors declare that there is no conflict of interest</span></label></p>
							</div>
							<div class="form-group mb-2">
								<p><label><input type="checkbox"> <span>I am authorized to submit this article and to agree to the following conditions on behalf of all co-author of this manuscript:</span></label></p>
							</div>
							<div class="form-group mb-3">
								<label>The authors declare a conflict of interest</label>
								<input type="text" class="form-control" placeholder="Type Affiliation">
							</div>
							<ul id="settper_5_ul">
								<li>This manuscript is not currently under consideration for publication elsewhere and has not been previously published by any other journal or publication forum.</li>
								<li>This manuscript adheres to Scilip Publishing policies in its publishing requirements and standards.</li>
								<li>I have obtained all necessary consents to permit Scilip to publish this article, including any third-party materials,on CC-BY terms.</li>
								<li>I have read, understood and hereby accept the Scilip Terms & Conditions.</li>
							</ul>
						</div>
						<div class="settper_ftr"><button @click="stteperPgIndx = 1" class="btn waves-effect waves-light amber darken-4">Save</button></div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		layout: 'admin',
		data () {
			return {
				stteperPgIndx : 1,
			}
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
</style>