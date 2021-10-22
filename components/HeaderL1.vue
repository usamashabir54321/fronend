<template>
	<div>
		
		<div class="page-wrapper">
		 	
		    <!-- Preloader -->
		    <div class="preloader" v-if="preloadr"></div>
		 	
		 	<!-- Main Header-->
		    <header class="main-header">
		    	
				<!--Header-Upper-->
		        <div class="header-upper">
		        	<div class="outer-container clearfix">
		            	
						<div class="pull-left logo-box">
							<div class="logo"><nuxt-link to="/"><h3>SCILIP</h3></nuxt-link></div>
						</div>
						
						<div class="nav-outer clearfix">
							<!--Mobile Navigation Toggler-->
							<div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
							<!-- Main Menu -->
							<nav class="main-menu navbar-expand-md">
								<div class="navbar-header">
									<!-- Toggle Button -->    	
									<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>
								
								<div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
									<ul class="navigation clearfix">
										<li class="current dropdown"><nuxt-link to="/journal"><span data-hover="Home">Micro Biology</span></nuxt-link></li>
										<li class="current dropdown"><nuxt-link to="/"><span data-hover="Home">Home</span></nuxt-link></li>
										<li class="dropdown"><nuxt-link to="/about">About</nuxt-link></li>
										<li class="dropdown"><nuxt-link to="/faq">FAQ's</nuxt-link></li>
										<li><nuxt-link to="/contact">Contact</nuxt-link></li>

										<li v-if="$cookies.get('admin_u_name')"><nuxt-link :to="{ name: 'admin-dashboard' }">{{ $cookies.get('admin_u_name') }}</nuxt-link></li>
										<li v-else><nuxt-link to="/login">Login</nuxt-link></li>
										<li v-if="!$cookies.get('admin_u_name')"><nuxt-link to="/register">Register</nuxt-link></li>

									</ul>
								</div>
							</nav>
							
							<!-- Main Menu End-->
							<div class="outer-box clearfix">
								
								<!-- Social Box -->
								<ul class="social-box">
									<li class="instagram"><a target="_blank" href="http://instagram.com/" class="fa fa-instagram"></a></li>
									<li class="facebook"><a target="_blank" href="http://facebook.com/" class="fa fa-facebook-f"></a></li>
									<li class="twitter"><a target="_blank" href="http://twitter.com/" class="fa fa-twitter"></a></li>
									<li class="pinterest"><a target="_blank" href="http://pinterest.com/" class="fa fa-pinterest-p"></a></li>
								</ul>
									
							</div>
						</div>
						
		            </div>
		        </div>
		        <!--End Header Upper-->
		        
				<!-- Sticky Header  -->
		        <div class="sticky-header">
		            <div class="auto-container clearfix">
		                <!--Logo-->
		                <div class="logo pull-left">
		                    <h3><nuxt-link to="/">SCILIP</nuxt-link></h3>
		                </div>
		                <!--Right Col-->
		                <div class="pull-right">
		                    <!-- Main Menu -->
		                    <nav class="main-menu">
		                        <!--Keep This Empty / Menu will come through Javascript-->
		                    </nav>
							<!-- Main Menu End-->
							
							<!-- Main Menu End-->
							<div class="outer-box clearfix">
								
							</div>
							
		                </div>
		            </div>
		        </div>
				<!-- End Sticky Menu -->
		    
				<!-- Mobile Menu  -->
		        <div class="mobile-menu">
		            <div class="menu-backdrop"></div>
		            <div class="close-btn"><span class="icon flaticon-multiply"></span></div>
		            
		            <nav class="menu-box">
		                <div class="nav-logo"><nuxt-link to="/"><h3>SCILIP</h3></nuxt-link></div>
		                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
		            </nav>
		        </div><!-- End Mobile Menu -->
			
		    </header>
		    <!-- End Main Header -->
		    
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				preloadr: true,
			}
		},
		mounted () {
			setTimeout(() => { this.preloadr = false; },1000);
		},
	}
</script>