<template>
  <div class="homePage">
    <!-- 顶部 -->
    <div class="header">
      <!-- 搜索 -->
      <div class="searchWrap">
        <a class="logo" href="##"></a>
        <div class="search" @click="$router.replace('search')">
          <i class="iconfont icon-fangdajing"></i>
          <span>搜索商品，共25353款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <!-- 导航 -->
      <div class="nav" :class="{pull:navPull}">
        <!-- 导航滑动 -->
        <div class="navScroll" ref="navScroll">
          <ul class="scroll" >
            <li class="navItem" :class="{active:navIndex === 0}" @click="changeActive(0)">
              <span class="txt">推荐</span>
            </li>
            <li @click="changeActive(index + 1)" class="navItem" :class="{active:index===navIndex - 1}" v-for="(navItem,index) in kingKongList" :key="index">
              <span class="txt">{{navItem.text}}</span>
            </li>
          </ul>
        </div>
        <!-- 全部频道 -->
        <div class="tabAlter">全部频道</div>
        <!-- 点击切换 -->
        <div class="toggleWrap">
          <!-- 模糊的部分 -->
          <div class="linear"></div>
          <div class="toggle iconfont" :class="navPull ? 'icon-xiala1':'icon-xiala'" @click="navPull = !navPull"></div>
        </div>
        <div class="moreCate">
          <div class="moreCateItem" :class="{active:navIndex===0}" @click="changeActive(0)">
            推荐
          </div>
          <div @click="changeActive(index + 1)" class="moreCateItem" :class="{active:navIndex===index + 1}" v-for="(item, index) in kingKongList" :key="index">
            {{item.text}}
          </div>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in focusList" :key="index">
            <img :src="item.picUrl" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 服务栏 -->
      <div class="serviceWrap">
        <ul class="service">
          <li class="serviceItem" v-for="(item, index) in PolicyDescList" :key="index">
            <img :src="item.icon" alt="">
            <span>{{item.desc}}</span>
          </li>
        </ul>
      </div>
      <!-- 商品分类 -->
      <div class="goodsCategoryWrap">
        <ul class="goodsCategory">
          <li class="goodsCategoryItem" v-for="(item, index) in kingKongList" :key="index">
            <a href="##">
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 优惠专区 -->
      <div class="discountsWrap">
        <div class="discounts">
          <a class="discountsImg" href="##"></a>
        </div>
      </div>
      <!-- 新人专享礼 -->
      <v-newPeopleGift></v-newPeopleGift>
      <!-- 类目热销榜 -->
      <v-hotSell></v-hotSell>
      <!-- 人气推荐 -->
      <v-recommend></v-recommend>
      <!-- 限时购 -->
      <v-timeLimitBuy></v-timeLimitBuy>
      <!-- 新品首发 -->
      <v-newProduct></v-newProduct>
      <!-- 商品模块 -->
      <v-shoppingModule></v-shoppingModule>
      <!-- 页脚部分 -->
      <div class="footer">
        页脚部分
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import "swiper/css/swiper.min.css"
  import newPeopleGift from '../../components/newPeopleGift/newPeopleGift'
  import hotSell from '../../components/hotSell/hotSell'
  import recommend from '../../components/recommend/recommend'
  import timeLimitBuy from '../../components/timeLimitBuy/timeLimitBuy'
  import newProduct from '../../components/newProduct/newProduct'
  import shoppingModule from '../../components/shoppingModule/shoppingModule'
  import {mapActions,mapState} from 'vuex'
  import {GETKINGKONGLIST,GETFOCUSLIST} from '../../store/mutation_type'
  export default{
    name:"HomePage",
    data(){
      return {
        navIndex:0,
        navPull:false,
        PolicyDescList:[]
      }
    },
    components:{
      "v-newPeopleGift":newPeopleGift,
      "v-hotSell":hotSell,
      "v-recommend":recommend,
      "v-timeLimitBuy":timeLimitBuy,
      "v-newProduct":newProduct,
      "v-shoppingModule":shoppingModule
    },
    async mounted(){
      await this[GETKINGKONGLIST]()
      await this[GETFOCUSLIST]()
      this.$nextTick(()=>{
        new BScroll(this.$refs.navScroll,{scrollX:true,click:true})
      })
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          loop:true, //循环模式
          pagination: { //分页器
            el: '.swiper-pagination',
          }
        })
      })
      this.PolicyDescList = await this.$http.shop.getPolicyDescList("/getPolicyDescList")
    },
    methods:{
      ...mapActions([GETKINGKONGLIST,GETFOCUSLIST]),
      changeActive(index){
        this.navIndex = index
      }
    },
    computed:{
      ...mapState(["kingKongList","focusList"])
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .homePage
    width 100%
    height 100%
    background-color #eee
    padding-top 148px
    padding-bottom 98px
    box-sizing border-box
    .header //顶部
      position fixed 
      z-index 99
      top 0
      left 0
      width 100%
      .searchWrap //搜索栏
        width 100%
        height 88px
        background-color #fff
        padding 16px 30px
        box-sizing border-box
        display flex
        align-items center
        .logo
          width 138px
          height 40px
          line-height 40px
          background-image url('./images/logo.png')
          margin-right 20px
          background-size cover
        .search
          width 442px
          height 56px
          background-color #ededed
          border-radius 8px
          display flex
          justify-content center
          align-items center
          .icon-fangdajing
            font-size 30px
            color gray
            font-weight 700
            margin-right 10px
          span 
            color #666
            font-size 28px
        .loginBtn
          width 72px
          height 40px
          border: 1px solid #DD1A21
          text-align: center;
          line-height 40px
          color: #DD1A21
          font-size 24px
          border-radius 8px
          margin-left 16px
      .nav //导航栏
        position relative
        width 100%
        height 60px
        line-height 60px
        .navScroll //导航滚动
          width 100%
          height 100%
          overflow hidden
          background-color #fff
          white-space nowrap
          .scroll
            display inline-block
            &>li:last-of-type
              margin-right 110px
          .navItem
            position relative
            display inline-block
            padding 0 16px
            margin-left 20px
            text-align center
            &:first-of-type
              margin-left 30px
            .txt
              font-size 28px
              color #333
            &.active
              .txt
                color #DD1A21
              &:after
                content ''
                position absolute
                left 0
                bottom 4px
                width 100%
                height 4px
                background-color #DD1A21
        .toggleWrap //右边切换部分
          position absolute
          top 0
          right 0
          height 100%
          display flex
          .linear //模糊的部分
            width 60px
            height 100%
            background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
          .toggle  //切换图标
            width 100px
            height 100%
            background-color #fff
            text-align center
            line-height 60px
            &.icon-xiala
              font-size 60px
              color #9F9E9E
            &.icon-xiala1
              font-size 60px
              color #9F9E9E
        .tabAlter
          display none
          position absolute
          left 0
          top 0
          width 100%
          height 100%
          background-color #fff
          font-size 28px
          color #333
          margin-left 20px
        .moreCate
          position absolute
          left 0
          top 60px
          display none
          background-color #fff
          width 100%
          z-index 20
          // height 288px
          padding-top 24px
          box-sizing border-box
          .moreCateItem
            position relative
            float left
            width 150px
            height 56px
            text-align center
            line-height 56px
            border: 1px solid #CCC
            margin 0 0 40px 30px
            border-radius: 5px
            &.active
              border: 1px solid #DD1A21;
              color: #DD1A21;
        &.pull
          .tabAlter
            display block
          .moreCate
            display block

    .content //内容区
      width 100%
      height 100%
      overflow auto
      .swiper-container //轮播图
        width 100%
        height 296px
        overflow hidden
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            img
              width 100%
              height auto
      .serviceWrap //服务栏
        width 100%
        height 72px
        background-color #fff
        .service
          width 100%
          height 100%
          padding 0 30px
          box-sizing border-box
          display flex
          align-items center
          justify-content space-around
          .serviceItem
            img 
              display inline-block
              width 32px
              height 32px
              vertical-align middle
              margin-right 8px
            span 
              vertical-align middle
      .goodsCategoryWrap //商品分类
        width 100%
        height 372px
        background-color #fff
        .goodsCategory
          overflow hidden
          .goodsCategoryItem
            width 110px
            height 156px
            margin 10px 20px 9px 20px
            float left
            a
              width 110px
              height 110px
              display flex
              flex-direction column
              align-items center
              img
                width 100%
                height 100%
              span 
                margin-top 10px
                font-size 24px
                color rgb(51, 51, 51)
      .discountsWrap  //优惠专区
        width 100%
        height 240px
        background-color #cbf
        .discounts
          width 100%
          height 100%
          .discountsImg
            width 100%
            height 100%
            background-image url('./images/discounts.gif')
            background-size 100%
    .footer
      width 100%
      height 244px
      background-color #414141
      color #fff
</style>