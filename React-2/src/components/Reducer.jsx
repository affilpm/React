import React, { useReducer } from 'react'

const Reducer = () => {

  const reducer = (state, action)=> {

      switch (action.type){
          case 'increment':{
              return state+1
          };
          case 'decrement':{
              return state-1
          }
          default:{
              return state
          }
      }
  }

  const [state,dispatch] = useReducer(reducer,0)  
  return (
    <div>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>

      {state}
    </div>
  )
}

export default Reducer
