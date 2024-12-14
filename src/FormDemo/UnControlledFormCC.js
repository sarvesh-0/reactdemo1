import React, { Component } from "react"

export default class UncontrolledFormCC extends Component{
    constructor(props){
        super(props)
        this.nameref = React.createRef()
        this.cmref= React.createRef()
        this.updateSubmit = this.updateSubmit.bind(this)
    }

    updateSubmit(event){
        event.preventDefault()
        alert("Name "+this.nameref.current.value+" Company "+this.cmref.current.value)
    }

    render(){
        return(
            <>
            <div>
                <form onSubmit={this.updateSubmit}>
                    <label>User Name :</label><input type="text" ref={this.nameref}></input><br></br>
                    <label>Company   :</label><input type="text" ref={this.cmref}></input><br></br>
                    <input type="submit" value="Submit"/><br></br>
                </form>
            </div>
            </>
        )
    }
}