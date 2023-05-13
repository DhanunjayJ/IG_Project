import React, { useState, useEffect } from 'react';
import Header from './header';
import InstagramPost from './post';
import InstagramPost1 from './post1';
import InstagramPost2 from './post2';
//import InstagramPost4 from './post4';
import InstagramPost3 from './post3';
import InstagramPost5 from './post5';
import Profile from './profile';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate('/login');
    }
  }, [navigate]);
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = [InstagramPost, InstagramPost1, InstagramPost2, InstagramPost3, InstagramPost5];
    const randomPosts = shuffle(allPosts).slice(0, 6); // change 3 to the number of posts you want to display
    setPosts(randomPosts);
  }, []);

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div>
      <Header />
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        {posts.map((Post, index) => (
          <Post key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
