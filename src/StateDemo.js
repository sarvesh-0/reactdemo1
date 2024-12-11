import React, { Component } from 'react'
export default class StateDemo extends Component{
    constructor(props){
        super(props)
        this.state={
            fullName:"Rudransh",email:"rudra@gmail.com",qualification:"MS-CSE"
        }
    }
    render(){
        return(
            <>
            <div>
                <h3>Working with states in class components</h3>
                <p>Name           : {this.state.fullName}</p>
                <p>Email          : {this.state.email}</p>
                <p>Qualifications : {this.state.qualification}</p>
            </div>
            </>
        )
    }
}