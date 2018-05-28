<template>
    <div class="content">
        <h1>Formulari per afegir una categoria</h1>
        <div class="forumlari">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Nom</label>
                    <input v-model="name" class="form-control" placeholder="Introdueix el nom de la Categoria"/>
                </div>
                <div class="form-group">
                    <button v-on:click="submitForm()" class="btn btn-primary">Afegir categoria</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./CategoryCreate.js"></script>