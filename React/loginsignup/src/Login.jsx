import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from './context';
import {toast} from 'react-hot-toast'

const Login = () => {

 const {authuser,setauthuser}=useContext(AuthContext);
 console.log(authuser)
const {register,handleSubmit,formState:{errors}}=useForm();
const onsubmit=(data)=>{
  console.log(data)
const userdata={
  password:data.password,
  email:data.email
}
    axios.post('http://localhost:4001/user/login',userdata)
    .then((res)=>{
console.log(res);
console.log(res.token);

if(res.data)
{
  toast.success(res.data.message)
  
  setTimeout(()=>{
    localStorage.setItem("usersdemo",JSON.stringify(res.data.user));
    localStorage.setItem("token",JSON.stringify(res.data.token));
    window.location.reload()
 
  },1000)

}

})
    .catch((err)=>{
      console.log(err.response.data.message)
      toast.error("Error :" + err.response.data.message)
      setTimeout(()=>{
        window.location.reload()
      },800)
})
    
}


  return (
<>
{authuser?
    <div className=" m-2 flex items-center justify-center min-w-max text-3xl h-[300px]">
      <h1>{authuser.name.toUpperCase()}<br/>{authuser.email}<br/>{authuser._id} Logged In Successfully</h1>
      
    </div>:
    <div className="flex justify-center m-6 ">
      {/* {authuser ?<h1>hello</h1>:<>Nothing</>} */}
    <form onSubmit={handleSubmit(onsubmit)}>

    <div className='bg-cyan-800 w-[400px] h-[350px] rounded-xl min-w-max m-4'>
    <h1 className='text-bold text-black text-2xl p-10 '> Login</h1>
    <div className="flex justify-center items-center flex-col px-4 w-100 ">
<div className="flex justify-end">
    <input type="email" {...register("email",{required:true})} placeholder="Email" className="input w-[300px] m-2 " />
    {errors.email && <span className="text-3xl text-red-500 my-4">!</span>}
</div>
<div className="flex justify-end">
<input type="password" {...register("password",{required:true})} placeholder="Password" className="input w-[300px] m-2" />

    {errors.password && <span className="text-3xl text-red-500 my-4">!</span>}
</div>
    </div>
    <button className="bg-blue-700 m-2 w-[100px] h-[50px] rounded-2xl cursor-pointer text-white text-2xl hover:bg-black hover:text-white duration-75">Login</button>
    </div>
    </form>
    </div>
}
</>
  
    
  )
}

export default Login