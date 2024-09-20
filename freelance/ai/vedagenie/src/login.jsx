// src/Login.jsx
import React, { useState } from 'react';
import Navbar from './nev';
import { useLocation,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Login() {
    const location=useLocation();
    const from = location.state?.from?.pathname || "/profile";
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState(''); // For email or phone
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const body = {
                email:identifier,
                password:password
            }
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
               
                body: JSON.stringify(body),
            });
            const data = await response.json();
            if (response.ok){
                localStorage.setItem('loginuser',JSON.stringify(data.user))
                localStorage.setItem('token',data.token)
                toast.success('Login successful')
                setTimeout(()=>{                                        //window reload after 1 sec for  succesfulll login
                    navigate(from, { replace: true });    
                    window.location.reload()
               },1000)
                // console.log("Logged in Sucessfully:", data);
                // console.log("token",data.token);
                // console.log("user",data.user);
            }
            else{
                toast.error(data.msg)
                // console.log("Error:", data.msg);
            }
        }catch(error){
            // console.log("Error:", error);
        }
        
    };

    return (
        <>
        <Navbar />
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Login with:</label>
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button  type="submit" className="login-button">Login</button>
                <div className="links">
                    <a href="/forget">Forgot Password?</a>
                    <span> | </span>
                    <a href="/registration">Create an Account</a>
                </div>
            </form>
        </div>
        </>
        
    );

}

export default Login;
