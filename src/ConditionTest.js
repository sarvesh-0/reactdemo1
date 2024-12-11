import React from 'react'
import Test1 from './Test1'
import Test2 from './Test2'

export default function ConditionTest(props){
    let var1 = props.var1
    return(
        <>
        <h3>Condition test</h3>
        {
            (var1=="t1")&&(<Test1></Test1>)
        }
        {
            (var1=="t2")&&(<Test2></Test2>)
        }

        {
        (var1=="t1")?
        (<Test1></Test1>):
        (<Test2></Test2>)
        }
        </> 
    )
}