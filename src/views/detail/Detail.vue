<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper"

import {request, Goods, Shop} from "network/detail";

import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

export default {
  components: {
    DetailNavBar,
    "detail-swiper":DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      goodsId: String,
      topImages:[],
      goods:{},
      shop:{},
    };
  },
  created() {
    //保存传入的id
    //this.iid = this.$route.params
    this.goodsId = this.$route.query.goodsId;
    console.log(this.goodsId);

    //根据iid请求详情数据
    // getDetail ({goodsId: 123}).then(res => {
    //   console.log(res);

    // })
    function GoodsDetail(data) {
      return request("/goods/detail", "POST", data);
    }

    GoodsDetail({ goodsId: this.goodsId })
      .then(( res ) => {
        console.log(res);
        console.log('1111');
        console.log('11112');
        this.topImages = res.data.data.banners;
        //获取商品信息
        this.goods = new Goods(res.data.data)
        this.shop = new Shop(res.data.data.shopInfo)
        console.log(this.goods);
        console.log(this.shop);
        
      })
      .catch(({ error }) => {
        window.console.log(error);
      });

    
      
  }
};
</script>

<style>
</style>