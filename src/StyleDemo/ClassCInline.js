import React, { Component } from 'react'
export default class CCInline extends Component{

    styleOne ={backgroundColor: 'lightblue', border: 'dashed 5px red'}
    ulStyle ={border:'2px solid green', width:'40%', listStyleType:'circle'}
    liStyle ={color:'blue', fontSize:'14px'}
    
    render(){
        return(
            <>
            <div style={this.styleOne}>
                <h1>Class Component inline styling ..</h1>
            </div>
            <ul style={this.ulStyle}>
                <li style={this.liStyle}>Green</li>
                <li style={this.liStyle}>Blue</li>
                <li style={this.liStyle}>Red</li>
            </ul>
            </>
        )
    }
}