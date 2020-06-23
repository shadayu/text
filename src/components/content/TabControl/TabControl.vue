<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.index" class="tab-control-item"
    :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tab-control{
  display: flex;
  flex-direction:row;
  text-align:center;
  background-color: #fff;
  width: 100%;
}
.tab-control-item{
  height: 40px;
  line-height: 40px;
  flex: 1;
  
  
}
.active span{
  border-bottom:solid 2px  var(--color-tint)
}

.tab-control-item span{
  padding: 5px;
}

.active {
  color: var(--color-tint)
}
</style>