import React,{useRef} from "react";

export default function UncontrolledFc() {

    var nm=''; var em='';

    const nameRef=useRef();
    const emailRef=useRef();

    function formSubmit(){
        nm=nameRef.current.value;
        em=emailRef.current.value
        
        alert ("Name"+nameRef.current.value+"Email is -"+emailRef.current.value);
    }

    return(

        <>
            <div>
            <form onSubmit={formSubmit}>
                <lable >Enter Name</lable>
                <input type="text" name="name" ref={nameRef}></input>
                <label >Enter Email</label>
                <input type="email" name="email" ref={emailRef}></input>
                <input type="submit" value="Submit"></input>

                
            </form>

            </div>
        
        </>
    )
}