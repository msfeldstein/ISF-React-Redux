export const PLAY_SKETCH = "PLAY_SKETCH"
export const playSketch = (sketch) => {
  return {
    type: PLAY_SKETCH,
    sketch: sketch
  }
}
