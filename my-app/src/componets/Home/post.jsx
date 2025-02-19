import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import nature from './nature.jpg'
import img from './img.jpeg'
import './post.css'

export default function InstagramPost() {
  const [likes, setLikes] = React.useState(123); 

  const handleLike = () => {
      if (likes > 124) {
        setLikes(likes - 1); 
      }
    else{
    setLikes(likes + 1); }
  };
  

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
            },
          }}
        >
          <Avatar
            size="sm"
            src={img}
            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography fontWeight="lg">Sai</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <CardOverflow>
        <AspectRatio>
          <img src={img} alt="" loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          <IconButton variant="plain" color="neutral" size="sm" onClick={handleLike}>
            {likes ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <ModeCommentOutlined />
          </IconButton>
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
          <BookmarkBorderRoundedIcon />
        </Box>
      </Box>
      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ pb: 1 }}>{likes} likes</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
          <Typography fontWeight="bold" sx={{ mr: 1 }}>
            saitejaposetti
          </Typography>
          <Typography variant="body2" color="text.secondary">
          🌞 Living my best life on this beautiful day ☀️😎 Embracing every moment and feeling grateful for all the blessings in my life. #blessed #gratefu
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
          4 day ago
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Face sx={{ mr: 1 }} />
          <Input placeholder="Add a comment" fullWidth disableUnderline  />
          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}