<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Categories</h1>
        </div>
        <div class="col-md-12">
            <table class="table">
                <tr>
                    <th>Nom</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr v-for="item in categories" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td><button v-on:click="editCategory(item)" class="btn btn-primary add-button">Editar</button></td>
                    <td><button v-on:click="deleteCategory(item)" class="btn btn-primary add-button">Esborrar</button></td>
                </tr>
            </table>
        </div>
        <div>
            <v-btn @click="createCategory" color="blue" fab dark absolute bottom right>
                <v-icon>add</v-icon>
            </v-btn>
        </div>
    </div>
</template> 

<script src="./CategoryComponent.js"></script>