import React from 'react'
import "./App.css";

const Navbar = ({category,setCategory}) => {
  
  return (
    <div>
        <nav className="nav">
            <ul>
                <li onClick={(e)=>setCategory(e.target.textContent)}>Business</li>
                <li onClick={(e)=>setCategory(e.target.textContent)}>Education</li>
                <li onClick={(e)=>setCategory(e.target.textContent)}>Sports</li>
                <li onClick={(e)=>setCategory(e.target.textContent)}>Technology</li>
                <li onClick={(e)=>setCategory(e.target.textContent)}>Science</li>
            </ul>
            {/* <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/> */}
        </nav>
        <h1>{category}</h1>

    </div>
  )
}

export default Navbar