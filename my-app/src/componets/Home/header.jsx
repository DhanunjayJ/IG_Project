import React from 'react';
import './header.css';
import logo from '../Login&sigup/logo.png';
import { Link } from 'react-router-dom';
import dp from './dp.png';
import home from './Home.png';
import msg from './msg.png';
import note from './note.png';
import explore from './explore.jpg';

const userData = JSON.parse(localStorage.getItem("user"));
const username = userData?.Username;


function Header() {
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    console.clear();
  };
  
  return (
    <div className="home-page">
      <header>
        <nav style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <ul>
          <li><Link to="/Dashboard"><img src={logo} style={{ width: "100px", height: "35px" }} alt="Logo"/></Link></li>
<li><Link to="/Dashboard"><img src={home} alt="Home" /></Link>Home</li>
<li><Link to="/explore"><img src={explore} alt="Discover" /></Link>Discover</li>
<li><Link to="/igmsg"><img src={note} alt="Notifications" /></Link>Notifications</li>
<li><Link to="/msg"><img src={msg} alt="Messages" /> </Link>Messages</li>

          </ul>
        </nav>
       {/*<div className="search-box">
          <input type="text" placeholder="Search" />
        </div>*/}
        <div className="user-profile">
        <Link to="/profile"><img src={dp} alt="User Profile" class="user-profile img"/></Link>
        </div>
        <div>
        <h4>{username}</h4>
        </div>
        <div>
          <span><Link to="/login"><button onClick={handleLogout}> Log Out </button></Link></span>
        </div>
      </header>
    </div>
  );
}

export default Header;
 