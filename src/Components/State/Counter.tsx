import { useReducer } from 'react'

type CounterState = {
    count: number
}

type CounterAction = {
    type: 'INCREMENT'| 'DECREMENT',
    action: number
}
 const initialState = {
     count: 0
 }

 const reducer=(state: CounterState, action: CounterAction)=>{
     switch( action.type){
         case 'INCREMENT' : {
             return { count: state.count + action.payload}
         }
         case 'DECREMENT': {
             return { count: state.count - action.payload}
         }
         default: {
             return state
         }
     }
 }
const Counter = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <>
          Count: {state.count}
          <button type='button' onClick={()=> dispatch({ type:'INCREMENT', payload: 10})}>
              Increment by 10
          </button>
          <button type='button' onClick={()=> dispatch({ type:'DECREMENT', payload: 10})}>
              Increment by 10
          </button>

      </>
  )
}

export default Counter
