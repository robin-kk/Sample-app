import Numberscontainer from "./components/NumbersApp/Numberscontainer"
import React from "react"
const App=()=>{

  return<div>
        <h1>Random Number Generator</h1>
        <Numberscontainer/>
        </div>
}
export default App

// import { useSelector,useDispatch} from 'react-redux'
// import { increment } from './action/actionReducer'
// const App=()=>{
//  const count=useSelector((state)=>{
//       return state.count
//  })
//  const dispatch=useDispatch()
//   return <div>
//     <h1>redux training</h1>
//     <h1> count-{count}</h1>
//     <button onClick={()=>{
//       dispatch(increment())
//     }}>+1</button>
//   </div>
// }
// export default App