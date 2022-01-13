const initialstate=0

const countReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "INCREMENT":{
            return state +1
        }
        case "DECREMENT":{
            return state -1
        }
        case "INCREMENT_BY":{
            return state + action.payload
        }
        default:{
        return state
        }
    }
}

export default countReducer