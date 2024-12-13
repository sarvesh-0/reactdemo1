import {useState} from 'react'
const StringHook =(initialString)=>{
    const [string,setString] = useState(initialString)
    const uperCase = ()=> setString(initialString.toUpperCase());
    const lowerCase = ()=> setString(initialString.toLowerCase());
    const len = ()=> setString(initialString.length)
    return{string , uperCase, lowerCase, len}
}

export default StringHook