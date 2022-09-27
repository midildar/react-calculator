import React, { useState } from 'react'

const Counter = () => {

    const [counter,setcounter] = useState(0)

    const increment = () => 
    {
        setcounter(
            (previousCount) => previousCount + 1
        );
    }
    const decrement = () => 
    {
        setcounter(
            
            (previousCount) => previousCount <= 0 ? 0 : previousCount - 1
        );
    }
    
  return (
    <div>
    <p>Bismillah muslim tasbi Counter</p>
    <button onClick={decrement}>-</button>
    <span>
     {counter}    
    </span>
    <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter