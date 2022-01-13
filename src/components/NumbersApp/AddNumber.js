import React,{useState} from "react"
import { numberAction } from "../../action/numberaction"
import {useDispatch} from "react-redux"
const Addnumber=()=>{
    const dispatch=useDispatch()
    const[number,setNumber]=useState('')

    const handleChange=(e)=>{
         setNumber(e.target.value)
    }

    const handleSubmit=(e)=>{
       e.preventDefault()
       const num={
           id:Number(new Date()),
           Number:Number(number)
       }
       console.log(num)
       dispatch(numberAction(num))
       setNumber('')
    }
    return<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={number} onChange={handleChange}/>
        </form>
    </div>
}
export default Addnumber