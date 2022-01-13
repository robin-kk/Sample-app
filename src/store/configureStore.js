import {createStore,combineReducers} from 'redux'
import countReducer from '../reducer/countReducer'
import numberReducer from '../reducer/numberReducer'
const configureStore=()=>{
   const store=createStore(combineReducers({
      count:countReducer,
      Number:numberReducer
   }))
   return store
}

export default configureStore