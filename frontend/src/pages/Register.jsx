import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import '../../styles/register.css';

export default function Register() {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glow"></div>

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-brand-icon">
            <Sparkles size={28} />
          </div>
          <span className="auth-eyebrow">START YOUR JOURNEY</span>
          <h2>Create Your Account</h2>
          <p>Find luxury homes curated specifically for your lifestyle</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-field-wrapper">
              <User className="input-icon" size={18} />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={userData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-field-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-field-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            <span>Create Free Account</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}