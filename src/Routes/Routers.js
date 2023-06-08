import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CurrentRequests from '../Containers/CurrentRequests'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' exact element={<CurrentRequests/>}/>
        <Route path='/ongoing-stays' exact element={<h2 style={{textAlign:"center"}}>Ongoing Stays</h2>}/>
        <Route path='/previous-stays' exact element={<h2 style={{textAlign:"center"}}>Previous Stays</h2>}/>
        <Route path='/reports' exact element={<h2 style={{textAlign:"center"}}>Reports</h2>}/>
        <Route path='*' element={<h2 style={{textAlign:"center"}}>Page Not found 404</h2>}/>
    </Routes>
  )
}

export default Routers