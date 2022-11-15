import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home'

import React from 'react'
import Furniture from '../Pages/Furniture'
import Shose from '../Pages/Shose'
import Watch from '../Pages/Watch'
import Clothes from '../Pages/Clothes'
import Cart from '../Pages/Cart'

const AllPages = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Clothes' element={<Clothes />}>
      
        </Route>
       
        
        <Route path='/Shose' element={<Shose />} />
        <Route path='/Watch' element={<Watch />} />
        <Route path='/furniture' element={<Furniture />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>

  )
}

export default AllPages
