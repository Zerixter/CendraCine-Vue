<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12 carousel-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in bbmr" :key="item.id">
            <img :src="item.movie.cover" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="col-md-12 row movies-content">
        <div class="col-md-6 best-rating">
          <h3 class="movies-rating">Películes millor puntuades</h3>
          <div v-for="item in movies_best_rating" :key="item.id">
            <div>
                <h3 class="title">{{ item.name }}</h3>
                <div class="rating">
                    <span>
                        <i class="material-icons">star_rate</i> 
                        <span class="movie-rating">{{ item.rating }}</span>
                    </span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h3>Películes recomenadas</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./HomeComponent.js"></script>
<style src="./HomeComponent.css"></style>
