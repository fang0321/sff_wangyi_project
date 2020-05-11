<template>
  <div class="worth">
    <div class="header">
      <div class="homepage">
        <i class="iconfont icon-shangchengicon21"></i>
      </div>
      <span class="txt">值得买</span>
      <div>
        <i class="iconfont icon-fangdajing" @click="$router.replace('search')"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="swiperWrap">
      <div class="swiperTitle">
        <img class="worthBg" src="./worthBg.png" alt="">
        <img class="logo" src="./worthLogo.png" alt="">
        <div class="text">严选好物&nbsp;用心生活</div>
      </div>
      <div class="swiperContent">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in worthSwiper.slice(0,Math.ceil(worthSwiper.length/2))" :key="index">
              <div class="top">
                <img class="Img" :src="item.picUrl" alt="">
                <span class="tit">{{item.mainTitle}}</span>
                <span class="txt">{{item.viceTitle}}</span>
              </div>
              <div class="bottom" v-if="worthSwiper[index+Math.ceil(worthSwiper.length/2)]">
                <img class="Img" :src="worthSwiper[index+Math.ceil(worthSwiper.length/2)].picUrl" alt="">
                <span class="tit">{{worthSwiper[index+Math.ceil(worthSwiper.length/2)].mainTitle}}</span>
                <span class="txt">{{worthSwiper[index+Math.ceil(worthSwiper.length/2)].viceTitle}}</span>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="waterFull"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
  export default{
    name:"Worth",
    data(){
      return {
        worthSwiper:[]
      }
    },
    async mounted(){
      let body = await this.$http.shop.getWorthSwiper("/getWorthSwiper")
      if(body.code === '200' && body.data.navList){
        this.worthSwiper = body.data.navList
      }

       this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          slidesPerView : 4,
          pagination: { //分页器
            el: '.swiper-pagination',
          }
        })
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .worth
    width 100%
    padding-top 100px
    background-color #eeeeee
    .header
      width 100%
      height 100px
      background-color #fff
      padding 0 26px 0 24px
      box-sizing border-box
      position fixed
      top 0
      left 0
      z-index 10
      border-bottom 1px solid rgb(217, 217, 217);
      display flex
      align-items center
      justify-content space-between
      .homepage
        width 46px
        height 100px
        line-height 100px
        .icon-shangchengicon21
          font-size 50px
      .txt
        font-size 36px
        width 150px
        height 40px
        line-height 40px
        text-align center
        margin-left 90px
      .icon-fangdajing
        width 46px
        height 100px
        line-height 100px
        font-size 50px
        margin-right 30px
      .icon-gouwuche
        width 46px
        height 100px
        line-height 100px
        font-size 60px
    .swiperWrap
      position relative
      width 100%
      height 685px
      .swiperTitle
        position relative
        width 100%
        height 524px
        .worthBg
          width 100%
          height 100%
        .logo
          position absolute
          left 12px
          top 30px
          width 130px
          height 69px
        .text
          position absolute
          left 146px
          top 48px
          width 249px
          height 44px
          font-size 30px
          color #fff
      .swiperContent
        position absolute
        left 20px
        bottom 0
        width 710px
        height 540px
        border-radius 12px
        overflow hidden
        background-color #fff
        .swiper-container
          width 100%
          height 540px
          .swiper-wrapper 
            width 100%
            height 540px
            .swiper-slide
              float left
              width 177px 
              height 540px
              padding 36px 3px 3px
              box-sizing border-box
              .top
                width 168px
                height 201px
                display flex
                flex-direction column
                align-items center
              .bottom
                margin-top 28px
                width 168px
                height 201px
                display flex
                flex-direction column
                align-items center
              .Img
                width 120px
                height 120px
              .tit 
                width 168px
                height 40px
                margin-top 8px
                line-height 40px
                text-align center
                color #333
                font-family 'PingFang-SC-Bold'
                font-weight bold
                font-size 28px
              .txt
                font-family 'PingFangSC-Regular'
                width 168px
                height 30px
                line-height 30px
                text-align center
                color #999
          .swiper-pagination
            /deep/.swiper-pagination-bullet
              width 40px
              height 4px
              background-color #D9D9D9
              opacity 1
            /deep/.swiper-pagination-bullet-active
              width 40px
              height 4px
              background-color #DD1A21
              opacity 1
            
    .waterFull
      width 100%
      background-color pink
</style>