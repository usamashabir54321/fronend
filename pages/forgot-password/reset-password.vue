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
								<h2 class="mb-3">Set New Password</h2>
							</div>
							
							<!-- Default Form -->
							<div class="default-form">
								<form @submit.prevent="newPassPost">
									<div class="row clearfix">

										<!-- Form Group -->
										<div class="form-group col-lg-12 col-md-12 col-sm-12">
											<input type="password" placeholder="Enter New Password *" v-model="password" required minlength="5" maxlength="20">
										</div>

										<div class="form-group col-lg-12 col-md-12 col-sm-12 mt-3">
											<button type="submit" class="btn btn-info w-100 btn-lg submit_btn"><span class="txt">Update password</span></button>
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
				password: '',
			}
		},
		mounted () {
			if (this.$store.state.logReg.vldNewEmail == null) {
				this.swalfire('error','Please Validate Your Email.');
				this.$router.push('/forgot-password');
			}
		},
		methods: {
			newPassPost () {
				this.$axios.get('/api/user/updatePassword/'+this.$store.state.logReg.vldNewEmail+'/'+this.password).then(res => {
					this.swalfire('success','Your password is updated.');
					setTimeout(() => { this.$router.push({name : 'login'}); },300);
				});	
				this.password = '';
			}
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