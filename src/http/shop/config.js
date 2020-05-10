export default {
  // name:"Shop",
  api:{
    // 主页导航 、商品分类
    getKingKongList:{
      url:"/getKingKongList",
      method:"get",
      // toast:true
    },
    // 主页轮播图
    getFocusList:{
      url:"/getFocusList",
      method:"get"
    },
    // 主页服务栏
    getPolicyDescList:{
      url:"/getPolicyDescList",
      method:"get"
    },
    // 主页类目热销榜
    getCategoryList:{
      url:"/getCategoryList",
      method:"get"
    },
    //分类页面---左边导航
    getCateNavDatas:{
      url:"/getCateNavDatas",
      method:"get"
    },
    //分类页面---右边内容
    getCateLists:{
      url:"/getCateLists",
      method:"get"
    },
    ////值得买轮播
    getWorthSwiper:{
      url:"/getWorthSwiper",
      method:"get"
    }
  }
}
