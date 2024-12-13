import { Component } from "react";

export default class DemoEvent extends Component{
    constructor(props){
        super(props)
        this.state ={
            subject:""
        }
    }

    handelChange = event =>{
        this.setState({subject:event.target.value})
    }

    handleClick(){
        alert("You Clicked Button !")
    }

    render(){
        return(
            <>
            <div>
                <h4 style={{color:"#68cf48"}}>State handling</h4>
                <label>Enter Your Favorite Programming Language </label>
                <input placeholder="Enter Language here " onChange={this.handelChange}></input>
                <p><i>{this.state.subject}</i> is your Favorite Programming Language</p>
                <button onClick={this.handleClick.bind()}>Click Me</button>
            </div>
            </>
        )
    }
}