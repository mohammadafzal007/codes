import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';


function App() {


  return (
    <>
<Navbar />
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
</Routes>
    </>
  )
}

export default App
