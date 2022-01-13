import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import configureStore from './store/configureStore'
import { increment,decrement,increment_by } from './action/actionReducer'
import { Provider } from 'react-redux'


const store=configureStore()
console.log(store.getState())

//console.log(store.getState())
  store.subscribe(()=>{
   console.log("state updated")
   console.log(store.getState())
  })


ReactDOM.render(
    <Provider store={store} > 
      <App />
    </Provider>,
  document.getElementById('root')
);

