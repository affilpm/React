import React from 'react' 
import { useState } from 'react'
import Memo from './components/Memo'
import Context from './components/Context'
import UserContextProvider from './context/UserContextProvider'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Callback from './components/Callback'
import Reducer from './components/Reducer'

const App = () => {

  return (
    <UserContextProvider>
    <Router>
      <Routes>

    <Route path='/callback' element={<Callback/>}/>

    <Route path='/reducer' element={<Reducer/>}/>
    
    <Route path='/memo' element={ <Memo/>}/>
  
   

    <Route path='/context' element={ <Context/>} />

    </Routes>
    </Router>
    </UserContextProvider>


  )
}

export default App