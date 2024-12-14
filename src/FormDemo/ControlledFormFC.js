import { useState } from "react";

export default function ControlledFormFC(){
    const[fullName, setFullName]=useState('')
    const[degree, setDegree]=useState('')
    const[result, setResult]=useState('')
    const onChangeName=(event)=>{setFullName(event.target.value)}
    const onChangeDegree=(e)=>{setDegree(e.target.value)}
    const getResult=(e)=>{
        let str = "Name -"+fullName+" Degree -"+degree
        setResult(str)
        e.preventDefault()
    }

    return(
        <>
        <div>
            <form onSubmit={getResult}>
                <label>Full Name </label><br></br>
                <input type="text" name="txtnm" onChange={onChangeName}></input><br></br>
                {/* 8505963713 */}
                <lable>Qualifications</lable><br></br>
                <input type="text" iname="txtQual" onChange={onChangeDegree}></input><br></br>
                <button type="submit">Submit Form</button>
            </form>
        </div>
        <p>{result}</p>
        </>
    )
}