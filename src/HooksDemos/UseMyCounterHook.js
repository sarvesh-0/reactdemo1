import React from 'react'
import useCounter from "./MyCounterHook";

export default function UseMyCounterHook(){
    const{value, increment, decrement, reset} = useCounter(0)
    return(
        <div>
            <p>Counter <span>Current Value</span> is {value}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}