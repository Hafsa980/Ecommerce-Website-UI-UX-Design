import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import slideimg from '../images/slideimg.jpg';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email address');
      return;
    }

    setError('');
    console.log('Form submitted successfully:', formData);
    navigate('./login');
    // Add your API integration here
  };

  return (
    <div>
        <Header />
    <div className="signup-page d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="image-section">
          <img
            src={slideimg} // Replace with actual image URL
            alt="Shopping Cart"
            className="img-fluid"
            style={{ height: '600px', width: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="form-section w-100 w-md-50">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or Phone Number
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Create Account
            </button>
          </form>
          <div className="mt-3">
            <button className="btn btn-outline-dark w-100">
              Sign up with Google
            </button>
          </div>
          <div className="mt-3 text-center">
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SignUpPage;
