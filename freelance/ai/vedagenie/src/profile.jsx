import React from 'react'
import Navbar from './nev';
import { AuthContext } from './context';
import { useContext } from 'react';
import "./profile.css"

const profile = () => {
  const {authuser}=useContext(AuthContext);
  return (
    <>
    <div className="profile1">

    <Navbar/>
    {authuser?
    <div className="main">

    <div className="profile">
            
            <div className="profileheading">
             <h1 className="profilelogo">{authuser.firstName.toUpperCase().slice(0,1)}{authuser.lastName.toUpperCase().slice(0,1)}</h1>
            </div>
            
                <div className="profileinfo">
                  <div>
                    <h4>Name:</h4>
                    <span>{authuser.firstName} {authuser.lastName}</span>
                  </div>
                  <div>
                  <h4>Email:</h4>
                  <span>{authuser.email} </span>
                  </div>
                  <div>
                  <h4>Phone:</h4>
                  <span>+91 {authuser.phone} </span>
                  </div>
                  <div>
                  <h4>Age:</h4>
                    <span>{authuser.age} </span>
                  </div>
                  <div>
                  <h4>Gender:</h4>
                    <span>{authuser.gender.toUpperCase()} </span>
                  </div>
                   
                    
                </div>
               
                
           
        </div>
        </div>
        :<div style={{'font-size':'30px',display:'flex',justifyContent:'center','alignItems':'center','text-align':'center',margin:'50px',width:'80vw',height:'50vh'}}>No User Logged In</div> }
    </div>

    </>
  )
}

export default profile