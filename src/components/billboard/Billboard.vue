<template>
    <div class="content row">
        <div class="col-md-12 title">
            <h1>Cartellera</h1>
        </div>
        <div class="col-md-6 row movie" v-for="item in bbmr" :key="item.id">
            <div class="col-md-6">
                <img :src="item.movie.cover">
            </div>
            <div class="col-md-6">
                <h3 class="title">{{ item.movie.name }}</h3>
                <div class="rating">
                    <span>
                        <i class="material-icons">star_rate</i> 
                        <span class="movie-rating">{{ item.movie.rating }}</span>
                    </span>
                </div>
                <div class="ticket">
                    <span>
                        <button @click="reservar(item)" class="btn btn-primary add-button">Reservar ticket</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
h3.title {
    padding: 5px 0;
}
img {
    width: 100%;
}
.row {
    margin-left: 0px;
    margin-right: 0px;
}
.sinopsis {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 80ch;
}
.movie {
    padding: 20px 40px;
}
.rating span i {
    width: 20%;
    font-size: 27px;
}
span.movie-rating {
    font-size: 23px;
}
div.rating {
    padding: 15px 0;
}
</style>
<script src="./Billboard.js"></script>