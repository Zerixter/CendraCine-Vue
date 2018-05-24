<template>
    <div class="content">
        <h1>Cartelleres</h1>
        <table class="table">
            <tr>
                <th>Nom</th>
                <th>Data en la que comença</th>
                <th>Data en la que acaba</th>
                <th>Data de creació</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
            <tr v-for="item in billboards" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ getDate(item.beginDate) }}</td>
                <td>{{ getDate(item.endDate) }}</td>
                <td>{{ new Date(item.dateCreated).toISOString().split('T')[0] }}</td>
                <td><button v-on:click="editBillboard(item)" class="btn btn-primary">Editar</button></td>
                <td><button v-on:click="deleteBillboard(item)" class="btn btn-primary">Esborrar</button></td>
            </tr>
        </table>
    </div>
</template>

<script src="./BillboardComponent.js"></script>