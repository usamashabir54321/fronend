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
						<div class="inner-column">
							<div class="color-layer"></div>
							<!-- Sec Title -->
							<div class="sec-title text-center">
								<h2 class="mb-3">Login</h2>
							</div>
							
							<!-- Default Form -->
							<div class="default-form">
								<form @submit.prevent="loginMe">
									<div class="row clearfix">

										<!-- Form Group -->
										<div class="form-group col-lg-12 col-md-12 col-sm-12">
											<input type="email" v-model="userData.email" placeholder="Email *" required>
										</div>
										<!-- Form Group -->
										<div class="form-group col-lg-12 col-md-12 col-sm-12">
											<input type="password" v-model="userData.password" placeholder="Password *" required>
										</div>

										<div class="col-6">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
												<label class="form-check-label" for="flexCheckDefault">Remember Me</label>
											</div>
										</div>
										<div class="form-group col-6 text-right"><nuxt-link to="/forgot-password" class="text-info"><u>Forgot Password</u></nuxt-link></div>
										
										<div class="form-group col-lg-12 col-md-12 col-sm-12">
											<button type="submit" class="btn btn-info w-100 btn-lg submit_btn"><span class="txt">Login</span></button>
										</div>

	                                </div>
	                            </form>
	                        </div>

	                        <div class="text-center mt-3">
	                        	<span>Not registered yet?</span> &nbsp; <nuxt-link to="/register" class="text-info"><u>Register</u></nuxt-link>
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
				userData: {},
			}
		},
		methods: {
			async loginMe() {
				await this.$axios.post('/api/user/login', this.userData).then(res => {
					if (res.data.status == false) {
						this.swalfire('error',res.data.message);
					} else {
						this.swalfire('success',res.data.message);
						this.$cookies.set('admin_token', res.data.access_token);
						setTimeout(() => { this.$router.push({name : 'admin-dashboard'}); },300);
					}
					this.userData = {};
				});
			},
		},
	}
</script>

<style scoped>
	.submit_btn {
		border-radius: 0;
	}
</style>