<template>
	<div>
		<!-- BEGIN: Header-->
		<header class="page-topbar" id="header">
			<div class="navbar navbar-fixed"> 
				<nav 
					class="navbar-main navbar-color nav-collapsible sideNav-lock" 
					:class="selctNavClrOpt != null ? `navbar-dark ${settingClrs[selctNavClrOpt].clr_n}` : $cookies.get('nav_clr_indx') != null ? `navbar-dark ${settingClrs[$cookies.get('nav_clr_indx')].clr_n}` : 'navbar-light' "
				>
					<div class="nav-wrapper">
						<div class="header-search-wrapper hide-on-med-and-down"><i class="material-icons">search</i>
							<input class="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore Materialize" data-search="template-list">
							<ul class="search-list collection display-none"></ul>
						</div>
						<ul class="navbar-list right">
							<li class="dropdown-language"><a class="waves-effect waves-block waves-light translation-button" href="#" data-target="translation-dropdown"><span class="flag-icon flag-icon-gb"></span></a></li>
							<li class="hide-on-med-and-down">
								<a class="waves-effect waves-block waves-light toggle-fullscreen" href="javascript:void(0);" @click="doFullScreen"><i class="material-icons">settings_overscan</i></a>
							</li>
							<li class="hide-on-large-only search-input-wrapper"><a class="waves-effect waves-block waves-light search-button" href="javascript:void(0);"><i class="material-icons">search</i></a></li>
							<li><a class="waves-effect waves-block waves-light notification-button" href="javascript:void(0);" data-target="notifications-dropdown"><i class="material-icons">notifications_none<small class="notification-badge">5</small></i></a></li>
							<li><a class="waves-effect waves-block waves-light profile-button" href="javascript:void(0);" data-target="profile-dropdown"><span class="avatar-status avatar-online"><img src="/admin/images/avatar/avatar-7.png" alt="avatar"><i></i></span></a></li>
						</ul>
						<!-- translation-button-->
						<ul class="dropdown-content" id="translation-dropdown">
							<li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="en"><i class="flag-icon flag-icon-gb"></i> English</a></li>
							<li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="fr"><i class="flag-icon flag-icon-fr"></i> French</a></li>
							<li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="pt"><i class="flag-icon flag-icon-pt"></i> Portuguese</a></li>
							<li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="de"><i class="flag-icon flag-icon-de"></i> German</a></li>
						</ul>
						<!-- notifications-dropdown-->
						<ul class="dropdown-content" id="notifications-dropdown">
							<li>
								<h6>NOTIFICATIONS<span class="new badge">5</span></h6>
							</li>
							<li class="divider"></li>
							<li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
								<time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
							</li>
							<li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
								<time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
							</li>
							<li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
								<time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
							</li>
							<li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
								<time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
							</li>
							<li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
								<time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
							</li>
						</ul>
						<!-- profile-dropdown-->
						<ul class="dropdown-content" id="profile-dropdown">
							<li><a class="grey-text text-darken-1" href="user-profile-page.html"><i class="material-icons">person_outline</i> Profile</a></li>
							<li><a class="grey-text text-darken-1" href="app-chat.html"><i class="material-icons">chat_bubble_outline</i> Chat</a></li>
							<li><a class="grey-text text-darken-1" href="page-faq.html"><i class="material-icons">help_outline</i> Help</a></li>
							<li class="divider"></li>
							<li><a class="grey-text text-darken-1" href="user-lock-screen.html"><i class="material-icons">lock_outline</i> Lock</a></li>
							<li><a class="grey-text text-darken-1" @click="logout"><i class="material-icons">keyboard_tab</i> Logout</a></li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<!-- END: Header-->

		<!-- BEGIN: SideNav-->
		<aside 
			class="sidenav-main nav-expanded nav-lock nav-collapsible" 
			style="transition: all 0.3s ease-in-out !important;"
			:class="selctMenBgClrOpt != null ? `sidenav-dark sidenav-gradient ${settingClrs[selctMenBgClrOpt].clr_n}` : $cookies.get('side__bg_clr_indx') != null ? `sidenav-dark sidenav-gradient ${settingClrs[$cookies.get('side__bg_clr_indx')].clr_n}` : 'sidenav-light' "
		>
			<!-- SIDEBAR BRAND HEADER -->
			<div class="brand-sidebar">
				<h1 class="logo-wrapper">
					<a class="brand-logo darken-1" href="index.html">
						<img class="hide-on-med-and-down " src="/admin/images/logo/materialize-logo-color.png" alt="materialize logo">
						<img class="show-on-medium-and-down hide-on-med-and-up" src="/admin/images/logo/materialize-logo-color.png" alt="materialize logo">
						<span class="logo-text hide-on-med-and-down">{{ auth_user.name }}</span>
					</a>
					<a class="navbar-toggler" href="#"><i class="material-icons">radio_button_checked</i></a>
				</h1>
			</div>
			<!-- SIDE BAR LINKS -->
			<ul 
				class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" 
				id="slide-out" data-menu="menu-navigation" data-collapsible="accordion"
				:class="selctMenClrOpt != null ? `${butnClrs[selctMenClrOpt].link}` : $cookies.get('nuxt_lnk_clr_indx') != null ? `${butnClrs[$cookies.get('nuxt_lnk_clr_indx')].link}` : 'link_a_purple_purple' "
			>
				<li class="navigation-header">
					<a class="navigation-header-text">{{ auth_user.role }}</a>
					<i class="navigation-header-icon material-icons">more_horiz</i>
				</li>
				<!-- START ADMIN LINKS -->
				<div v-if="auth_user.role == 'admin'">
					<li class="bold">
						<nuxt-link :to="{ name : 'admin-admin-journals' }" class="waves-effect waves-cyan">
							<i class="material-icons">radio_button_unchecked</i><span class="menu-title">Journals</span>
						</nuxt-link>
					</li>
					<li class="bold">
						<nuxt-link :to="{ name : 'admin-admin-journal-sections' }" class="waves-effect waves-cyan">
							<i class="material-icons">radio_button_unchecked</i><span class="menu-title">Section</span>
						</nuxt-link>
					</li>
					<li class="bold">
						<nuxt-link :to="{ name : 'admin-admin-article-type' }" class="waves-effect waves-cyan">
							<i class="material-icons">radio_button_unchecked</i><span class="menu-title">Artical Type</span>
						</nuxt-link>
					</li>
					<li class="bold">
						<nuxt-link :to="{ name : 'admin-admin-special-issue' }" class="waves-effect waves-cyan">
							<i class="material-icons">radio_button_unchecked</i><span class="menu-title">Special Issues</span>
						</nuxt-link>
					</li>
				</div>
				<!-- END ADMIN LINKS -->
				<!-- START AUTHOR LINKS -->
				<div v-if="auth_user.role == 'author'">
					<li class="bold">
						<nuxt-link :to="{ name : 'admin-athr-menuscript' }" class="waves-effect waves-cyan">
							<i class="material-icons">import_contacts</i><span class="menu-title">Menu Script</span>
						</nuxt-link>
					</li>
				</div>
				<!-- END AUTHOR LINKS -->
				<li 
					class="bold" 
					:class="[ $route.name == 'admin-dashboard' || $route.name == 'admin-linkone' || $route.name == 'admin-linktwo' || $route.name == 'admin-crud' ? 'active open' : '' ]"
				>
					<a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)">
						<i class="material-icons">settings_input_svideo</i><span class="menu-title" data-i18n="Dashboard">Dashboard</span>
					</a>
					<div 
						class="collapsible-body"
						:style="[ $route.name == 'admin-dashboard' || $route.name == 'admin-linkone' || $route.name == 'admin-linktwo' || $route.name == 'admin-crud' ? {'display':'block'} : {'display':'none'} ]"
					>
						<ul class="collapsible collapsible-sub" data-collapsible="accordion">
							<li>
								<nuxt-link :to="{ name : 'admin-dashboard' }">
									<i class="material-icons">radio_button_unchecked</i>
									<span>Dashbord</span>
								</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ name : 'admin-linkone' }">
									<i class="material-icons">radio_button_unchecked</i>
									<span>Link 1</span>
								</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ name : 'admin-linktwo' }">
									<i class="material-icons">radio_button_unchecked</i>
									<span>Link 2</span>
								</nuxt-link>
							</li>
							<li>
								<nuxt-link :to="{ name : 'admin-crud' }">
									<i class="material-icons">radio_button_unchecked</i>
									<span>CRUD</span>
								</nuxt-link>
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<div class="navigation-background"></div><a class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i class="material-icons">menu</i></a>
		</aside>
		<!-- END: SideNav-->

		<!-- START CUSTOMIZER -->
		<div id="theme-cutomizer-out" class="theme-cutomizer sidenav row right-aligned ps" :style="cutomizer ? {'transform' : 'translateX(0%)'} : {'transform' : 'translateX(100%)'}">
			<div class="col s12">
				<a class="sidenav-close" @click="$emit('closeCustomizr')"><i class="material-icons">close</i></a>
				<h5 class="theme-cutomizer-title">Theme Customizer</h5>
				<p class="medium-small">Customize & Preview in Real Time</p>
				<div class="menu-options">
					<h6 class="mt-6">Menu Options</h6>
					<hr class="customize-devider">
					<div class="menu-options-form row">
						<div class="input-field col s12 menu-color mb-0">
							<p class="mt-0">Menu Color</p>
							<div class="gradient-color center-align">
								<span v-for="(cls , index) in butnClrs" :key="index" :class="[index == selctMenClrOpt ? 'selected' : $cookies.get('nuxt_lnk_clr_indx') == index ? 'selected' : '' , `menu-color-option ${cls.clr_n}`]" @click="selctMenClrOpt = index" :data-color="cls.clr_n"></span>
							</div>
						</div>
						<div class="text_center mt-3">
							<button class="waves-effect waves-light btn gradient-45deg-purple-deep-orange gradient-shadow mr-2" @click="selctMenClrOpt = null;resetMyCookie('nuxt_lnk_clr_indx')">Reset</button>
							<button class="btn btn-info" @click="setMyCokies(selctMenClrOpt,'nuxt_lnk_clr_indx')">Save</button>
						</div>
						<div class="input-field col s12 menu-bg-color mb-0">
							<p class="mt-0">Menu Background Color</p>
							<div class="gradient-color center-align">
								<span v-for="(cls , index) in settingClrs" :key="index" :class="[index == selctMenBgClrOpt ? 'selected' : $cookies.get('side__bg_clr_indx') == index ? 'selected' : '' , `menu-bg-color-option ${cls.clr_n}`]" @click="selctMenBgClrOpt = index" :data-color="cls.clr_n"></span>
							</div>
						</div>
						<div class="text_center mt-3">
							<button class="waves-effect waves-light btn gradient-45deg-purple-deep-orange gradient-shadow mr-2" @click="selctMenBgClrOpt = null;resetMyCookie('side__bg_clr_indx')">Reset</button>
							<button class="btn btn-info" @click="setMyCokies(selctMenBgClrOpt,'side__bg_clr_indx')">Save</button>
						</div>
					</div>
				</div>
				<h6 class="mt-6">Navbar Options</h6>
				<hr class="customize-devider">
				<div class="navbar-options row">
					<div class="input-field col s12 navbar-color mb-0">
						<p class="mt-0">Navbar Color</p>
						<div class="gradient-color center-align">
							<span v-for="(cls , index) in settingClrs" :key="index" :class="[index == selctNavClrOpt ? 'selected' : $cookies.get('nav_clr_indx') == index ? 'selected' : '' , `navbar-color-option ${cls.clr_n}`]" @click="selctNavClrOpt = index" :data-color="cls.clr_n"></span>
						</div>
					</div>
				</div>
				<div class="text_center mt-3">
					<button class="waves-effect waves-light btn gradient-45deg-purple-deep-orange gradient-shadow mr-2" @click="selctNavClrOpt = null;resetMyCookie('nav_clr_indx')">Reset</button>
					<button class="btn btn-info" @click="setMyCokies(selctNavClrOpt,'nav_clr_indx')">Save</button>
				</div>
			</div>
		</div>
		<!-- END CUSTOMIZER -->
	</div>
