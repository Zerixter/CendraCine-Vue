<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Formular per afegir una cartellera</h1>
        </div>
        <div class="formulari row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Nom</label>
                    <input v-model="name" class="form-control" placeholder="Introdueix el nom de la Cartellera"/>
                </div>
                <div class="form-group">
                    <label>Data en la que comença</label>
                    <input type="date" v-model="beginDate" class="form-control" placeholder="Data en la qual comença la duració de la cartellera"/>
                </div>
                <div class="form-group">
                    <label>Data en la que acaba</label>
                    <input type="date" v-model="endDate" class="form-control" placeholder="Data en la qual acaba la duració de la cartellera"/>
                </div>     
                <div class="form-group">
                    <button v-on:click="submitForm()" class="btn btn-primary add-button">Afegir cartellera</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Películes que estarán en la cartellera</label>
                    <div class="row">
                        <div class="col-md-8 select-add">
                            <v-select v-model="movie" :options="movies_select"></v-select>
                        </div>
                        <div class="col-md-4">
                            <button v-on:click="addMovie()" class="btn btn-primary add-button">Afegir película</button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <ul class="no-style">
                        <li v-for="item in chosen_movies" :key="item.id">
                            <button v-on:click="removeMovie(item)" class="btn btn-warning">Eliminar</button> {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <notifications classes="vue-notification error" group="error_create"/>
        <notifications classes="vue-notification error" group="error_get_movie"/>
    </div>
</template>

<script src="./BillboardCreate.js"></script>