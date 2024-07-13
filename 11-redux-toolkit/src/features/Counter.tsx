import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {RooteState} from '../app/store';
import {increment, decrement, incrementByValue} from './counter/counterSlice'

const Counter = () => {
   
  const cnt = useSelector((state: RooteState) => state.counterSlice.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByValue(12))}>Decrement</button>
    </div>
  )
}


export default Counter;