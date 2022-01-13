 export const increment=()=>{
    return{type:"INCREMENT"}
}

 export const decrement=()=>{
    return{type:"DECREMENT"}
}

 export const increment_by=(n)=>{
    return{type:"INCREMENT_BY",payload:n}
}