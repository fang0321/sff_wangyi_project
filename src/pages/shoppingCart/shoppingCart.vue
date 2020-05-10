<template>
  <div class="shoppingCart">
    <div class="header">
      <div class="left">

      </div>
      <div class="rigth"></div>
      <div class="rigth"></div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"ShoppingCart",
    data(){
      return {
        isLogin:false
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .shoppingCart
    width 100%
    height 100%
    .header
      position fixed
      top 0
      left 0
      width 100%
      height 88px
      padding 0 30px
      box-sizing border-box
      background-color pink
      .left
        width 108px
        height 87px
        background-color #dfa

</style>