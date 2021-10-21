<template>
	<div class="page-wrapper">
		
		<!-- START REGISTER VALID EMAIL -->
		<section class="contact-section p-5">
			<div class="pattern-layer" style="background-image:url(/webAssets/images/background/pattern-19.png)"></div>
			<div class="pattern-layer-two" style="background-image:url(/webAssets/images/background/pattern-20.png)"></div>
			<div class="icon-layer-two" style="background-image:url(/webAssets/images/icons/icon-2.png)"></div>
			<div class="icon-layer-three" style="background-image:url(/webAssets/images/icons/icon-2.png)"></div>
			<div class="auto-container">
				<div class="row clearfix">
					<div class="form-column col-lg-10 col-md-12 col-sm-12 m-auto">
						<div class="inner-column">
							<div class="color-layer"></div>
							<div class="sec-title text-center"><h2 class="mb-3">Register New Account</h2></div>
							<div class="default-form">
								<form @submit.prevent="emailFormPost">
									<div class="row clearfix">
										<div class="form-group col-lg-12 col-md-12 col-sm-12">
											<label class="mb-3">With your email address</label>
											<input type="email" placeholder="Email *" v-model="email" required @keyup="emailValid = validateEmailCode(email)" :class="[ email.length > 10 ? emailValid ? 'success' : 'error' : '' ]" minlength="10" maxlength="50">
										</div>
										<div class="form-group col-lg-12 col-md-12 col-sm-12">
											<button type="submit" class="btn btn-info w-100 btn-lg submit_btn"><span class="txt">Continue</span></button>
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
		<!-- END REGISTER VALID EMAIL -->
		
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
				emailValid: null,
			}
		},
		methods: {
			emailFormPost () {
				let is_email_valid = this.validateEmailCode(this.email);
				if (is_email_valid) {
					this.$axios.get('/api/user/checkUniqueEmail/'+this.email).then(res => {
						if (res.data == 1) {
							this.swalfire('error','This email is already been taken.');
						} else {
							this.swalfire('success','You can register with this email now.');
							this.$store.commit('logReg/changVldEmail',this.email);
							this.email = '';
							setTimeout(() => { this.$router.push({name : 'register-step-1'}); },300);
						}
					});
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
</style>