import React, { useState } from 'react';
import '../styles/Login.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { checkLoginData } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Check if the account already exists
      const checkResponse = await checkLoginData(email);
  
      if (checkResponse.success) {
        // Account already exists, navigate to the respective user type home
        if (checkResponse.user.userType === 'donor') {
          navigate('/donor-home', { state: { formData: checkResponse.user } });
        } else if (checkResponse.user.userType === 'beneficiary') {
          navigate('/beneficiary-home', { state: { formData: checkResponse.user } });
        }
      } else {
        // Account doesn't exist; you can show a message or handle it as needed
        setErrorMessage(checkResponse.message);
        // For example, you can show an error message on the login form.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., show an error message.
    }
  };
  
  

  return (
    <div className="login-form">
      {errorMessage && <p className="error-message">You don't have an acoount. Please Signup</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <hr></hr>
      <p>
  <Link to="/signup" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    Don't have an account? Register here
  </Link>
</p>
    </div>
  );
}

export default LoginForm;