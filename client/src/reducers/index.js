import {combineReducers} from 'redux';
import api from './api'
import playback from './playback'

const rootReducer = combineReducers({
  api,
  playback
})

export default rootReducer;