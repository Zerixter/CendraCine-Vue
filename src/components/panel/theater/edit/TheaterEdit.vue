<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Formulari per editar una sala de cine</h1>
        </div>
        <div class="formulari row">
            <div class="col-md-12 add-theater">
                <div class="form-group">
                    <label>Numero de sala</label>
                    <input v-model="theater.number" type="number" class="form-control" placeholder="Introdueix el numero de la sala de cine"/>
                </div>
                <div class="form-group">
                    <label>Capacitat</label>
                    <input v-model="theater.capacity" type="number" class="form-control" placeholder="Introdueix la capacitat que té la sala"/>
                </div>
                <div class="form-group">
                    <label>Numero de files</label>
                    <input v-model="theater.rowNumbers" type="number" class="form-control" placeholder="Introdueix el numero de files"/>
                </div>
                <div class="form-group">
                    <label>Numero de butaques per fila</label>
                    <input v-model="theater.seatNumbers" type="number" class="form-control" placeholder="Introdueix el numero de butaques per fila"/>
                </div>
                <div class="form-group">
                    <button v-on:click="submitForm()" class="btn btn-primary add-button">Modifcar sala de cine</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./TheaterEdit.js"></script>
<style>
.add-theater {
    padding: 40px;
}
</style>