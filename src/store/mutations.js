import * as types from './mutation-types'
const mutations = {
  [types.SET_USER_ID] (state, user_id) {
    state.user_id = user_id
  }
}

export default mutations