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
                </div>
            </div>
        </div>
    </div>
</template>

<style>
img {
    width: 100%;
}
</style>
<script src="./Billboard.js"></script>