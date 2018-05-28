<template>
    <div class="content">
         <div class="forumlari">
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
            <div class="col-md-6">
                <div class="form-group">
                    <label>Películes que estarán en la cartellera</label>
                    <div class="row">
                        <div class="col-md-8">
                            <select id="select-movie" class="form-control">
                                <option v-for="item in movies" :key="item.id">{{ item.name }}</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <button v-on:click="addMovie()" class="btn btn-primary">Afegir película</button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <ul>
                        <li v-for="item in chosen_movies" :key="item.id">
                            {{ item.movie.name }} <button v-on:click="removeMovie(item)" class="btn btn-warning">Eliminar</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./BillboardEdit.js"></script>
