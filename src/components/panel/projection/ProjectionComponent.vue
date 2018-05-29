<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Projeccions</h1>
        </div>
        <div class="col-md-12">
            <table class="table">
                <tr>
                    <th>Data de projecció</th>
                    <th>Película</th>
                    <th>Numero de sala</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr v-for="item in projections" :key="item.id">
                    <td>{{ getDate(item.projectionDate) | formatDate }}</td>
                    <td>{{ item.movie.name }}</td>
                    <td>{{ item.theater.number }}</td>
                    <td><button v-on:click="editProjection(item)" class="btn btn-primary add-button">Editar</button></td>
                    <td><button v-on:click="deleteProjection(item)" class="btn btn-primary add-button">Esborrar</button></td>
                </tr>
            </table>
        </div>
        <div>
            <v-btn @click="createProjection" color="blue" fab dark absolute bottom right>
                <v-icon>add</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script src="./ProjectionComponent.js"></script>