<template>
  <div id="app" class="container-fluid">
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
import PrimaryNavMenu from '@/components/primary-nav-menu/PrimaryNavMenu.vue'
import NavMenu from '@/components/panel/navmenu/NavMenu.vue'
export default {
  name: 'App',
  components: { 
    'nav-menu': NavMenu,
    'primary-menu': PrimaryNavMenu
  }
}
</script>

<style>
body {
    margin: 0px;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0px;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.container-fluid {
    padding-left: 0px;
    padding-right: 0px;
}
form {
    text-align: left;
}
div.forumlari {
    padding: 25px;
}
textarea.sinopsis {
    resize: none;
}
.center {
    text-align: center;
}
.link-nav {
    margin: 0 8px;
}
</style>
