import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './context'

const Home = () => {
  const {authuser}=useContext(AuthContext);
  return (
    <div className='W-10 h-10 m-10 p-10 flex justify-center place-content-center'>
    <h1 className='text-bold text-white text-3xl  max-w-screen-sm h-[400px] p-10'> WELCOME TO AUTHENTICATION!  {authuser? authuser.name.toUpperCase():""}</h1>
    </div>
  )
}

export default Home