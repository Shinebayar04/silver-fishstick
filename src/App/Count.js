import React, { useState } from 'react'
const Count = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => {
       let newCount= count +1 
       // count = newCount
       setCount(newCount)
    }
    const ondecrement = () => {
       let newCount=  count -1
       setCount(newCount)
    }
    const onreset = () => {
        let newCount=  0
       setCount(newCount)
    }
    return ( 
        <div> <p>{count}</p>
            <button onClick={onIncrement} className='inc'>Increment</button>
            <button onClick={ondecrement} className='dec'>Decrement</button>
            <button onClick={onreset} className='res'>Reset</button>
        </div>
     );
}
export default Count;