</template>

<script>
	export default {
		props: ['cutomizer','auth_user'],
		data () {
			return {
				settingClrs : [
					{clr_n : 'gradient-45deg-indigo-blue'},
					{clr_n : 'gradient-45deg-purple-deep-orange'},
					{clr_n : 'gradient-45deg-light-blue-cyan'},
					{clr_n : 'gradient-45deg-purple-amber'},
					{clr_n : 'gradient-45deg-purple-deep-purple'},
					{clr_n : 'gradient-45deg-deep-orange-orange'},
					{clr_n : 'gradient-45deg-green-teal'},
					{clr_n : 'gradient-45deg-indigo-light-blue'},
					{clr_n : 'gradient-45deg-red-pink'},
					{clr_n : 'red'},
					{clr_n : 'purple'},
					{clr_n : 'pink'},
					{clr_n : 'deep-purple'},
					{clr_n : 'cyan'},
					{clr_n : 'teal'},
					{clr_n : 'light-blue'},
					{clr_n : 'amber darken-3'},
					{clr_n : 'brown darken-2'},
					{clr_n : 'grey darken-5 dark'},
				],
				butnClrs : [
					{clr_n : 'gradient-45deg-indigo-blue',link: 'link_a_blue'},
					{clr_n : 'gradient-45deg-purple-deep-orange',link: 'link_a_purple_orange'},
					{clr_n : 'gradient-45deg-light-blue-cyan',link: 'link_a_blue_cyan'},
					{clr_n : 'gradient-45deg-purple-amber',link: 'link_a_purple_amber'},
					{clr_n : 'gradient-45deg-purple-deep-purple',link: 'link_a_purple_purple'},
					{clr_n : 'gradient-45deg-deep-orange-orange',link: 'link_a_orange_orange'},
					{clr_n : 'gradient-45deg-green-teal',link: 'link_a_green_teal'},
					{clr_n : 'gradient-45deg-indigo-light-blue',link: 'link_a_indigo_blue'},
					{clr_n : 'gradient-45deg-red-pink',link: 'link_a_red_pink'},
					{clr_n : 'red',link: 'link_a_red'},
					{clr_n : 'purple',link: 'link_a_purple'},
					{clr_n : 'pink',link: 'link_a_pink'},
					{clr_n : 'deep-purple',link: 'link_a_deep_purple'},
					{clr_n : 'cyan',link: 'link_a_cyan'},
					{clr_n : 'teal',link: 'link_a_teal'},
					{clr_n : 'light-blue',link: 'link_a_light_blue'},
					{clr_n : 'amber darken-3',link: 'link_a_amber_darken_3'},
					{clr_n : 'brown darken-2',link: 'link_a_brown_darken_2'},
					{clr_n : 'grey darken-5 dark',link: 'link_a_grey_darken_5_dark'},
				],
				selctNavClrOpt: null,
				selctMenClrOpt: null,
				selctMenBgClrOpt: null,
			}
		},
  		methods: {
  			logout () {
				this.$router.push({name : 'login'});
				this.$cookies.removeAll();
  			},
  			doFullScreen () {
  				document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen?document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.documentElement.msRequestFullscreen&&(document.msFullscreenElement?document.msExitFullscreen():document.documentElement.msRequestFullscreen()):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()
  			},
  			setMyCokies (index,cookie_n) {
  				if (index != null) {
  					this.$cookies.set(cookie_n, index);
  					this.swalSuccess();
  				}
  				else { alert('Please Select Any Color.'); }
  			},
  			resetMyCookie (cookie_n) {
  				this.$cookies.remove(cookie_n);
  				this.swalSuccess();
  			},
  			swalSuccess () {
  				this.$swal.fire({
  					position: 'top-start',
  					icon: 'success',
  					title: 'Your work has been saved.Reload page for best Results.',
  					showConfirmButton: false,
  					timer: 1500
  				})
  			},
  		},
	}
