import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
