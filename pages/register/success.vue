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
							<div class="sec-title text-center pt-3">
								<img src="/webAssets/images/svg/thankimage.svg" class="thank_img" alt="thank image">
								<h2 class="thank_title mb-3">Thank you</h2>
								<h1 class="confirm_msg">Confirm your email to activate your account</h1>
								<h3 class="text-msg mt-2">Please follow the instructions in the email we have sent you. If you don’t receive an email within a few minutes, please check your spam folder.</h3>
								<nuxt-link to="/login" class="btn btn-info submit_btn">Continue</nuxt-link>
							</div>
							<div class="progress register2"></div>
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
				addObj: {},
			}
		},
		mounted () {
			if (this.$store.state.logReg.vldNewEmail == null) {
				this.swalfire('error','Please Validate Your Email.');
				this.$router.push('/register');
			}
		},
	}
</script>

<style scoped>
	.submit_btn {
		border-radius: 0;
	}
	.progress.register2 {
	    width: 100%;
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
	h2.thank_title {
	    color: #020202;
	    font-size: 26px;
	    padding-top: 16px;
	}
	h1.confirm_msg {
	    font-size: 26px;
	    margin-bottom: 10px;
	    color: #95c23d;
	}
	h3.text-msg {
	    font-size: 18px;
	    max-width: 450px;
	    margin: 0 auto;
	    margin-bottom: 33px;
	    color: #555;
	}
</style>