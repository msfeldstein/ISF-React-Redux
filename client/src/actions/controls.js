export const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
export const setInputValue = (name, value) => {
  return {
    type: SET_INPUT_VALUE,
    name,
    value
  }
}

export const SHADER_COMPILED = 'CONTROLS_COMPILED_SHADER'
export const shaderCompiled = (model, valid) => {
  return {
    type: SHADER_COMPILED,
    model,
    valid
  }
}