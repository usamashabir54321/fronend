<template>
  <div id="login_layout">
    
    <header-l1 />
    <Nuxt keep-alive/>
    <footer-l1 />
    
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'scilip-web-login',
        link: [
          { rel: 'stylesheet' , href: '/webAssets/css/bootstrap.css' },
          { rel: 'stylesheet' , href: '/webAssets/css/style.css' },
          { rel: 'stylesheet' , href: '/webAssets/css/responsive.css' },
          { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&amp;display=swap' },
        ]
      }
    }
  }
</script>