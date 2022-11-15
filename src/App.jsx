import React, { createContext, useReducer } from 'react'
import AllPages from './Routes/AllPages'
import Navba from './Component/Navba'
import './Style/App.css'
import { BrowserRouter } from 'react-router-dom'


const InitialState = {
  Cart:[]
}
const reducer = (state , action)=>{
switch(action.type){
case 'Add To Cart' :
  return {...state , Cart:[...state.Cart  , action.payload]}
  case "Remove from Cart":
    return{...state , Cart:state.Cart.filter((c)=> c.id !== action.payload.id)}
}
}
export const Context = createContext()
const App = () => {
  const [state , dispatch] = useReducer(reducer , InitialState)
  return (
    <BrowserRouter>
    <Context.Provider value={{state ,  Cart:[], dispatch}}>

    <Navba />
    <AllPages />

    </Context.Provider>
 
 
    </BrowserRouter>
  )
}

export default App