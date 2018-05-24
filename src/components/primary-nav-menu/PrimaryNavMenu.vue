<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">CendraCine</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="link-nav" to="/panel/movies">Inici</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="link-nav" to="/panel/billboards">Cartellera</router-link>
            </li>
            <li class="nav-item-active">
                <router-link class="link-nav" to="/panel/categories">Reservar</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="link-nav" to="/panel/theaters">Informació</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="link-nav" to="/panel/">Contacte</router-link>
            </li>
        </ul>
        </div>
    </nav>
</template>

<script src="./PrimaryNavMenu.js"></script>