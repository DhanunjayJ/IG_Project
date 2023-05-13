import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

export default function PasswordUpdate() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    // make API call to update password here
    setMessage('Password updated successfully');
  };

  return (
    <div className="signup-page">
    <div className="signup-form-container">
    <form onSubmit={handleSubmit}>
      <h1>Password Update</h1>
      {message && <p>{message}</p>}
      <div>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Update Password</button>
    </form>
    </div>
    </div>
  );
}
