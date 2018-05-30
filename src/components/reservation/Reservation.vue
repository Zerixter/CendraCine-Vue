<template>
    <div classs="content">
        <div class="title">
            <h1>Reservar ticket</h1>
        </div>
        <div class="row reserva">
            <div class="col-md-3">
                <h2>{{ movie.name }}</h2>
                <img class="cover" :src="movie.cover" alt="">
            </div>
            <div class="col-md-9 row">
                <div class="col-md-12">
                    <h3 class="dates-title">Dates en les quals es projecta la película</h3>
                </div>
                <div class="col-md-9 select">
                    <v-select v-model="projection" :options="projections_select"></v-select>
                </div>
                <div id="boton col-md-3" class="select">
                    <button v-on:click="makeReservation()" class="btn btn-primary add-button">Reservar</button>
                </div>
                <div class="col-md-12">
                    <h3 class="sinopsis-title">Sinopsis</h3>
                    <p style="text-align:left;">
                        {{ movie.synopsis }}
                    </p>
                    <div v-if="trailer != null" class="trailer-div embed-responsive embed-responsive-16by9">
                        <iframe 
                        class="embed-responsive-item"
                        :src="trailer" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script src="./Reservation.js"></script>
<style src="./Reservation.css"></style>