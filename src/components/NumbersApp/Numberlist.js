import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement,increment,removeone } from '../../action/numberaction'
const Numberlist=()=>{
    const dispatch=useDispatch()
     const number=useSelector((state)=>{
         return state.Number
     })

     const handleDecrement=(id)=>{
          dispatch(decrement(id))
     }
     const handleIncrement=(id)=>{
        dispatch(increment(id))
   }
   const handleRemove=(id)=>{
    dispatch(removeone(id))
  }


    return <div>
        <h3>Number List</h3>
        <ul>
            {
                number.map((ele)=>{
                    return<li key={ele.id}>{ele.Number}
                    <button onClick={()=>{handleDecrement(ele.id)}}>-</button>
                    <button onClick={()=>{handleIncrement(ele.id)}}>+</button>
                    <button onClick={()=>{handleRemove(ele.id)}}>x</button>
                    </li>
                })
            }
        </ul>
    </div>
}
export default Numberlist