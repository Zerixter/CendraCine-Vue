<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Panell CendraCine</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="link-nav" to="/panel/movies">Películes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="link-nav" to="/panel/billboards">Cartelleres</router-link>
          </li>
          <li class="nav-item">
            <router-link class="link-nav" to="/panel/categories">Categories</router-link>
          </li>
          <li class="nav-item">
            <router-link class="link-nav" to="/panel/theaters">Sales</router-link>
          </li>
          <li class="nav-item">
            <router-link class="link-nav" to="/panel/projections">Projections</router-link>
          </li>
        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item active">
                <span @click="closeSession" class="link-nav close-session" v-if="isLogged">Tancar sessió</span>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script src="./NavMenu.js"></script>
<style>
.close-session {
    cursor: pointer;
    color: #007bff;
}
</style>