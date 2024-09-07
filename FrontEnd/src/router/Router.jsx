import React from 'react'
import{Routes, Route, Navigate} from 'react-router-dom'
import Home from '../Pages/Home'
import Tours from '../Pages/Tours'
import Login from '../Pages/Login'
import SerachResultList from '../Pages/SerachResultList'
import Register from '../Pages/Register'
import TourDetails from '../Pages/TourDetails'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tour/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/search' element={<SerachResultList/>}/>
        
        </Routes>
  )
}

export default Router