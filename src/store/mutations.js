import {GETKINGKONGLIST,GETFOCUSLIST} from './mutation_type'

export default {
  [GETKINGKONGLIST](state,kingKongList){
    state.kingKongList = kingKongList
  },
  [GETFOCUSLIST](state,focusList){
    state.focusList = focusList
  }
}