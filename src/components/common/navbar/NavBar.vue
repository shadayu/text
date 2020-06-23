<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name ='right'></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
.left,.right {
  width: 60px;
  height: 40px;
  /* background-color: antiquewhite; */
}
.center {
  flex:1;
  /* background-color: beige; */
}
</style>