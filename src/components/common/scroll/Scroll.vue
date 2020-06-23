<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default : 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //创建BScroll对象,并赋予属性
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    //监听滚动的位置
    this.scroll.on ('scroll', (position) => {
      this.$emit('scroll',position)
    })
    //监听上拉事件
    this.scroll.on ('pullingUp',() => {
      this.$emit('pullingUp')
    })

    //this.scroll.refresh()
  },

  methods: {
    scrollTo(x,y,time) {
      this.scroll.scrollTo (x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll.refresh()
    }
  }
};
</script>

<style>
  /* .content {
    height: 5000px;
  } */
</style>