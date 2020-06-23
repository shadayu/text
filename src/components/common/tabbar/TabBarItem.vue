<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon" ></slot>
    <slot v-else name="item-icon-active" ></slot>
    <div :style="activeStyle"><slot name="item-text" ></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#d4237a'
    }
  },
  data(){
    return{
      //isActive:false
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf (this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      if(this.$route.path === this.path) 
      return
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
  flex: 1;
  text-align: center;
  position: relative;
  top: 3px;
  
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
.tab-bar-item div{
  position: relative;
  top: -3px;
}
/* .active{
  color: #d4237a;
} */
</style>


