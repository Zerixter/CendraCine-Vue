<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Panell Cendracine</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/panel/movies">Películes</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/panel/billboards">Cartelleres</router-link>
      </li>
      <li class="nav-item-active">
        <router-link to="/panel/categories">Categories</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script src="./NavMenu.js"></script>
<style src="./NavMenu.css"></style>