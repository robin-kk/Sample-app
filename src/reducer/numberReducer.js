const initialnumber=[]

const numberReducer=(state=initialnumber,action)=>{
switch(action.type){
    case "ADD_NUMBER":{
       return [...state,{...action.payload}]
    }
    case "PLUS_TWO":{
        return state.map((ele)=>{
            return { ...ele ,Number:ele.Number+2 }
        })
    }
    case "REMOVE":{
        return []
    }
    case "DECREMENT":{
     return state.map((ele)=>{
        if(ele.id==action.payload){
            return {...ele,Number:ele.Number-1}
        }else{
            return{...ele}
        }
     })
    }
    case "INCREMENT":{
        return state.map((ele)=>{
           if(ele.id==action.payload){
               return {...ele,Number:ele.Number+1}
           }else{
               return{...ele}
           }
        })
       }
       case "REMOVE_ONE":{
        return state.filter((ele)=>{
           return ele.id!=action.payload
        })
       }
    default:{
       return[...state]
    }
  }
}

export default numberReducer