<template>
    <div class="content">
        <h1>Formular per afegir una película</h1>
        <div class="forumlari">
            <form class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Nom</label>
                        <input v-model="name" class="form-control" placeholder="Introdueix el nom de la Película"/>
                    </div>
                    <div class="form-group">
                        <label>Trailer</label>
                        <input v-model="trailer" class="form-control" placeholder="Introdueix el enllaç del trailer de la película"/>
                    </div>
                    <div class="form-group">
                        <label>Edat recomenada</label>
                        <input v-model="age" type="number" class="form-control" placeholder="Introdueix la edat recomenda per la película"/>
                    </div>
                    <div class="form-group">
                        <label>Portada</label>
                        <input v-model="cover" class="form-control" placeholder="Afageix una portada per la película"/>
                    </div>
                    <div class="form-group">
                        <label>Sinopsis</label>
                        <textarea v-model="synopsis" class="form-control sinopsis"></textarea>
                    </div>      
                    <div class="form-group">
                        <button v-on:click="submitForm()" class="btn btn-primary">Afegir película</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Categories</label>
                        <div class="row">
                            <div class="col-md-8">
                                <select id="select-category" class="form-control">
                                    <option v-for="item in categories" :key="item.id">{{ item.name }}</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <button v-on:click="addCategory()" class="btn btn-primary">Afegir categoria</button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <ul>
                            <li v-for="item in chosen_categories" :key="item.id">
                                <button v-on:click="removeCategory(item)" class="btn btn-warning">Eliminar</button> {{ item.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="./MovieCreate.js"></script>