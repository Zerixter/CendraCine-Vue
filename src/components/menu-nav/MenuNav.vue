<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">CendraCine</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active" v-if="!isAdmin">
                <router-link class="link-nav" to="/">Inici</router-link>
            </li>
            <li class="nav-item active" v-if="!isAdmin">
                <router-link class="link-nav" to="/cartellera">Cartellera</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
                <router-link class="link-nav" to="/panel/movies">Películes</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
                <router-link class="link-nav" to="/panel/billboards">Cartelleres</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
                <router-link class="link-nav" to="/panel/categories">Categories</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
                <router-link class="link-nav" to="/panel/theaters">Sales</router-link>
            </li>
            <li class="nav-item" v-if="isAdmin">
                <router-link class="link-nav" to="/panel/projections">Projections</router-link>
            </li>
        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item active" v-if="!isLogged">
                <router-link class="link-nav" to="/login" v-if="!isLogged">Iniciar sessió</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="link-nav" to="/reserves" v-if="isLogged">Reserves</router-link>
            </li>
            <li class="nav-item active">
                <span @click="closeSession" class="link-nav close-session" v-if="isLogged">Tancar sessió</span>
            </li>
        </ul>
        </div>
    </nav>
</template>

<script src="./MenuNav.js"></script>
<style>
span.close-session {
    color: #007bff !important;
}
span.close-session:hover {
    cursor: pointer;
}
</style>