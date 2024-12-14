//Controled form using states in class Component

import { Component } from "react";

export default class ControlledFormCC extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            qualification:'',
            result:''
        }
    }

    handleSubmit=(e)=>{
        this.setState({result:"Name-"+this.state.name+" "+"Qualifications-"+ this.state.qualification+" "+"Result-"+this.state.result})
        e.preventDefault()
    }

    handleChangeName=(event)=>{
        this.setState({name:event.target.value})
    }

    getQualification=(event)=>{
        this.setState({qualification:event.target.value})
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <lable for="name">Enter Name :</lable>
                <input type="text" id="txtname" name="custname" onChange={this.handleChangeName}></input><br></br>
                <lable for="qual">Qualification:</lable>
                <input type="text" id="txtqual" name="qual" onChange={this.getQualification}></input><br></br>
                <button>Submit</button>
            </form>
            <p>{this.state.result && <b>{this.state.result}</b>}</p>
            </>
        )
    }
}