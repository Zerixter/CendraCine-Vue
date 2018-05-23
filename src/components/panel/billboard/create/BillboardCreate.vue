<template>
        <div class="content">
        <h1>Formular per afegir una cartellera</h1>
        <div class="forumlari">
            <form class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Nom</label>
                        <input v-model="name" class="form-control" placeholder="Introdueix el nom de la Cartellera"/>
                    </div>
                    <div class="form-group">
                        <label>Data en la que comença</label>
                        <input type="date" v-model="beginDate" class="form-control" placeholder="Data en la qual comença la duració de la cartellera"/>
                    </div>
                    <div class="form-group">
                        <label>Data en la que acaba</label>
                        <input type="date" v-model="endDate" class="form-control" placeholder="Data en la qual acaba la duració de la cartellera"/>
                    </div>     
                    <div class="form-group">
                        <button v-on:click="submitForm()" class="btn btn-primary">Afegir cartellera</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./BillboardCreate.js"></script>
<style src="./BillboardCreate.css"></style>