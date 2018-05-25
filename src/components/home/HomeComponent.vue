<template>
  <div class="content">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in bbmr" :key="item.id">
        <img src="../../assets/thorragnarok.jpg" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script src="./HomeComponent.js"></script>
<style src="./HomeComponent.css"></style>
