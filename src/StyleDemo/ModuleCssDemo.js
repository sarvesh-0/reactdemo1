import { Component } from "react";
import aditya from './Demo.module.css'
export default class ModuleDemo extends Component{
    str="It is Component Specific"
    render(){
        return(
            <>
            <div className={aditya.fordiv}>
                <h2>Using CSS Module for Styling ...</h2>
                <p className={aditya.forpara}>{this.str}</p>
            </div>
            </>
        )
    }
}