import * as React from 'react';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/joy/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './msg.css';
import Header from './header';

const LikeMessage = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

export default function IGMessage() {
  return (
    <div><Header />
    <Box sx={{ width: 300, margin: 'auto' }}>
      <h2 align="center">Notifications</h2>
      <LikeMessage>
        <Avatar size="sm" src="/static/logo.png" />
        <Typography>
          <b>MUI</b> liked your post.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <ThumbUpIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/avatar.jpg" />
        <Typography>
          <b>john.doe</b> liked your post.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <ThumbUpIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/avatar2.jpg" />
        <Typography>
          <b>jane.doe</b> liked your post.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <ThumbUpIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/logo.png" />
        <Typography>
          <b>MUI</b> followed you.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <CheckCircleIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/avatar3.jpg" />
        <Typography>
          <b>jack.smith</b> liked your post.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <ThumbUpIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/avatar4.jpg" />
        <Typography>
          <b>jane.smith</b> liked your post.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <ThumbUpIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/logo.png" />
        <Typography>
          <b>MUI</b> commented on your post.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <CheckCircleIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/avatar5.jpg" />
        <Typography>
          <b>john.smith</b> liked your post.
        </Typography>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/logo.png" />
        <Typography>
          <b>MUI</b> followed you.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <CheckCircleIcon />
        </IconButton>
      </LikeMessage>
      <LikeMessage>
        <Avatar size="sm" src="/static/avatar3.jpg" />
        <Typography>
          <b>jack.smith</b> liked your post.
        </Typography>
        <IconButton variant="plain" color="neutral" size="sm">
          <ThumbUpIcon />
        </IconButton>
      </LikeMessage>
    </Box></div>
  );
}
