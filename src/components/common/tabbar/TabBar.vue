<template>
  <div id="tab-bar">
    <slot></slot>
    
  </div>
</template>

<script>
export default {
  name:'TabBar'
};
</script>

<style>
  body {
  padding: 0;
  margin: 0;
  /* position: relative; */
}
#tab-bar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}


</style>