import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/products'); // Simulate successful login
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <button type="button" className="btn btn-outline-secondary w-100" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
