import {PLAY_SKETCH} from '../actions/playback'

export default (state = {}, action) => {
  switch (action.type) {
    case PLAY_SKETCH:
      return Object.assign({}, state, {
        currentSketch: action.sketch
      })
    default:
      return state;
  }
}