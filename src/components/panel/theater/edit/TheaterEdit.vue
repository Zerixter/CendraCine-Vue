<template>
    <div class="content">
        <div class="forumlari">
            <div class="col-md-6">
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
                    <button v-on:click="submitForm()" class="btn btn-primary">Modifcar sala de cine</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./TheaterEdit.js"></script>