import homePage from '../pages/homePage/homePage.vue'
import category from '../pages/category/category.vue'
import worth from '../pages/worth/worth.vue'
import shoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import personal from '../pages/personal/personal.vue'

export default [
  {path:"/homePage",component:homePage},
  {path:"/category",component:category},
  {path:"/worth",component:worth},
  {path:"/shoppingCart",component:shoppingCart},
  {path:"/personal",component:personal},
  {path:"/",redirect:"/homePage"}
]