import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import SignupPage from "./SignUpPage";

const Header = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleSignupButtonClick = () => {
    setShowSignupForm(true);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='flex justify-between border-4 p-6'>
      <h2>Food Hub</h2>
      <ul className='flex gap-4'>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/offers">
          <li>Offers</li>
        </Link>
        <Link to="/help">
          <li>Help</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>

        <Link to="/signup">
      <button onClick={handleSignupButtonClick}>Sign Up</button>
        {/* {showSignupForm && <SignupPage />} Corrected to render SignupPage */}
        </Link>
      </ul>
      <div>
        {/* Conditional rendering based on isLoggedIn state */}
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      
      </div>

     
    </div>
  );
};

export default Header;
