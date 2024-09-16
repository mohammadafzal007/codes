import React from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Navbar = () => {
  const {authuser,setauthuser}=useContext(AuthContext);
  console.log(authuser)
  const logout=()=>{
    localStorage.removeItem("usersdemo")
    setauthuser(undefined);
    }


    const getprofileclient=()=>{
    console.log('hello')
      const token=localStorage.getItem('token')
      console.log(token)
      axios.get("http://localhost:4001/user/profile",
        {
          headers: {
            'authorization': `Bearer ${token}`
          }
        }
      )
      .then((res)=>{
        console.log(res)
        localStorage.setItem(JSON.stringify('newdata',res))
      }).catch((error)=>{
        console.log(error)
      })
    }
  return (
    <>
    <Toaster/>
    <div>
           <div className="navbar bg-base-100 flex justify-around">
  <div className="flex">
    <Link className="btn btn-ghost text-xl" to="/">Home</Link>
  </div>
  {authuser?
  <>
  <Link onClick={logout}className="btn bg-red-600 m-4">Logout</Link>
  <Link onClick={getprofileclient} className="btn">Profile</Link>
  </>
  :
    <>
   <Link className="btn" to='/login' >Login</Link>
   <Link className="btn" to='/signup' >Signup</Link>
   
    </>
}

  


</div>
    </div>
    </>
  )
}

export default Navbar