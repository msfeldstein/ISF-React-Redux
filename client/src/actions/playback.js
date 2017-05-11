export const PLAY_SKETCH = "PLAY_SKETCH"
export const playSketch = (sketch) => {
  return {
    type: PLAY_SKETCH,
    sketch: sketch
  }
}

export const NEW_SKETCH = "NEW_SKETCH"
export const newSketch = () => {
  return {
    type: NEW_SKETCH
  }
}

export const UPDATE_SOURCE = "UPDATE_SOURCE"
export const updateSource = (shaderType, src) => {
  return {
    type: UPDATE_SOURCE,
    shaderType,
    src
  }
}

export const SHADER_COMPILED = "SHADER_COMPILED"
export const shaderCompiled = (valid, error, lineNumber) => {
  return {
    type: SHADER_COMPILED,
    valid,
    error,
    lineNumber,
  }
}
