<template>
  <div id="app" class="container-fluid">
    <div v-if="isAdmin">
        <nav-menu></nav-menu>
    </div>
    <div v-else>
        <primary-menu></primary-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
import PrimaryNavMenu from '@/components/primary-nav-menu/PrimaryNavMenu.vue'
import NavMenu from '@/components/panel/navmenu/NavMenu.vue'
import AccountService from '@/services/AccountService'

const accountService = new AccountService();

export default {
  name: 'App',
  components: { 
    'nav-menu': NavMenu,
    'primary-menu': PrimaryNavMenu
  },
  data() {
      return {
          isAdmin: false,
      }
  },
  mounted() {
      accountService.getRoleAdmin()
      .then(res => {
          console.log(res)
          if (res.data == 'Admin') this.isAdmin = true;
      })
      .catch(err => {});
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
