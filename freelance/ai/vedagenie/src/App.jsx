import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './home';
import About from './About';
import Contact from './contact';
import Login from './login.jsx';
import RegistrationForm from './rag.jsx';
import ForgotPassword from './forgot.jsx'
import Des from './des.jsx';
import Underage from './underage.jsx';
import Overage from './componets/overage.jsx';
import Profile from './profile.jsx';
import { Toaster } from 'react-hot-toast';
import Footer from './footer.jsx';


function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/forget" element={<ForgotPassword />} />
      <Route path="/underage" element={<Underage />} />
      <Route path="/overage" element={<Overage />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  
      
    </>
  )
}

export default App;
