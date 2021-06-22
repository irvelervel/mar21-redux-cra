import { createStore } from 'redux'
import { mainReducer } from '../reducers'

// this is going to be the default or initial state for our WHOLE application
// every time the app starts or the browser refreshes, this will be the initial redux state
export const initialState = {
  count: 0,
}

// createStore tipically takes 3 arguments:
// 1) the reducer
// 2) the initial state for the application
// 3) an enhancer function, now we're using it to allow our devtool extension
const configureStore = () =>
  createStore(mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configureStore
