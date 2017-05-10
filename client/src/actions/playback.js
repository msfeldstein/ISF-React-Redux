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
