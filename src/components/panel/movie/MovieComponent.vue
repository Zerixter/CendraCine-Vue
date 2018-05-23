<template>
    <div class="content">
        <h1>Películes</h1>
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
                <td><button v-on:click="editMovie(item)" class="btn btn-primary">Editar</button></td>
                <td><button v-on:click="deleteMovie(item)" class="btn btn-primary">Esborrar</button></td>
            </tr>
        </table>
    </div>
</template>

<script src="./MovieComponent.js"></script>