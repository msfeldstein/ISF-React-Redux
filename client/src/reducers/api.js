import * as types from '../actions/action-types';
import ISF from 'interactive-shader-format';

const parser = new ISF.Parser();

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POPULAR:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.FETCH_POPULAR_SUCCESS:
      // We only want to use v2 sketches for now.
      const sketches = action.sketches.filter((s) => {
        parser.parse(s.raw_fragment_source, s.raw_vertex_source)
        return parser.isfVersion === 2;
      })
      return Object.assign({}, state, {
        isFetching: false,
        sketches: sketches
      })
    default:
      return state;
  }
}