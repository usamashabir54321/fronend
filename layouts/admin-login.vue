<template>
  <div>
    <Nuxt keep-alive/>
    <script src="/admin/js/vendors.min.js"></script>
    <script src="/admin/js/plugins.min.js"></script>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'admin login layout',
        link: [
          { rel: 'stylesheet' , href: '/admin/css/themes/vertical-dark-menu-template/materialize.min.css' },
          { rel: 'stylesheet' , href: '/admin/css/themes/vertical-dark-menu-template/style.min.css' },
          { rel: 'stylesheet' , href: '/admin/css/pages/login.css' },
          { rel: 'stylesheet' , href: '/admin/css/icon.css?family=Material+Icons' },
        ],
      }
    },
  }
</script>