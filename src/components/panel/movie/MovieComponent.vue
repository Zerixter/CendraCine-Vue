<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Películes</h1>
        </div>
        <div class="col-md-12">
            <table class="table">
                <tr>
                    <th>Nom</th>
                    <th>Poster</th>
                    <th>Categories</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr v-for="item in movies" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.cover }}</td>
                    <td>
                        <span v-for="category in item.categories" :key="category.id">
                            {{ category.name }}
                        </span>
                    </td>
                    <td><button v-on:click="editMovie(item)" class="btn btn-primary button-table">Editar</button></td>
                    <td><button v-on:click="deleteMovie(item)" class="btn btn-primary button-table">Esborrar</button></td>
                </tr>
            </table>
        </div>
        <div>
            <v-btn @click="createMovie" color="blue" fab dark absolute bottom right>
                <v-icon>add</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script src="./MovieComponent.js"></script>
<style src="./MovieComponent.css"></style>