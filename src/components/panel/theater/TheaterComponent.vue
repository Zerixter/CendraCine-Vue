<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Sales de cine</h1>
        </div>
        <div class="col-md-12">
            <table class="table">
                <tr>
                    <th>Numero de sala</th>
                    <th>Capacitat</th>
                    <th>Eliminar</th>
                </tr>
                <tr v-for="item in theaters" :key="item.id">
                    <td>{{ item.number }}</td>
                    <td>{{ item.capacity }}</td>
                    <td><button v-on:click="deleteTheater(item)" class="btn btn-primary add-button">Esborrar</button></td>
                </tr>
            </table>
        </div>
        <div>
            <v-btn @click="createTheater" color="blue" fab dark absolute bottom right>
                <v-icon>add</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script src="./TheaterComponent.js"></script>