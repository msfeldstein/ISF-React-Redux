import * as controls from '../actions/controls'

export default (state = {values: {}}, action) => {
  let newValues = undefined;
  switch (action.type) {
    case controls.SET_INPUT_VALUE:
      newValues = Object.assign({}, state.values)
      newValues[action.name] = action.value
      return Object.assign({}, state, {
        values: newValues
      })
    case controls.SHADER_COMPILED:
      if (!action.valid) return state;
      newValues = {}
      let oldInputs = state.values;
      let newInputs = action.model.inputs;
      newInputs.forEach((i) => {
        let value = oldInputs[i.NAME]
        if (value === undefined) {
          value = i.DEFAULT
        }
        newValues[i.NAME] = value
      })
      return Object.assign({}, state, {
        values: newValues
      })
    default:
      return state;
  }
}