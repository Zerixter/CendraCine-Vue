<template>
    <div class="content">
        <h1>Categories</h1>
        <table class="table">
            <tr>
                <th>Nom</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
            <tr v-for="item in categories" :key="item.id">
                <td>{{ item.name }}</td>
                <td><button v-on:click="editCategory(item)" class="btn btn-primary">Editar</button></td>
                <td><button v-on:click="deleteCategory(item)" class="btn btn-primary">Esborrar</button></td>
            </tr>
        </table>
    </div>
</template>

<script src="./CategoryComponent.js"></script>
<style src="./CategoryComponent.css"></style>