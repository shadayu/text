<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.image" alt="" @load="imageLoad">
    <div class="title">
      <p>{{goodsItem.title}}</p>
      <span><b>价格</b>:{{goodsItem.price}}</span>
      <span>收藏:{{goodsItem.collection}}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  beforeDestroy() {
   
  },
  methods: {
    imageLoad () {
      this.$bus.$emit('itemImageLoad')
      this.$emit('fuckYou')
    },
    itemClick () {
      console.log(this.goodsItem.iid);
      
      this.$router.push({path: "/detail", query: {goodsId: 123}})   //此处写死
    }
  }
}
</script>

<style>
  .goods-list-item{
    width: 50%;
    padding: 3%;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-list-item .title{
    width: 100%;
    height: 80px;
    line-height: 19px;
    font-size: 12px;
  }
  .title span p {
    color: brown;
  }
</style>