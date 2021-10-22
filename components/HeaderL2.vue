<template>
	<div>
		
		<div class="page-wrapper">
		 	
		    <!-- Preloader -->
		    <div class="preloader" v-if="preloadr"></div>
		 	
		 	<!-- Main Header-->
		 	<header class="main-header header-style-two">
		 		
		 		<!--Header-Upper-->
		 		<div class="header-upper">
		 			<div class="outer-container clearfix">
		 				
		 				<div class="pull-left logo-box">
		 					<div class="logo"><a href="index-2.html"><img src="/webAssets/images/logo-2.png" alt="" title=""></a></div>
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
		 								<li class="dropdown has-mega-menu"><a href="#"><span>Courses <i class="fa fa-arrow-down"></i></span></a>
		 									<div class="mega-menu">
		 										<!-- Upper Box -->
		 										<div class="upper-box">
		 											<div class="page-links-box">
		 												<a href="course.html" class="link"><span class="icon flaticon-bullhorn"></span>Marketing</a>
		 												<a href="course-2.html" class="link"><span class="icon flaticon-cyclist"></span>Lifestyle</a>
		 												<a href="course-3.html" class="link"><span class="icon flaticon-bar-chart"></span>Business</a>
		 												<a href="course-4.html" class="link"><span class="icon flaticon-software"></span>Software</a>
		 												<a href="course-3.html" class="link"><span class="icon flaticon-atom"></span>Science</a>
		 												<a href="course.html" class="link"><span class="icon flaticon-webpage"></span>IT Management</a>
		 												<a href="course-2.html" class="link"><span class="icon flaticon-language"></span>Language</a>
		 												<a href="course-3.html" class="link"><span class="icon flaticon-team"></span>Human Resources</a>
		 												<a href="course-4.html" class="link"><span class="icon flaticon-healthcare"></span>Health Care</a>
		 											</div>
		 										</div>
		 										<!-- Lower Box -->
		 										<div class="lower-box">
		 											<h3>Become an Instructor</h3>
		 											<div class="text">Top instructors from around the Neque convallis a cras semper auctor. <br> Libero id faucibus nisl tincidunt egetnvallis </div>
		 											<div class="btn-box">
		 												<a href="#" class="theme-btn btn-style-five">Start teaching today</a>
		 											</div>
		 											<div class="side-icon">
		 												<img src="/webAssets/images/resource/mega-menu-icon.png" alt="" />
		 											</div>
		 										</div>
		 									</div>
		 								</li>
		 								<li class="dropdown"><a href="#"><span data-hover="Home">Home</span></a>
		 									<ul>
		 										<li><a href="index-2.html">Home page 01</a></li>
		 										<li><a href="index-3.html">Home page 02</a></li>
		 										<li class="dropdown"><a href="#">Header styles</a>
		 											<ul>
		 												<li><a href="index-2.html">Header Style 01</a></li>
		 												<li><a href="index-3.html">Header Style 02</a></li>
		 											</ul>
		 										</li>
		 									</ul>
		 								</li>
		 								<li class="dropdown"><a href="#">About</a>
		 									<ul>
		 										<li><a href="about.html">About Us</a></li>
		 										<li><a href="faq.html">Faq</a></li>
		 										<li><a href="teacher.html">Teacher</a></li>
		 										<li><a href="profile.html">User Profile</a></li>
		 										<li><a href="membership.html">Membership</a></li>
		 									</ul>
		 								</li>
		 								<li class="dropdown"><a href="#">Courses</a>
		 									<ul>
		 										<li><a href="course.html">Courses</a></li>
		 										<li><a href="course-2.html">Courses 02</a></li>
		 										<li><a href="course-3.html">Courses 03</a></li>
		 										<li><a href="course-4.html">Courses 04</a></li>
		 										<li><a href="course-detail.html">Courses Detail</a></li>
		 									</ul>
		 								</li>
		 								<li class="current dropdown"><a href="#">Blog</a>
		 									<ul>
		 										<li><a href="blog.html">Our Blog</a></li>
		 										<li><a href="blog-list.html">Blog List</a></li>
		 										<li><a href="blog-detail.html">Blog Detail</a></li>
		 										<li><a href="not-found.html">Not Found</a></li>
		 									</ul>
		 								</li>
		 								<li><a href="contact.html">Contact</a></li>
		 								<li><a href="donation.html">Donation</a></li>
		 							</ul>
		 						</div>
		 					</nav>
		 					
		 					<!-- Main Menu End-->
		 					<div class="outer-box clearfix">
		 						
		 						<!-- Search -->
		 						<div class="search-box">
		 							<form method="post" action="http://themazine.com/html/scilip/contact.html">
		 								<div class="form-group">
		 									<input type="search" name="search-field" value="" placeholder="Online course" required>
		 									<button type="submit"><span class="icon fa fa-search"></span></button>
		 								</div>
		 							</form>
		 						</div>
		 						
		 						<!-- Cart Box -->
		 						<div class="cart-box">
		 							<div class="dropdown">
		 								<button class="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flaticon-shopping-bag-1"></span><span class="total-cart">2</span></button>
		 								<div class="dropdown-menu pull-right cart-panel" aria-labelledby="dropdownMenu1">

		 									<div class="cart-product">
		 										<div class="inner">
		 											<div class="cross-icon"><span class="icon fa fa-remove"></span></div>
		 											<div class="image"><img src="/webAssets/images/resource/post-thumb-1.jpg" alt="" /></div>
		 											<h3><a href="shop-single.html">Product 01</a></h3>
		 											<div class="quantity-text">Quantity 1</div>
		 											<div class="price">$99.00</div>
		 										</div>
		 									</div>
		 									<div class="cart-product">
		 										<div class="inner">
		 											<div class="cross-icon"><span class="icon fa fa-remove"></span></div>
		 											<div class="image"><img src="/webAssets/images/resource/post-thumb-2.jpg" alt="" /></div>
		 											<h3><a href="shop-single.html">Product 02</a></h3>
		 											<div class="quantity-text">Quantity 1</div>
		 											<div class="price">$99.00</div>
		 										</div>
		 									</div>
		 									<div class="cart-total">Sub Total: <span>$198</span></div>
		 									<ul class="btns-boxed">
		 										<li><a href="shoping-cart.html">View Cart</a></li>
		 										<li><a href="checkout.html">CheckOut</a></li>
		 									</ul>

		 								</div>
		 							</div>
		 						</div>
		 						
		 						<!-- Nav Btn -->
		 						<div class="nav-btn navSidebar-button"><span class="icon flaticon-menu-4"></span></div>
		 						
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
		 					<a href="index-2.html" title=""><img src="/webAssets/images/logo.png" alt="" title=""></a>
		 				</div>
		 				<!--Right Col-->
		 				<div class="pull-right">
		 					<!-- Main Menu -->
		 					<nav class="main-menu">
		 						<!--Keep This Empty / Menu will come through Javascript-->
		 					</nav>
		 					<!-- Main Menu End-->
		 					
		 				</div>
		 			</div>
		 		</div>
		 		<!-- End Sticky Menu -->
		 		
		 		<!-- Mobile Menu  -->
		 		<div class="mobile-menu">
		 			<div class="menu-backdrop"></div>
		 			<div class="close-btn"><span class="icon flaticon-multiply"></span></div>
		 			
		 			<nav class="menu-box">
		 				<div class="nav-logo"><a href="index-2.html"><img src="/webAssets/images/logo.png" alt="" title=""></a></div>
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