<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in bbmr" :key="item.id">
            <img :src="item.movie.cover" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script src="./HomeComponent.js"></script>
<style src="./HomeComponent.css"></style>
