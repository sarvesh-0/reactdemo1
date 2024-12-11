import React from 'react'
import Test1 from './Test1'
import Test2 from './Test2'

export default function ConditionTest1(props){
    let var1 = props.var1
    if(var1=="t1"){
        return(
            <>
            <p>This is Condition Test 1</p>
            <Test1></Test1>
            </> 
        )
    }
    else{
        return(
            <>
            <p>This is Condition Test 1</p>
            <Test2></Test2>
            </> 
        )
    }
}