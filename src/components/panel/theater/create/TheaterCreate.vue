<template>
    <div class="content">
        <h1>Formulari per afegir una sala de cine</h1>
        <div class="forumlari">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Numero de sala</label>
                    <input v-model="number" type="number" class="form-control" placeholder="Introdueix el numero de la sala de cine"/>
                </div>
                <div class="form-group">
                    <label>Capacitat</label>
                    <input v-model="capacity" type="number" class="form-control" placeholder="Introdueix la capacitat que té la sala"/>
                </div>
                <div class="form-group">
                    <label>Numero de files</label>
                    <input v-model="rows" type="number" class="form-control" placeholder="Introdueix el numero de files"/>
                </div>
                <div class="form-group">
                    <label>Numero de butaques per fila</label>
                    <input v-model="seats" type="number" class="form-control" placeholder="Introdueix el numero de butaques per fila"/>
                </div>
                <div class="form-group">
                    <button v-on:click="submitForm()" class="btn btn-primary">Afegir sala de cine</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./TheaterCreate.js"></script>