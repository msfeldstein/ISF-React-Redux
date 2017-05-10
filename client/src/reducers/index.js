import {combineReducers} from 'redux';
import api from './api'
import editor from './editor-state'
import playback from './playback'

const rootReducer = combineReducers({
  api,
  editor,
  playback,
})

export default rootReducer;