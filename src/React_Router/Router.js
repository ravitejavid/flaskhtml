import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Managers from '../BodyHeader/Managers';
import Mydata from '../BodyHeader/Mydata'
import Add from '../BodyHeader/Add'
import LiveView from '../BodyHeader/LiveView'
import Employess from '../BodyHeader/Employess'

function Router() {
  return (
    <div>
    
      <Routes>
      <Route path='/' element={<Mydata />} />
        <Route path="/managers" element={<Managers />} />
        <Route path='/employe' element={<Employess />} />
        <Route path='/live' element={<LiveView />} />
        <Route path='/add' element={<Add />} /> 
      </Routes>
   
    </div>
  )
}

export default Router
