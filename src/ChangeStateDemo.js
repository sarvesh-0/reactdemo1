import React, { Component } from 'react'

export default class ChangeStateDemo extends Component{
    constructor(props){
        super(props)
        this.state={favcolor:"White"};
    }
    componentDidMount(){
        this.setState({favcolor:"Blue"})
    }
    render(){
        return(
        <>
            <div>
                <h3>Changing Component State Values</h3>
                <h1>We have noted your Favorite Color is {this.state.favcolor}</h1>
            </div>
        </>
        )
    }
}