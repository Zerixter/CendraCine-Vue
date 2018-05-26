<template>
    <div class="content">
        <h1>Cartellera</h1>
        <div class="row">
            <div class="col-md-6 row" v-for="item in bbmr" :key="item.id">
                <div class="col-md-6">
                    <img :src="item.movie.cover">
                </div>
                <div class="col-md-6">
                    <h3>{{ item.movie.name }}</h3>
                    <p>{{ item.movie.synopsis }}</p>
                    <span>
                        <button @click="reservar(item)" class="btn btn-primary">Reservar ticket</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
img {
    width: 100%;
}
.row {
    margin-left: 0px;
    margin-right: 0px;
}
</style>
<script src="./Billboard.js"></script>