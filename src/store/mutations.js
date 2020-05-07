import {GETKINGKONGLIST} from './mutation_type'

export default {
  [GETKINGKONGLIST](state,kingKongList){
    state.kingKongList = kingKongList
  }
}