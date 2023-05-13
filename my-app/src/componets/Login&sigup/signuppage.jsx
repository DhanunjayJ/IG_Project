import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import logo from './logo.png'
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [usernameExists, setUsernameExists] = useState(false); // Define state for usernameExists

  const handleUsernameChange = async (e) => {
    const checkUsername = await axios.get("http://localhost:8000/checkusername/"+username);
    if (!checkUsername.data) {
      setUsernameExists(false);
    } else {
      setUsernameExists(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/signup/"+email+"/"+fullname+"/"+username+"/"+password) 
    setRegistrationSuccess(true);
    console.log(response);
  }

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <div className="instagram-logo">
          <img src={logo} alt="Instagram Logo" />
        </div>
        {registrationSuccess ? (
          <div className="success-message">
            <p>Registration successful!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyUp={handleUsernameChange} />
            {usernameExists && <p className="error-message">Username already exists</p>}
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign up</button>
          </form>
        )}
        <div className="login-container">
          <p>Have an account? <Link to="/login">Log in</Link></p>
        </div>
        <div className="terms">
          By signing up, you agree to our <a href="#">Terms</a>,<br>
          </br> <a href="#">Data Policy</a>, and <a href="#">Cookies Policy</a>.
        </div>
      </div>
    </div>
  );
}

export default Signup;
