import { user_id } from "./getters";

import * as types from './mutation-types'
export const saveUserId = ({ commit, state }, user_id) => {
  commit(types.SET_USER_ID, user_id)
}