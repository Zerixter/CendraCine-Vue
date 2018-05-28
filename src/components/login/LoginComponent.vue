<template>
    <div class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Correu elèctronic</label>
                    <input v-model="email" class="form-control" placeholder="Introdueix el correu d'usuari"/>
                </div>
                <div class="form-group">
                    <label>Contrasenya</label>
                    <input v-model="password" class="form-control" type="password" placeholder="Introdueix la contrasenya"/>
                </div>
                <button v-on:click="login()" class="btn btn-primary">Log-in</button>
                <router-link to="/register">Registrar-se</router-link>
            </div>
        </div>
    </div>
</template>

<script src="./LoginComponent.js"></script>
<style src="./LoginComponent.css"></style>