import React from 'react'
import SecondHello from './Second';
export default function FirstHello(){
    let name = "Nami San"
    let msg = "Hello"
    return(
        <>
        <h3>Welcome to First Function Component ...</h3>
        <h4>Orewa Monkey D Luffy Kaizoku oni naru otoko da</h4>
        <SecondHello nme={name}  msg={msg}></SecondHello>
        </>
    );
}