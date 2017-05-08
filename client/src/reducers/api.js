import * as types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_POPULAR:
      console.log("Loading pop")
      return Object.assign({}, state, {
        popular: [{
          name: 'blur',
          id: 1
        }, {
          name: 'grayscale',
          id: 2
        }, {
          name: 'fractal',
          id: 3
        }]
      })
    default:
      return state;
  }
}