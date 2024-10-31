import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/meet-us' element={<About />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
