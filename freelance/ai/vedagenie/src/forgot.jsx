// src/ForgotPassword.jsx
import React, { useState } from 'react';
import Navbar from './nev';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            const data = await response.json();
            if (response.ok) {
                // console.log('Reset link sent:', data);
                setMessage(`A password reset link has been sent to ${email}`);
            } else {
                // console.error('Failed to send reset link:', data.msg);
                setMessage(data.msg || 'Failed to send reset link');
            }
        } catch (error) {
            // console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <> <Navbar />
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
                {message && <p className="success-message">{message}</p>}
            </form>
        </div>
        </>    );
};

export default ForgotPassword;
