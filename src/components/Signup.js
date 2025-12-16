import React, { useState } from 'react';
import '../css/loginAndsigin.css'
import axios from 'axios';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // single toggle for both

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // toggles both fields
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Check password match
    if (credentials.password !== credentials.confirmPassword) {
      setMessage('❌ Password and Confirm Password do not match');
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/createuser",
        {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      console.log("User created:", response.data);
      setMessage('✅ Account created successfully!');
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      setMessage(error.response?.data?.error || '❌ Signup failed. Please check your details.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '400px', borderRadius: '15px' }}>
        <h3 className="text-center mb-3 fw-bold">Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="example@email.com"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter at least 5 characters"
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3 position-relative">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter your password"
              onChange={handleChange}
              required
            />
          </div>

          {/* Show/Hide Password Toggle */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword}
              onChange={toggleShowPassword}
            />
            <label className="form-check-label" htmlFor="showPassword">
              Show Password
            </label>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div
              className={`alert ${message.startsWith('✅') ? 'alert-success' : 'alert-danger'} py-2`}
            >
              {message}
            </div>
          )}

          <button type="submit" className="btn w-100 fw-semibold" id="sigin-btn">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account? <a href="/login" className="text-decoration-none ">Login</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
