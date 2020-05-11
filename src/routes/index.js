import homePage from '../pages/homePage/homePage.vue'
import category from '../pages/category/category.vue'
import worth from '../pages/worth/worth.vue'
import shoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import personal from '../pages/personal/personal.vue'
import login from '../pages/login/login.vue'
import emailLogin from '../pages/emailLogin/emailLogin.vue'
import search from '../pages/search/search.vue'

export default [
  {path:"/homePage",component:homePage},
  {path:"/category",component:category},
  {path:"/worth",component:worth},
  {path:"/shoppingCart",component:shoppingCart},
  {path:"/personal",component:personal},
  {path:"/login",component:login},
  {path:"/emailLogin",component:emailLogin},
  {path:"/search",component:search},
  {path:"/",redirect:"/homePage"}
]