import React from 'react';
import './explore.css';
import Header from './header';

function Explore() {
  return (
    <div className="explore-page"><Header /><br />
      <div className="explore-header">
        
        <h2>Explore</h2>
      </div>
      <div className="explore-grid">
        <a href="https://example.com/post1">
          <img src="https://picsum.photos/300/300" alt="Post 1" />
        </a>
        <a href="https://example.com/post2">
          <img src="https://picsum.photos/300/300?random=1" alt="Post 2" />
        </a>
        <a href="https://example.com/post3">
          <img src="https://picsum.photos/300/300?random=2" alt="Post 3" />
        </a>
        <a href="https://example.com/post4">
          <img src="https://picsum.photos/300/300?random=3" alt="Post 4" />
        </a>
        <a href="https://example.com/post5">
          <img src="https://picsum.photos/300/300?random=4" alt="Post 5" />
        </a>
        <a href="https://example.com/post6">
          <img src="https://picsum.photos/300/300?random=5" alt="Post 6" />
        </a>
        <a href="https://example.com/post7">
          <img src="https://picsum.photos/300/300?random=6" alt="Post 7" />
        </a>
        <a href="https://example.com/post8">
          <img src="https://picsum.photos/300/300?random=7" alt="Post 8" />
        </a>
      </div>
    </div>
  );
}

export default Explore;
