<template>
    <div class="content">
         <div class="forumlari">
            <form class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Nom</label>
                        <input v-model="billboard.name" class="form-control" placeholder="Introdueix el nom de la Cartellera"/>
                    </div>
                    <div class="form-group">
                        <label>Data en la que comença</label>
                        <input v-model="billboard.beginDate" type="date" class="form-control" placeholder="Data en la qual comença la duració de la cartellera"/>
                    </div>
                    <div class="form-group">
                        <label>Data en la que acaba</label>
                        <input v-model="billboard.endDate" type="date" class="form-control" placeholder="Data en la qual acaba la duració de la cartellera"/>
                    </div>     
                    <div class="form-group">
                        <button v-on:click="submitForm()" class="btn btn-primary">Editar cartellera</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./BillboardEdit.js"></script>
