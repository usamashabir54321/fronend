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
					<div class="form-column col-lg-10 col-md-12 col-sm-12 m-auto">
						<div class="inner-column pl-5 pr-5">
							<div class="color-layer"></div>
							<!-- Sec Title -->
							<div class="sec-title text-center">
								<h2 class="mb-3">Reset Password</h2>
								<p>Please enter the email address you registered with and we will send <br> you instructions on how to reset your password.</p>
							</div>
							
							<!-- Default Form -->
							<div class="default-form">
								<form @submit.prevent="emailFormPost">
									<div class="row clearfix">

										<!-- Form Group -->
										<div class="form-group col-lg-12 col-md-12 col-sm-12">
											<input type="email" placeholder="Email *" v-model="email" required @keyup="emailValid = validateEmailCode(email)" :class="[ email.length > 10 ? emailValid ? 'success' : 'error' : '' ]" minlength="10" maxlength="50">
										</div>
										<!-- Form Group -->
										<div class="col-4 pt-2"><p>Write captha code focusly</p></div>
										<div class="col-2" id="captcha_prnt"></div>
										<div class="col-6">
											<div class="form-group">
												<input type="text" v-model="captha_inpt" placeholder="Write captha code *" required>
											</div>
										</div>

										<div class="form-group col-lg-12 col-md-12 col-sm-12 mt-3">
											<button type="submit" class="btn btn-info w-100 btn-lg submit_btn"><span class="txt">Reset password</span></button>
										</div>

	                                </div>
	                            </form>
	                        </div>

	                        <div class="text-center mt-3">
	                        	<span>Already registered?</span> &nbsp; <nuxt-link to="/login" class="text-info"><u>Login</u></nuxt-link>
	                        </div>
							
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
				email: '',
				captha_inpt: '',
				emailValid: null,
				captchaCode: null,
				invalidCaptha: null,
			}
		},
		mounted () {
			setTimeout(() => { this.createCaptcha(); },500);
		},
		methods: {
			emailFormPost () {
				let is_email_valid = this.validateEmailCode(this.email);
				if (is_email_valid) {
					if (this.is_conf_pass == null && this.captha_inpt == this.captchaCode) {
						this.$axios.get('/api/user/checkUniqueEmail/'+this.email).then(res => {
							this.createCaptcha();
							if (res.data == 1) {
								this.swalfire('success','You can reset your password');
								this.$store.commit('logReg/changVldEmail',this.email);
								setTimeout(() => { this.$router.push({name : 'forgot-password-reset-password'}); },300);
							} else {
								this.swalfire('error','This email is not existed.');
							}
							this.email = '';
							this.captha_inpt = '';
						});
					} else {
						this.swalfire('error','Please enter a valid captha code');
					}
				} else {
					this.emailValid = false;
					this.swalfire('error','Please enter a valid email');
				}
			},
		},
	}
</script>

<style scoped>
	.submit_btn {
		border-radius: 0;
	}
	.inner-column {
	    padding-right: 150px !important;
	    padding-left: 150px !important;
	}
</style>