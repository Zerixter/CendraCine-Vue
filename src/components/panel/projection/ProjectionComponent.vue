<template>
    <div class="content">
        <h1>Projeccions</h1>
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
                <td><button v-on:click="editMovie(item)" class="btn btn-primary">Editar</button></td>
                <td><button v-on:click="deleteMovie(item)" class="btn btn-primary">Esborrar</button></td>
            </tr>
        </table>
    </div>
</template>

<script src="./ProjectionComponent.js"></script>