<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="homepage" @click="$router.replace('homePage')">
        <i class="iconfont icon-shangchengicon21"></i>
      </div>
      <span class="txt">值得买</span>
      <div>
        <i class="iconfont icon-fangdajing"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="logoWrap">
      <img class="logo" src="./logo.png" alt="">
    </div>
    <div class=""></div>
  </div>
</template>
<script>
  export default{
    name:"EmailLogin"
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 88px
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
  .logoWrap
      width 100%
      height 90px
      padding 160px 0 232px 0
      .logo
        display block
        margin auto
        width 268px
        height 90px
</style>