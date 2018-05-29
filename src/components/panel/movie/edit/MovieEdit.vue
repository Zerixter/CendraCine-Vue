<template>
    <div class="content row">
        <div class="title col-md-12">
            <h1>Formular per editar una película</h1>
        </div>
        <div class="formulari row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Nom</label>
                    <input v-model="movie.name" class="form-control" placeholder="Introdueix el nom de la Película"/>
                </div>
                <div class="form-group">
                    <label>Trailer</label>
                    <input v-model="movie.trailer" class="form-control" placeholder="Introdueix el enllaç del trailer de la película"/>
                </div>
                <div class="form-group">
                    <label>Edat recomenada</label>
                    <input v-model="movie.recommendedAge" type="number" class="form-control" placeholder="Introdueix la edat recomenda per la película"/>
                </div>
                <div class="form-group">
                    <label>Portada</label>
                    <input type="file" @change="onFileChanged" class="form-control" placeholder="Afageix una portada per la película"/>
                </div>
                <div class="form-group">
                    <label>Sinopsis</label>
                    <textarea v-model="movie.synopsis" class="form-control sinopsis"></textarea>
                </div>      
                <div class="form-group">
                    <button v-on:click="submitForm()" class="btn btn-primary add-button">Modificar película</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Categories</label>
                    <div class="row">
                        <div class="col-md-8 select-add">
                            <v-select v-model="category" :options="categories_select"></v-select>
                        </div>
                        <div class="col-md-4">
                            <button @click="addCategory" class="btn btn-primary add-button">Afegir categoria</button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <ul class="no-style">
                        <li v-for="item in chosen_categories" :key="item.id">
                            <button v-on:click="removeCategory(item)" class="btn btn-warning">Eliminar</button> {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <notifications classes="vue-notification error" group="error_get_movie"/>
        <notifications classes="vue-notification error" group="error_upload_image"/>
        <notifications classes="vue-notification error" group="error_get_categories"/>
        <notifications classes="vue-notification error" group="error_edit_movie"/>
    </div>
</template>

<script src="./MovieEdit.js"></script>