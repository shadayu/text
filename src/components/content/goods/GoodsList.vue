<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.index" :goodsItem="item" @fuckYou="fuckYou"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue'


export default {
  components: {
    'goods-list-item': GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    
  },
  methods: {
    fuckYou () {
      let num = 0
      for(let i of this.goods) {
        num += 1
        i.iid = num
      }
    }
  }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
  }
</style>