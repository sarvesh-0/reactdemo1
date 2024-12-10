import React from 'react'

export default function Welcome(props){
    let emp=props.emp
    return(
        <>
        <h3>Orewa {props.name} the {props.h}</h3>
        <h4>Object Details are : ----  {emp.empid}    {emp.empname}   {emp.salary}</h4>
        </>
    )
}