import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Page/Auth/Login'
import Signup from './Page/Auth/Signup'
import Home from './Page/Home/Home'
import Charts from './Page/Charts/Charts'
export default function routes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/charts' element={<Charts />} />



        </Routes>
    )
}
