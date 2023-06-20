import React from 'react'
import {useSelector , useDispatch} from 'react-redux'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.toggle)

  const dispatch = useDispatch()
  const handleIncrement= () => {
    dispatch({type:'INCREMENT'});
  }
  const handleDecrement= () => {
    dispatch({type:'DECREMENT'});
  }
  const handleToggle= () => {
    dispatch({type:'TOGGLE'});
  }
  return (
    <div>
      {show && <h1>the value starts from count : {counter}</h1>}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleToggle}>show or hide value</button>
    </div>
  )
}

export default Counter
