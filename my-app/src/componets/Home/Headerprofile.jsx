import React, { useEffect, useState } from 'react';
import './Profile.css';
import dp from './dp.png'
import { FaCamera } from 'react-icons/fa';

const userData = JSON.parse(localStorage.getItem("user"));
const username = userData?.Username;

const profilename = userData?.Fullname || 'No Name';

function ProfileHeader() {

    
  
  /*const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      fetch('/users/profile/' + userData.id)
        .then(response => response.json())
        .then(data => setUser(data))
        .then(() => setLoading(false))
        .catch(error => console.log(error));
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={dp} alt="User avatar" />
          <div className="camera-icon">
            <FaCamera />
          </div>
        </div>
        <div className="profile-info">
          <div className="username">{username}</div>
          <div className="counts">
            <div className="posts">0 posts</div>
            <div className="followers">0 followers</div>
            <div className="following">0 following</div>
          </div>
          <div className="profile-name">{profilename}</div>
        </div>
      </div>
      <div>
      <hr /> 
      <h6 className="username" >No Posts Yet... </h6>
      <p align="center"><FaCamera /></p>
      </div>
    </div>
  );
}

export default ProfileHeader;
