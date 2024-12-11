import React, { Component } from 'react'
export default class HelloWorld extends Component{

    fn= this.props.firstname
    s = this.props.student
    
    slist = this.props.studinput.map((stud)=><li>{stud}</li>)
    constructor(props){
        super(props)
    }
    render(){
        
        return (
            <>
                <h1>Hello World. This is First Class Component ..</h1>
                <h3>Welcome {this.fn}</h3>
                <p>StudName = {this.s.studname}</p>
                <p>Roll NO = {this.s.rollno}</p>

                <div>
                    <ul>{this.slist}</ul>
                </div>
            </>
        )
    }
}