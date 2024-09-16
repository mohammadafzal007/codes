import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const body = { name: data.name, email: data.email, password: data.password };
    axios.post('http://localhost:4001/user/signup', body)
      .then((res) => {
        console.log(res);
        if (res.data.user) {
            toast.success(res.data.message);
            setTimeout(()=>{
          navigate(from, { replace: true });
            },800)
          
        }
      })
      .catch((err) => {
        if(err.response){
            toast.error("Error :" + err.response.data.message)
          }
      });

    console.log(body);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-cyan-800 w-[300px] h-[400px] rounded-xl'>
          <h1 className='text-bold text-black text-3xl p-10 '> SignUp</h1>
          <div className="flex justify-center items-center flex-col px-4 w-100 ">
            <div className="flex justify-end">
              <input type="text" {...register("name", { required: true })} placeholder="Name" className="input w-[200px] m-2 " />
              {errors.name && <span className="text-3xl text-red-500 my-4">!</span>}
            </div>
            <div className="flex justify-end">
              <input type="email" {...register("email", { required: true })} placeholder="Email" className="input w-[200px] m-2 " />
              {errors.email && <span className="text-3xl text-red-500 my-4">!</span>}
            </div>
            <div className="flex justify-end">
              <input type="password" {...register("password", { required: true })} placeholder="Password" className="input w-[200px] m-2" />
              {errors.password && <span className="text-3xl text-red-500 my-4">!</span>}
            </div>
          </div>
          <button className="bg-blue-700 m-6 w-[100px] h-[50px] rounded-2xl cursor-pointer text-white text-2xl hover:bg-black hover:text-white duration-75">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
