import { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Dialog, DialogContent, IconButton } from "@mui/material";
import YouTube from 'react-youtube';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/videos.css'; // Import your CSS file

function Videos() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const videoData = [
    {
      url: 'https://www.youtube.com/watch?v=T6K0yzwJxXM',
      title: 'Video 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.'
    },
    {
      url: 'https://www.youtube.com/watch?v=LDU_Txk06tM',
      title: 'Video 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.'
    },
    {
      url: 'https://www.youtube.com/watch?v=tCzhkMmZvek',
      title: 'Video 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.'
    },
    {
      url: 'https://www.youtube.com/watch?v=8BrLNgKLWzs',
      title: 'Video 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.'
    }
    // Add more video data as needed
  ];

  const handleClickOpen = (videoUrl:string) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="videos-container">
      <div className="video-wrapper">
        {videoData.map((video, index) => (
          <Card key={index} className="highlight-card" onClick={() => handleClickOpen(video.url)}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/mqdefault.jpg`}
                alt="Video thumbnail"
                className="card-media"
              />
              <CardContent className="card-content">
                <Typography className="card-title">{video.title}</Typography>
                <Typography className="card-description">{video.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: 'gray',
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <YouTube videoId={selectedVideo.split('v=')[1]} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Videos;
