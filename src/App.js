import Button from 'react-bootstrap/Button'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'

import { incrementAction, decrementAction } from './actions'

// for connecting a component in a two-way data binding with the redux store
// we need two functions: mapStateToProps and mapDispatchToProps
// mapStateToProps will decide which parts of the global state our component will receive
// mapDispatchToProps will decide which actions we're capable of dispatching from this component

// const mapStateToProps = (state) => ({
//   myOwnCounterProp: state.count,
// })
// const mapStateToProps = (state) => ({
//   // every key of the object you're returning from mapStateToProps
//   // is going to be a PROP for you component
//   count: state.count,
// })

const mapStateToProps = (state) => state

// mapStateToProps is a function with the whole redux state as the argument, that is supposed
// to return an object; each key of this object will be an addition prop our component
// will be enriched with

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => {
    dispatch(incrementAction())
    // dispatch({
    //   type: 'INCREMENT',
    // })
  },
  decreaseCounter: () => {
    dispatch(decrementAction())
  },
})
// every key of the object you're returning from mapDispatchToProps will be a prop for your component
// usually these properties are METHODS, and they can receive the dispatch capability from redux
// in order to dispatch an action and trigger a change

const App = ({ count, increaseCounter, decreaseCounter }) => {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={increaseCounter}>+</Button>
        <div>{count}</div>
        <Button onClick={decreaseCounter}>-</Button>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
