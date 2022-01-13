import React from 'react'
import { useSelector } from 'react-redux'
import Numberlist from './Numberlist'
import Numbercontrol from './Numbercontrol'
import Addnumber from './AddNumber'

const Numberscontainer=()=>{
     const number=useSelector((state)=>{
         return state.Number
     })
      
     const sumnumber=()=>{
         let sum=0
          number.forEach((ele)=>{
              sum=sum+ele.Number
          })
          return sum
     }


    return<div>
        <h3>Listing-{number.length}      Sum-{ sumnumber()}</h3>
        <Numberlist/>
        <Numbercontrol/>
        <Addnumber/>
    </div>
}
export default Numberscontainer