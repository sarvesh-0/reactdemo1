import { useState } from "react";

export default function UseStateDemo(props){
    const [message,setMessage] = useState('Initial message ....!!!!')
    const messageHandler=()=>{
        setMessage("Now the value of the message variable is Changed ..")
    }
    return(
        <>
        <div>
            <h3>Working with State in FC using UseState hook</h3>
            <p>State variable value -{message}</p>
            <button onClick={messageHandler}>Click It</button>
        </div>
        </>
    )
}