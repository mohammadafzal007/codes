import React, { useState } from 'react';
import Navbar from './nev';
import.meta.env
import toast from 'react-hot-toast';
import { useLocation,useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const location=useLocation();
    const from = location.state?.from?.pathname || "/login";
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        age: '',            
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

      

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
           
            const data = await response.json();
           
            if (response.ok) {
                // console.log('Registration successful:', data.msg);
               
                toast.success('Registration successful')              //alert for succesfulll registration
                setTimeout(()=>{
                                                   //window reload after 1 sec for  succesfulll registration
                navigate(from, { replace: true });    
                window.location.reload()
            },1000)


                // Redirect or show success message
            } else {
                // console.error('Registration failed:', data.msg || data.error);
                toast.error(data.msg)                  //alert for email already exist or password not match
                // Show error message
            }
        } catch (error) {
            // console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group inline-group">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;
