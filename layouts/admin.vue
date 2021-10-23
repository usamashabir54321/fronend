<template>
  <div v-show="showAdmin">
    <div class="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu preload-transitions 2-columns" data-open="click" data-menu="vertical-dark-menu" data-col="2-columns">
      <admin-header />
      <Nuxt keep-alive/>
      <admin-footer :cutomizer="stateCustomzr" @closeCustomizr="stateCustomzr = false"/>
      <a @click.prevent="stateCustomzr = true" class="btn btn-customizer pink accent-2 white-text theme-cutomizer-trigger"><i class="material-icons">settings</i></a>
    </div>
    <script src="/admin/js/vendors.min.js"></script>
    <script src="/admin/js/plugins.min.js"></script>
    <script src="/admin/js/scripts/customizer.min.js"></script>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showAdmin: false,
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
      setTimeout(() => { this.showAdmin = true; },200);
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