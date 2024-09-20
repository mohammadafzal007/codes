import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from './context';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from './images/footerbg.png';
import './nav.css';

const Navbar = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';
  const from1 = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const { authuser, setauthuser } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar when close button is clicked
  };

  const logout = () => {
    toast.success('Logout Successfully');
    setTimeout(() => {
      navigate(from1, { replace: true });
      setauthuser(undefined);
      localStorage.removeItem('loginuser');
      localStorage.removeItem('token');
    }, 1000);
  };

  const gotoprofile = () => {
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <>
      <nav className="navbg">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '90px', height: '80px' }} />
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '26px', fontWeight: 'bold' }}>
            Vedagenie
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="./">Home</a></li>
          <li><a href="./about">About Us</a></li>
          <li><a href="contact">Contact Us</a></li>
          {authuser ? (
            <>
              <li title="Go to Profile">
                <a href="profile" className="profilebtn" onClick={gotoprofile}>
                  {authuser.firstName.slice(0, 1).toUpperCase() + authuser.lastName.slice(0, 1).toUpperCase()}
                </a>
              </li>
              <li><a className="logoutbtn" onClick={logout}>Logout</a></li>
            </>
          ) : (
            <li><a href="login">Login</a></li>
          )}
        </ul>

        {/* Sidebar toggle button */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          {/* Close button */}
          <button className="sidebar-close" onClick={closeSidebar}>
            ✕
          </button>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
            {authuser && (
              <>
                <li><a onClick={gotoprofile}>Profile</a></li>
                <li><a onClick={logout}>Logout</a></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
