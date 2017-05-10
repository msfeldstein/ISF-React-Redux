export const SWITCH_SHADER_TYPE = "SWITCH_SHADER_TYPE"
export const SET_SHADER_TYPE = "SET_SHADER_TYPE"
export const SHOW_VERTEX_SHADER = "VERTEX_SHADER"
export const SHOW_FRAGMENT_SHADER = "FRAGMENT_SHADER"
export const switchShader = (selectedTab) => {
  return {
    type: SWITCH_SHADER_TYPE
  }
}
export const setShaderType = (shader) => {
  return {
    type: SET_SHADER_TYPE,
    selectedTab: shader
  }
}
