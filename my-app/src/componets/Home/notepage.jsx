import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Message.css';
import Header from './header';

const Message = () => {
  return (
    <div><Header />
    <Box sx={{ width: 300 ,margin: 'auto' }}>
      <div className="message-header">
        <Typography variant="h6" component="div">
          <h2 align="center">Activity</h2>
        </Typography>
        <IconButton color="primary" size="small">
          <CheckCircleIcon />
        </IconButton>
      </div>
      <div className="message-body">
        <div className="message-item">
          <Avatar sx={{ width: 24, height: 24 }} src="https://picsum.photos/200" />
          <Typography variant="body2" component="span" sx={{ ml: 1 }}>
            <b>username</b> liked your post.
          </Typography>
          <IconButton variant="text" color="primary" size="small">
            <ThumbUpIcon />
          </IconButton>
        </div>
        <div className="message-item">
          <Avatar sx={{ width: 24, height: 24 }} src="https://picsum.photos/200" />
          <Typography variant="body2" component="span" sx={{ ml: 1 }}>
            <b>username</b> started following you.
          </Typography>
          <IconButton variant="text" color="primary" size="small">
            <CheckCircleIcon />
          </IconButton>
        </div>
        <div className="message-item">
          <Avatar sx={{ width: 24, height: 24 }} src="https://picsum.photos/200" />
          <Typography variant="body2" component="span" sx={{ ml: 1 }}>
            <b>username</b> commented on your post.
          </Typography>
          <IconButton variant="text" color="primary" size="small">
            <ThumbUpIcon />
          </IconButton>
        </div>
        <div className="message-item">
          <Avatar sx={{ width: 24, height: 24 }} src="https://picsum.photos/200" />
          <Typography variant="body2" component="span" sx={{ ml: 1 }}>
            <b>username</b> tagged you in a post.
          </Typography>
          <IconButton variant="text" color="primary" size="small">
            <CheckCircleIcon />
          </IconButton>
        </div>
        <div className="message-item">
          <Avatar sx={{ width: 24, height: 24 }} src="https://picsum.photos/200" />
          <Typography variant="body2" component="span" sx={{ ml: 1 }}>
            <b>username</b> liked your post.
          </Typography>
          <IconButton variant="text" color="primary" size="small">
            <ThumbUpIcon />
          </IconButton>
        </div>
      </div>
    </Box></div>
  );
};

export default Message;
