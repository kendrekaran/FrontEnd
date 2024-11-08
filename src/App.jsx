import React from 'react'
import { Route , Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Profile from './NavElments/Profile'
import BrowseExercise from './BrowseExercise'
import MuscleExercises from './Muscles/Muscles'
import { useState,useEffect } from 'react'
import Loader from './Loader'

const App = () => {
  const [loading, setLoading] = useState(false)
  const location = useLocation

  useEffect(() =>{
    setLoading(true)

    const timer = setTimeout(() => setLoading(false),800)

    return () => clearTimeout(timer)
  },[location])

  return (
    <div>
      {loading&&<Loader/>}
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/home/profile" element={<Profile/>} ></Route>
        <Route path="/muscle" element={<BrowseExercise/>} ></Route>
        <Route path="/muscle/:muscle" element={<MuscleExercises/>} ></Route>
      </Routes>
    
    </div>
  )
}

export default App
