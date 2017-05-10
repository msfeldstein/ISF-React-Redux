import {
  SET_SHADER_TYPE,
  SWITCH_SHADER_TYPE,
  SHOW_VERTEX_SHADER,
  SHOW_FRAGMENT_SHADER
} from '../actions/editor-state'

export default (state = {selectedTab: SHOW_FRAGMENT_SHADER}, action) => {
  switch (action.type) {
    case SWITCH_SHADER_TYPE:
      let next = state.selectedTab === SHOW_FRAGMENT_SHADER
        ? SHOW_VERTEX_SHADER : SHOW_FRAGMENT_SHADER
      return Object.assign({}, state, {
        selectedTab: next
      })
    case SET_SHADER_TYPE:
      console.log("I'm trying to set shader type", action.selectedTab)
      return Object.assign({}, state, {
        selectedTab: action.selectedTab
      })
    default:
      return state;
  }
}