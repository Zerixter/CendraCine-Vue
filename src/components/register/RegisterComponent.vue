<template>
    <div class="content">
        <form clas="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Nom</label>
                    <input v-model="name" class="form-control" placeholder="Introdueix el teu nom"/>
                </div>
                <div class="form-group">
                    <label>Correu electrònic</label>
                    <input v-model="email" class="form-control" placeholder="Introdueix el correu d'usuari"/>
                </div>
                <div class="form-group">
                    <label>Contrasenya</label>
                    <input v-model="password" class="form-control" type="password" placeholder="Introdueix la contrasenya"/>
                </div>
                <button v-on:click="register()" class="btn btn-primary">Registrar-se</button>
            </div>
        </form>
    </div>
</template>

<style src="./RegisterComponent.css"></style>
<script src="./RegisterComponent.js"></script>