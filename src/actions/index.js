// this is called an Action Creator
// a function returning an action (so a JS object)
export const incrementAction = () => ({
  type: 'INCREMENT',
})

export const decrementAction = () => ({
  type: 'DECREMENT',
})
