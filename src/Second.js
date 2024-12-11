import React from 'react'
const SecondHello =(props)=>{
    let name = props.nme
    let msg = props.msg
    return( 
    <>
        <h4>Welcome to Second Function Component</h4>
        <h5>{msg} {name} ........</h5>
    </>
    )
}
export default SecondHello