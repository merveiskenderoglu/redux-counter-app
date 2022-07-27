import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incraseByAmount} from '../redux/counter/counterSlice';
import { useState } from 'react';


function Counter() {
  const countValue = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(3);
    
  return (    
    <div style= {{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', height:'100vh'}}>
      {countValue}
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>Increase</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <br />
      <input onChange={(e) => setAmount(e.target.value)} value={amount} type="number" />
      <button onClick = {() => dispatch(incraseByAmount(amount))}>Increase By Amount</button>
    </div>
  )
}

export default Counter;