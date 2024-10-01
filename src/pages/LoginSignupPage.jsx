import React, { useState } from 'react';
import './LoginSignup.css'; // Import the provided CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);

  // Toggle function to switch between forms
  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h2>Sign In</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a>Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form>
          <h2>Create Account</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      {/* Toggle Container */}
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isActive ? '' : 'active'}`}>
            <h3>New here?</h3>
            <p>Sign up and discover great experiences.</p>
            <button onClick={toggleForm} className="hidden">Sign Up</button>
          </div>
          <div className={`toggle-panel toggle-right ${isActive ? 'active' : ''}`}>
            <h3>One of us?</h3>
            <p>Sign in to continue your journey.</p>
            <button onClick={toggleForm} className="hidden">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
