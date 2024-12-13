import { useState } from "react";

export default function UseStateDemo2(props){
    const [customer ,setCoustomer] = useState({cistId:101,custName:"Aditya",city:"Pune",pinncode:"441021"})
    const changeCustomer=()=>{
        setCoustomer({cistId:102,custName:"Anuj",city:"Pune",pinncode:"441031"})
    }
    return(
        <>
        <div>
            <h3>Customer Hook</h3>
            <p>Customer ID   -{customer.cistId}</p>
            <p>Customer Name -{customer.custName}</p>
            <p>City          -{customer.city}</p>
            <p>Pincode       -{customer.pinncode}</p>
            <button onClick={changeCustomer}>Click It</button>
        </div>
        </>
    )
}