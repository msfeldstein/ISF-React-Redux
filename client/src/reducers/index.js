import {combineReducers} from 'redux';

import api from './api'
import controls from './controls'
import editor from './editor-state'
import playback from './playback'

const rootReducer = combineReducers({
  api,
  controls,
  editor,
  playback,
})

export default rootReducer;