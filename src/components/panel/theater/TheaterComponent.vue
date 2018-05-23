<template>
    <div class="content">
        <h1>Sales de cine</h1>
        <table class="table">
            <tr>
                <th>Numero de sala</th>
                <th>Capacitat</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
            <tr v-for="item in theaters" :key="item.id">
                <td>{{ item.number }}</td>
                <td>{{ item.capacity }}</td>
                <td><button v-on:click="editTheater(item)" class="btn btn-primary">Editar</button></td>
                <td><button v-on:click="deleteTheater(item)" class="btn btn-primary">Esborrar</button></td>
            </tr>
        </table>
    </div>
</template>

<script src="./TheaterComponent.js"></script>