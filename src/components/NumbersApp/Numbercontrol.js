import React from 'react'
import { useDispatch } from 'react-redux'
import { numberAction,plusTwo,Remove} from '../../action/numberaction'
const Numbercontrol=()=>{
    const dispatch=useDispatch()
    
    
    const handleGenerate=()=>{
       const randomnumber=Math.round(Math.random()*100)
       const num={
           id:Number(new Date()),
           Number:randomnumber
       }
       dispatch(numberAction(num))
     }
       
     const two=()=>{
        // console.log("two activated")
         dispatch(plusTwo())
     }

     const removeAll=()=>{
         // console.log("remove activated")
         dispatch(Remove())
     }

    return<div>
        <button onClick={handleGenerate}>generate</button>
        <button onClick={two}>+2</button>
        <button onClick={removeAll}>remove</button>
    </div>
}
export default Numbercontrol