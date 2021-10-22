<template>
	<div class="page-wrapper">
		
		<!-- Contact Section -->
		<section class="contact-section p-5">
			<div class="pattern-layer" style="background-image:url(/webAssets/images/background/pattern-19.png)"></div>
			<div class="pattern-layer-two" style="background-image:url(/webAssets/images/background/pattern-20.png)"></div>
			<div class="icon-layer-two" style="background-image:url(/webAssets/images/icons/icon-2.png)"></div>
			<div class="icon-layer-three" style="background-image:url(/webAssets/images/icons/icon-2.png)"></div>
			<div class="auto-container">
				<div class="row clearfix">
					
					<!-- Form Column -->
					<div class="form-column col-lg-12 col-md-12 col-sm-12 m-auto">
						<div class="inner-column">
							<div class="color-layer"></div>
							<!-- Sec Title -->
							<div class="sec-title text-center"><h2 class="mb-3">Register New Account</h2></div>
							
							<!-- Default Form -->
							<div class="default-form">
								<form @submit.prevent="addPostForm">

									<div class="row">
										<div class="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2 border-right">
											<div class="form-group">
												<input type="text" v-model="addObj.first_name" placeholder="First Name *" required>
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2">
											<div class="form-group">
												<input type="email" placeholder="Email *" readonly :value="$store.state.logReg.vldNewEmail">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2 border-right">
											<div class="form-group">
												<input type="text" v-model="addObj.last_name" placeholder="Last Name *" required>
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2">
											<div class="form-group">
												<input type="password" v-model="addObj.password" placeholder="Password *" required>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2 border-right">
											<div class="form-group">
												<select v-model="addObj.role" class="custom-select-box">
													<option disabled value="">Select Your Role</option>
													<option value="author">Author</option>
													<option value="publisher">Publisher</option>
												</select>
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2">
											<div class="form-group">
												<input type="password" v-model="addObj.con_password" placeholder="Confirm password *" required @keyup="checkMyPassFunc">
												<div v-if="is_conf_pass" class="text-center"><p class="text-danger">Password is not matching.</p></div>
											</div>
										</div>
									</div>

									<div class="row col-8 m-auto">
										<div class="col-4 pt-2"><p>Write captha code focusly</p></div>
										<div class="col-3 pt-1" id="captcha_prnt"></div>
										<div class="col-5">
											<div class="form-group">
												<input type="text" v-model="addObj.captha_inpt" placeholder="Write captha code *" required>
											</div>
										</div>
									</div>
									<div v-if="invalidCaptha" class="text-center"><p class="text-danger">Invalide captha code</p></div>

									<div class="row clearfix">
										<div class="col-lg-6 col-md-6 col-sm-6 offset-3 mt-3">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault_1" required>
												<label class="form-check-label" for="flexCheckDefault_1">I would like to receive notifications in my primary area of expertise</label>
											</div>
										</div>

										<div class="col-lg-6 col-md-6 col-sm-6 offset-3 mt-2">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault_2" required>
												<label class="form-check-label" for="flexCheckDefault_2">I have read and to Frontiers Terms and Conditions</label>
											</div>
										</div>

										<div class="form-group col-lg-6 col-md-6 col-sm-6 offset-3 mt-3">
											<button type="submit" class="btn btn-info w-100 btn-lg submit_btn"><span class="txt">Register</span></button>
										</div>
	                                </div>
	                            </form>
	                        </div>

	                        <div class="text-center mt-3">
	                        	<span>Already registered?</span> &nbsp; <nuxt-link to="/login" class="text-info"><u>Login</u></nuxt-link>
	                        </div>
							
							<div class="progress register1"></div>

						</div>
					</div>
					
				</div>
			</div>
		</section>
		<!-- End Contact Section -->
		
	</div>
</template>

<script>
	import GlobalJs from '~/mixins/global.js';
	export default {
		layout: 'login',
		mixins: [GlobalJs],
		data () {
			return {
				addObj: { role: 'author', },
				captchaCode: null,
				invalidCaptha: null,
				is_conf_pass: null,
			}
		},
		mounted () {
			this.createCaptcha();
			if (this.$store.state.logReg.vldNewEmail == null) {
				this.swalfire('error','Please Validate Your Email.');
				this.$router.push('/register');
			}
		},
		methods: {
			checkMyPassFunc () {
				if (this.addObj.password == this.addObj.con_password) {
					this.is_conf_pass = null;
				} else {
					this.is_conf_pass = true;
				}
			},
			addPostForm () {
				this.addObj.email = this.$store.state.logReg.vldNewEmail;
				if (this.is_conf_pass == null && this.addObj.captha_inpt == this.captchaCode) {
					this.$axios.post('/api/user/create_user',this.addObj).then(res => {
						this.swalfire('success','You can register with this email now.');
						this.$store.commit('logReg/changVldEmail','');
						setTimeout(() => { this.$router.push({name : 'register-success'}); },300);
					});
				} else {
					this.invalidCaptha = true;
				}
			},
		},
	}
</script>

<style scoped>
	.submit_btn {
		border-radius: 0;
	}
	.auto-container {
		max-width: 1300px;
	}
	.progress.register1 {
	    width: 50%;
	}
	.progress {
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    height: 5px;
	    width: 0%;
	    background: #95c23d;
	    -moz-transition: all 700ms cubic-bezier(.37,.74,.15,1);
	    -o-transition: all 700ms cubic-bezier(.37,.74,.15,1);
	    -webkit-transition: all 700ms cubic-bezier(.37,.74,.15,1);
	    transition: all 700ms cubic-bezier(.37,.74,.15,1);
	}
</style>