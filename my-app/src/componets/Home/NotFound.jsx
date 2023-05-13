import React from 'react';
import './NotFound.css';
import oops from './oops.png'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={oops} alt="not-found" className="not-found-image" />
      <div className="not-found-text">
        <h1>Oops!</h1>
        <p>The page you are looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
