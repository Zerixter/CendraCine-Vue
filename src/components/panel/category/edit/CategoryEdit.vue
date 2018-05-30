<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Formulari per editar una categoria</h1>
        </div>
        <div class="formulari row">
            <div class="col-md-12 add-category">
                <div class="form-group">
                    <label>Nom</label>
                    <input v-model="category.name" class="form-control" placeholder="Introdueix el nom de la Categoria"/>
                </div>
                <div class="form-group">
                    <button v-on:click="submitForm()" class="btn btn-primary add-button">Modificar categoria</button>
                </div>
            </div>
        </div>
        <notifications classes="vue-notification error" group="error_get_category"/>
        <notifications classes="vue-notification error" group="error_edit"/>
    </div>
</template>

<script src="./CategoryEdit.js"></script>
<style>
.add-category {
    padding: 40px;
}
</style>