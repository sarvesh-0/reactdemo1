import React from 'react'
import StringHook from './StringHook'

export default function UseStringHook(){
    const{string, uperCase, lowerCase, len} = StringHook("Sarvesh Teware")
    return(
        <div>
            <p>Current String : -- <i>{string}</i></p>
            <button onClick={uperCase}>UpperCase</button>
            <button onClick={lowerCase}>LowerCase</button>
            <button onClick={len}>Length</button>
        </div>
    )
}