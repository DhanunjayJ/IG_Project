import React, { useState } from "react";
import { Link } from "react-router-dom";
import './fp.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");


  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2 className="forgot-password-title">Forgot Password</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit"> <Link to="/passup">Reset Password</Link></button>
        </form>
        <Link to="/login" className="forgot-password-link">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
