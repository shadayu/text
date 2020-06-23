<template>
<div class="main-tab-bar">
  <tab-bar >
      <tab-bar-item path="/home" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/order.svg">
        <img slot="item-icon-active" src="~assets/img/no/order.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/flow.svg">
        <img slot="item-icon-active" src="~assets/img/no/flow.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/cart.svg">
        <img slot="item-icon-active" src="~assets/img/no/cart.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#d4237a">
        <img slot="item-icon" src="~assets/img/user.svg">
        <img slot="item-icon-active" src="~assets/img/no/user.svg">
        <div slot="item-text">我</div>
      </tab-bar-item>
    </tab-bar>
    <!-- <img src="~assets/img/home不透明背景.png" alt="" id="homeBar"> -->
</div>
</template>

<script>



import TabBar from '../common/tabbar/TabBar.vue'

import TabBarItem from '../common/tabbar/TabBarItem.vue'



export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
/* #homeBar {
  width: 375px;
  height: 34px;
  position: fixed;
  top: 778px;
}  */
.main-tab-bar {
  z-index: 999;
}
</style>