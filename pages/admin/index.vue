<template>
	<div class="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu preload-transitions 1-column login-bg   blank-page blank-page" data-open="click" data-menu="vertical-dark-menu" data-col="1-column">
		<div class="row">
			<div class="col s12">
				<div class="container"><div id="login-page" class="row">
					<div class="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
						<form class="login-form" @submit.prevent="loginMe">
							<div class="row">
								<div class="input-field col s12">
									<h5 class="ml-4">Sign in</h5>
								</div>
							</div>
							<div class="row margin">
								<div class="input-field col s12">
									<i class="material-icons prefix pt-2">person_outline</i>
									<input id="username" type="email" v-model="loginObj.email" required>
									<label for="username" class="center-align">Username</label>
								</div>
							</div>
							<div class="row margin">
								<div class="input-field col s12">
									<i class="material-icons prefix pt-2">lock_outline</i>
									<input id="password" type="password" v-model="loginObj.password" required>
									<label for="password">Password</label>
								</div>
							</div>
							<div class="row">
								<div class="col s12 m12 l12 ml-2 mt-1">
									<p>
										<label>
											<input type="checkbox">
											<span>Remember Me</span>
										</label>
									</p>
								</div>
							</div>
							<div class="row">
								<div class="input-field col s12">
									<button type="submit" class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">Login</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="content-overlay"></div>
		</div>
	</div>
	</div>
</template>

<script>
	import GlobalJs from '~/mixins/global.js';
	export default {
		layout: 'admin-login',
		mixins: [GlobalJs],
		data () {
			return {
				loginObj: {},
			}
		},
		methods : {
			async loginMe() {
				await this.$axios.post('/api/user/login', this.loginObj).then(res => {
					if (res.data.status == false) {
						this.swalfire('error',res.data.message);
					} else {
						this.swalfire('success',res.data.message);
						this.$cookies.set('admin_token', res.data.access_token);
						setTimeout(() => { this.$router.push({name : 'admin-dashboard'}); },300);
					}
					this.loginObj = {};
				});
			},
		},
	}
</script>