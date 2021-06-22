import { initialState } from '../store'
// DRY
// DON'T REPEAT YOURSELF

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // we'll always have a type to look for
    // it is the only mandatory property of any action
    case 'INCREMENT':
      // the reducer goal is to COMPUTE the new application state
      return {
        ...state,
        // the spread operator ... will carry over every existing pair of key/values
        // so every property you currently have in the current state
        count: state.count + 1,
        // usually every case covers a single atomic operation
      }
    default:
      return state
  }
}
