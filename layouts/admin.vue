<template>
  <div>
    <div v-show="!showAdmin" class="loading"><span></span></div>
    <div v-show="showAdmin">
      <div class="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu preload-transitions 2-columns" data-open="click" data-menu="vertical-dark-menu" data-col="2-columns">
        <admin-header :cutomizer="stateCustomzr" @closeCustomizr="stateCustomzr = false" :auth_user="auth_user"/>
        <Nuxt />
        <a @click.prevent="stateCustomzr = true" class="btn btn-customizer pink accent-2 white-text theme-cutomizer-trigger"><i class="material-icons">settings</i></a>
      </div>
      <script src="/admin/js/vendors.min.js"></script>
      <script src="/admin/js/plugins.min.js"></script>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showAdmin: false,
        auth_user: {},
        stateCustomzr: false,
      }
    },
    beforeCreate () {
      if (!this.$cookies.get('admin_token')) {
        this.$router.push({name : '404-page-not-found'});
      } else {
        this.$axios.setHeader('Authorization', 'Bearer '+this.$cookies.get('admin_token'));
      }
    },
    created () {
      this.$axios.get('/api/user/auth_user').then(res => { 
        this.auth_user = res.data;
        this.showAdmin = true;
      });
    },
    mounted () {
      setTimeout(() => {
        this.$store.commit('logReg/myAuthUser',this.auth_user);
      },3000);
    },
    head() {
      return {
        title: 'scilip-admin',
        link: [
          { rel: 'stylesheet' , href: '/admin/css/themes/vertical-dark-menu-template/materialize.min.css' },
          { rel: 'stylesheet' , href: '/admin/css/themes/vertical-dark-menu-template/style.min.css' },
          { rel: 'stylesheet' , href: '/admin/css/pages/dashboard-modern.css' },
          { rel: 'stylesheet' , href: '/admin/css/custom/custom.css' },
          { rel: 'stylesheet' , href: '/admin/css/animate.css' },
          { rel: 'stylesheet' , href: '/admin/css/icon.css?family=Material+Icons' },
        ],
      }
    },
  }
</script>

<style>
  .loading {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
  @keyframes circle-loading {
    to {
      transform: rotateZ(360deg);
    }
  }
  .loading span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #fff;
    animation: circle-loading 1200ms ease infinite;
  }
</style>