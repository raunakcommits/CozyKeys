import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Building2 } from 'lucide-react';
import '../../styles/login.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email: credentials.email }));
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glow"></div>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-brand-icon">
            <Building2 size={28} />
          </div>
          <span className="auth-eyebrow">WELCOME BACK</span>
          <h2>Sign in to CozyKeys</h2>
          <p>Access your saved properties and exclusive real estate insights</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-field-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-link" onClick={(e) => e.preventDefault()}>
                Forgot?
              </a>
            </div>
            <div className="input-field-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            <span>Sign In to Your Account</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}