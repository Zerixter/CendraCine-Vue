<template>
  <div id="app" class="container-fluid">
    <menu-nav></menu-nav>
    <router-view/>
  </div>
</template>

<script>
import MenuNav from '@/components/menu-nav/MenuNav.vue'
import AccountService from '@/services/AccountService'

const accountService = new AccountService();

export default {
  name: 'App',
  components: { 
    'menu-nav': MenuNav,
  },
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
.row {
    margin-left: 0px;
    margin-right: 0px;
}
.btn--bottom.btn--absolute {
    bottom: 20px;
    position: fixed;
}
.title {
    padding: 10px 0;
}
.formulari {
    text-align: left;
    width: 100%;
}
.form-control {
    width: 100%;
}
div.dropdown {
    padding: 0px;
}
.add-button {
    margin: 0px;
}
.select-add {
    padding-left: 0px;
}
ul.no-style {
    list-style-type: none;
}
.button-table {
    margin: 0px;
}
.title {
    text-align: center;
    padding: 5px 0;
}
.title h1 {
    text-align: center;
}
</style>
