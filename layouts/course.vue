<template>
  <div id="course_layout">

    <header-l2 />
    <Nuxt keep-alive/>
    <footer-l2 />

    <script src="/webAssets/js/popper.min.js"></script>
    <script src="/webAssets/js/bootstrap.min.js"></script>
    <script src="/webAssets/js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="/webAssets/js/jquery.fancybox.js"></script>
    <script src="/webAssets/js/appear.js"></script>
    <script src="/webAssets/js/parallax.min.js"></script>
    <script src="/webAssets/js/tilt.jquery.min.js"></script>
    <script src="/webAssets/js/jquery.paroller.min.js"></script>
    <script src="/webAssets/js/owl.js"></script>
    <script src="/webAssets/js/wow.js"></script>
    <script src="/webAssets/js/nav-tool.js"></script>
    <script src="/webAssets/js/jquery-ui.js"></script>
    <script src="/webAssets/js/script.js"></script>

  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'scilip-web-course',
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