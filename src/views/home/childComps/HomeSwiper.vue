<template>

  <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>

</template>

<script>

import Swiper from 'components/common/swiper/Swiper.vue'

import SwiperItem from 'components/common/swiper/SwiperItem.vue'




export default {
  props:{
    banners:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    'swiper':Swiper,
    'swiper-item':SwiperItem
  },
  data () {
    return {
      isLoad:false
    }
  },
  methods: {
    //过河拆桥法...只执行一次
    imageLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
      
    }
  }
}
</script>

<style>

</style>