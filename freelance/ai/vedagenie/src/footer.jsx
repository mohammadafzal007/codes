import React from 'react'
import "./index.css"
import footerbg from "./images/footerbg.png"
const footer = () => {
  return (
    <div className="main-footer">
    <div className="sec1">
        <img src={footerbg}/>
        <span>©2024 Copyright.All Right Reserved</span>
    </div>
    <ul className="sec2">
        <li>Contact Us</li>
        <li><a href="tel:+91 9811575689">Phone: +91 9811575689</a></li>
        <li><a href="mailto:mail@vedagenie.com" >Mail: mail@vedagenie.com</a></li>
    </ul>
    <ul className="sec2">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact us</a></li>
    </ul>
    <h5 className="sec3">Designed By: cetf</h5>
    </div>
  )
}

export default footer