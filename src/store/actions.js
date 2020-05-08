import {GETKINGKONGLIST,GETFOCUSLIST} from './mutation_type'
import http from '../http'

export default {
  async [GETKINGKONGLIST] (store){
    const body = await http.shop.getKingKongList()
    if(body){
      store.commit(GETKINGKONGLIST,body)
    }
  },
  async [GETFOCUSLIST] (store){
    const body = await http.shop.getFocusList()
    if(body){
      store.commit(GETFOCUSLIST,body)
    }
  }
}