import React, { useState } from "react";
import  './CounterWithHooks.scss'

export default function CounterWithHooks(props) {
  const [count, setCount] = useState(props.count);

  return (
    <div>
      <p>{count}</p>
      <button className='buttonCounter__container' onClick={() => setCount(count + 1)}>+</button>
      <button className='buttonCounter__container' onClick={() => setCount(count - 1)}>+</button>
      <button className='buttonCounter__container' onClick={() => setCount(count / 2)}>+</button>
      <button className='buttonCounter__container' onClick={() => setCount(count * 2)}>+</button>
      <button className='buttonCounter__container' onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
