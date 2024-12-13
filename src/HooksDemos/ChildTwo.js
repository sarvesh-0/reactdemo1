import React from 'react'
import ChildThree from "./ChildThree";

export default function ChildTwo(){
    return(
        <>
        <h1>ChildTwo Component Renders ChildThree</h1>
        <ChildThree></ChildThree>
        </>
    )
}