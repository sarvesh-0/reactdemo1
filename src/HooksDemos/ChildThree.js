import React, { useContext } from 'react'
import { Context } from '../App'
export default function ChildThree(){
    const context = useContext(Context)
    return(
        <>
            <div style={{borderColor:'red', borderCollapse:'collapse'}}>
                <h4>Child Three Component </h4>
                <p>Shared Data is -- {context.data}</p>
            </div>
        </>
    )
}