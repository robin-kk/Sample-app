export const numberAction=(random)=>{
   return {
       type:'ADD_NUMBER',
       payload:random
   }
}

export const plusTwo=()=>{
    return{
        type:"PLUS_TWO"
    }
}

export const Remove=()=>{
    return{
        type:"REMOVE"
    }
}
export const decrement=(id)=>{
    return{
        type:"DECREMENT",
        payload:id
    }
 }
 export const increment=(id)=>{
    return{
        type:"INCREMENT",
        payload:id
    }
 }
 export const removeone=(id)=>{
    return{
        type:"REMOVE_ONE",
        payload:id
    }
 }