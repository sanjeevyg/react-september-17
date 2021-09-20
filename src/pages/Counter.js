import React from 'react';
import {INCREMENT, DECREMENT} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    
    const increaseCount = () => {
        const nr = 5
        dispatch(INCREMENT(nr))
      } 
      
      const decreaseCount = () => {
        const nr = 1
        dispatch(DECREMENT(nr))
      }

    return (
        <div>
          <button onClick={increaseCount}>INCREASE</button>
          <h1>{count}</h1>
          <button onClick={decreaseCount}>DECREASE</button>
        </div>
    )
}
