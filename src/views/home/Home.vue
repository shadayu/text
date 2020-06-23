<template>
  <div dir="home">
    <div class="nav-fixed">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
    </div>
    <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl1" class="tab-control-top" v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";

import HomeRecommend from "./childComps/HomeRecommend";

import FeatureView from "./childComps/FeatureView";

import TabControl from "components/content/TabControl/TabControl";

import GoodsList from "components/content/goods/GoodsList";

import { homeData, homeGoods } from "network/home.js";
import {debounce} from "../../common/utils"

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

export default {
  components: {
    "nav-bar": NavBar,
    "home-swiper": HomeSwiper,
    "home-recommend": HomeRecommend,
    "feature-view": FeatureView,
    "tab-control": TabControl,
    "goods-list": GoodsList,
    "scroll": Scroll,
    "back-top": BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      //数据模型
      goods: {
        "0": { pageSize: 10, list: [], tabName: "流行" },
        "1": { pageSize: 10, list: [], tabName: "精选" },
        "2": { pageSize: 10, list: [], tabName: "新款" }
      },
      choose: "0",
      isShowBackTop: false,
      numberOfTime: 0,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.choose].list;
    },
    indexType() {
      return this.$refs.tabControl2.currentIndex;
    }
  },
  created() {
    this.qingQiu1();
    this.qingQiu2(0, 10);
    this.qingQiu2(1, 10);
    this.qingQiu2(2, 10);
    
  },

  mounted() {
    setTimeout(() => {
      console.log(this.goods[0].list, this.goods[0].pageSize);
    }, 1000);
    //监听item中图片的加载完成
    const refresh = debounce(this.$refs.scroll.refresh,50)//---------加载节流防抖函数
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
    //拿到tabControl的位置
    //this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    // this.$bus.$on('itemImageLoad', () => {
    //   this.$refs.scroll.refresh()
    // })

    // window.addEventListener('scroll',this.fuck)
  },

  activated () {
    //-----------------激活内容后恢复到原来位置
    //this.$refs.scroll.scrollTo(0,this.saveY,0)
    //-----------------激活内容后进行一遍刷新
    //this.$refs.scroll.refresh()
  },

  deactivated () {
    //-------------------离开内容区域后保存离开后的位置
    //this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    //监听轮播图片事件
    swiperImageLoad () {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    //这东西太神奇了...封装节流防抖函数--------------------
                
    //----------------------------------------------------
    tabClick(index) {
      this.choose = String(index);
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    // navscroll() {
    //   if (this.scrollTop != 0) {
    //     this.setAttribute("position","fixed");
    //   }
    // }

    // fuck() {

    //    if (window.scrollY != 0) {
    //      let x = document.queryselector('.nav-fixed')
    //     x.style.position="fixed"
    //   }
    //   console.log(window.scrollY);

    // }

    qingQiu1() {
      homeData().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    qingQiu2(type, pageSize) {
      homeGoods(1, pageSize).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.data[type].item);
        this.goods[type].pageSize += 10;
        this.$refs.scroll.finishPullUp();
      });
    },

    backClick() {
      //this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    
    contentScroll(position) {
      //判断backTop小图标是否显示
      this.isShowBackTop = -position.y > 1000;
      //决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    loadMore() {
      this.numberOfTime += 10;
      let pageSizeOne = this.goods[this.indexType].pageSize;
      console.log("pageSizeOne: " + pageSizeOne);

      homeGoods(1, pageSizeOne).then(res => {
        console.log(res);

        //let residues = res.data.data[this.indexType].item.splice(0,this.numberOfTime);
        let residues = res.data.data[this.indexType].item
        console.log("residues.length: " + residues.length);
        console.log(residues);
        let residuesPro = residues.splice(0,this.numberOfTime)
        console.log(residuesPro)

        this.goods[this.indexType].list.push(...residues);    //卧槽!我真的是惊了,给我一惊雷!!!
        this.goods[this.indexType].pageSize += 10;
        this.$refs.scroll.finishPullUp();
        console.log("pageSize: " + this.goods[this.indexType].pageSize);
      });
      //this.goods[this.indexType].list.splice(0,this.numberOfTime)
      //this.qingQiu2(this.indexType,this.goods[this.indexType].pageSize)
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
}

.tab-control-top {
  position: absolute;
  z-index: 999;
}
.nav-fixed {
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 999;
}
.scroll-content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
}
</style>