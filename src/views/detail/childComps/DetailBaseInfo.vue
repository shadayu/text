<template>
<!-- 当数据没有请求到时不能渲染dom -->
<!-- v-if="Object.keys(goods).length !== 0 -->
  <div class="detailBaseInfo" v-if="Object.keys(goods).length !== 0">  
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">${{goods.price}}</span>
      <span class="o-price">${{goods.oldPrice}}</span>
      <span class="discount"> {{goods.discountActivity}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.logisticsInfo[0]}}</span>
      <span>{{goods.logisticsInfo[1]}}</span>
      <span>{{goods.logisticsInfo[2]}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item,index) in goods.goodsImages" :key="item.index">
        <img :src="goods.goodsImages[index]" alt="">
        <!-- <span>{{}}</span> -->
      </span>
    
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>
  /* .detailBaseInfo{
    width: 375px;
  } */
  .info-title {
    color: #222;
    padding: 3%;
    text-indent:-8px
  }
  .info-price {
    padding-left: 3%;
    padding-right: 3%;
    margin-bottom: 20px;
  }
  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text)
  }
  .info-price .discount{
    background-color:var(--color-high-text) ;
    border-radius: 20px;
    color: white;
    border: var(--color-high-text)  5px solid;
    font-size: 10px;
    position: relative;
    left: 10px;
    top: -5px;
    
  }

  .info-price .o-price {
    font-size:13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .info-service {
    width: 100%;
  }
  .info-service-item img{
    width: 100%;
  }
  .info-other{
    display: flex;
    padding-left: 3%;
    padding-right: 3%;
    margin-bottom: 15px;
    font-size: 13px;
    text-align: center;
  }
  .info-other span{
    flex: 1;

  }
  

</style>