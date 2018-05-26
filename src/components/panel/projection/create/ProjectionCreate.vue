<template>
    <div class="content">
        <h1>Formulari per afegir una projecció</h1>
        <div class="forumlari">
            <form class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Data de projecció</label>
                        <div class="row">
                            <datetime type="datetime" v-model="date"></datetime>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Película</label>
                        <v-select v-model="movie" :options="movies_select"></v-select>
                    </div>
                    <div class="form-group">
                        <label>Sala de cine</label>
                        <v-select v-model="theater" :options="theaters_select"></v-select>
                    </div>
                    <div class="form-group">
                        <button v-on:click="submitForm()" class="btn btn-primary">Afegir projecció</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./ProjectionCreate.js"></script>
<style>
.form-group .row {
    margin-left: 0px !important;
    margin-right: 0px !important;
}
.vdatetime {
    width: 100%;
}
.vdatetime-input {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>