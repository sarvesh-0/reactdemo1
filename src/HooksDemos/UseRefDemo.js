import { useRef } from "react";

export default function UseRefDemo(){
    const inputRef = useRef();
    const handleClick =()=>{
        let x = inputRef.current.value
        alert(x+" is your Favraite Programming Language")
    }

    return(
        <>
        <div>
            <h3>UseRef Hook Demo</h3>
            Enter Favorite Programming Language : <input type="text" ref={inputRef}></input>
            <button onClick={handleClick}>Click Here</button>
        </div>
        </>
    )
}