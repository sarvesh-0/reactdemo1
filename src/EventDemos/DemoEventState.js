import { Component } from "react";

export default class DemoEventState extends Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
    }

    handleChange=()=>{
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <div>
                <p>You Clicked {this.state.count} times</p>
                <button onClick={this.handleChange}>Click Me</button>
            </div>
        )
    }
}