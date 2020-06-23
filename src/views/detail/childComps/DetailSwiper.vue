<template>
  <div>
    <swiper class="swiper1">
      <swiper-item  v-for="item in topImages" :key="item.index">
        <img :src="item" alt="">111
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

//import {Swiper, SwiperItem} from '../../../components/common/swiper/index'

import Swiper from 'components/common/swiper/Swiper.vue'

import SwiperItem from 'components/common/swiper/SwiperItem.vue'

export default {
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
     }
  },
  components: {
    "swiper":Swiper, 
    "swiper-item":SwiperItem
  },
}
</script>

<style>
  .swiper1{
    height: 500px;
    overflow: hidden;
  }
</style>