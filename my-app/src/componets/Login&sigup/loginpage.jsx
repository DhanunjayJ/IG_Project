import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import logo from './logo.png'
import { Link, useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Login Failed 😖😞 Try Again!');
const notify1  = () => toast.success('Login Successful!! 🎉🥳');
function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = async(e)=> {
    e.preventDefault();
    try{
    const responce = await axios.post("http://localhost:8000/login/"+email+"/"+password);
    console.log(responce);
    if (responce.data) {
      notify1("login succesful");
      localStorage.setItem('user', JSON.stringify(responce.data));
      setTimeout(() => {
        navigate('/Dashboard');
        window.location.reload();
      }, 2000);
    } else {
      notify("login failed");
    }
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="instagram-logo">
          <img src={logo} alt="Instagram Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit"> Log In</button>
        </form>
        <div className="signup-container">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
        <div className="forgot-password">
          <Link to="/forgotpassword">Forgot password?</Link>
         <div><Toaster
  position="top-right"
  reverseOrder={false}
/></div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
