import { useEffect, useState } from "react";

export default function UseEffectDemo(){
    const [count,setCount] = useState(0)
    const [calculation, setCalculation]=useState(0)

    useEffect(()=>{setCalculation(()=>count*2);},[count])
    //useEffect gets triggered whenever the count variable value changes

    return(
        <>
            <h3>UseEffect Hook</h3>
            <p>Count : {count}</p>
            <button onClick={()=>setCount((c)=>c+1)}>Increment</button>
            <p>Calculation: {calculation}</p>
        </>
    )
}