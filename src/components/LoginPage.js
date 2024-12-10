import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import slideimg from '../images/slideimg.jpg';

const LoginPage = () => {
    const [formData, setFormData] = useState({
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

        const { email, password } = formData;

        if (!email || !password) {
            setError('Both fields are required');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Enter a valid email address');
            return;
        }

        setError('');
        console.log('Login successful:', formData);
        navigate('./home');
        // Add API or backend login logic here
    };

    return (
        <div>
            <Header />
            <div className="login-page d-flex flex-column align-items-center justify-content-center vh-100">
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
                        <h2>Log in to Exclusive</h2>
                        <p>Enter your details below</p>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
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
                                Log in
                            </button>
                        </form>
                        <div className="mt-3 text-center">
                            <a href="/forgot-password" className="text-danger">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;
