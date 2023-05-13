import React from 'react';
import './home1.css'
import { Link } from 'react-router-dom';
import ig from './ig.png';
function Home() {
  return (
    <div className="homepage-container">
      <div className="logo-container">
      <img src={ig} alt="Logo" className="logo-image" />
        <h1 className="title" align="center">Instagram Clone</h1>
        </div>
        <h4 align="center"> Already have an account? <Link to="/login">Login</Link></h4>
        <h4 align="center"> Don't have an account? click <Link to="/signup">Here</Link> to Sign up</h4>
      </div>
  );
}

export default Home;