</script>

<style scoped>
	div#theme-cutomizer-out {
		transition: all 0.3s ease-in-out 0s !important;
	}
	nav.navbar-dark.grey.darken-5.dark , span.grey.darken-5.dark {
	    background: black !important;
	}
	aside.grey.darken-5.dark {
	    background: black !important;
	}
	ul.link_a_blue a.active {background: linear-gradient(45deg,#303f9f,#1976d2)!important;}
	ul.link_a_purple_orange a.active {background: linear-gradient(45deg,#8e24aa,#ff6e40)!important;}
	ul.link_a_blue_cyan a.active {background: linear-gradient(45deg,#0288d1,#26c6da)!important;}
	ul.link_a_purple_amber a.active {background: linear-gradient(45deg,#d500f9,#ffa000)!important;}
	ul.link_a_purple_purple a.active {background: linear-gradient(45deg,#7b1fa2,#7c4dff)!important;}
	ul.link_a_orange_orange a.active {background: linear-gradient(45deg,#bf360c,#f57c00)!important;}
	ul.link_a_green_teal a.active {background: linear-gradient(45deg,#43a047,#1de9b6)!important;}
	ul.link_a_indigo_blue a.active {background: linear-gradient(45deg,#3949ab,#4fc3f7)!important;}
	ul.link_a_red_pink a.active {background: linear-gradient(45deg,#ff5252,#f48fb1)!important;}
	ul.link_a_red a.active {background-color: #f44336!important;}
	ul.link_a_purple a.active {background-color: #9c27b0!important;}
	ul.link_a_pink a.active {background-color: #e91e63!important;}
	ul.link_a_deep_purple a.active {background-color: #673ab7!important;}
	ul.link_a_cyan a.active {background-color: #00bcd4!important;}
	ul.link_a_teal a.active {background-color: #009688!important;}
	ul.link_a_light_blue a.active {background-color: #03a9f4!important;}
	ul.link_a_amber_darken_3 a.active {background-color: #ff8f00!important;}
	ul.link_a_brown_darken_2 a.active {background-color: #5d4037!important;}
	ul.link_a_grey_darken_5_dark a.active {background-color: black!important;}
</style>