import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import YouTube from "react-youtube";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/videos.css"; // Import your CSS file

interface Video {
  embed_link: string;
  title: string;
  description: string;
}

function Videos() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videoData, setVideoData] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}videos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch video data");
        }
        const data: Video[] = await response.json();
        setVideoData(data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, []);

  const handleClickOpen = (videoUrl: string) => {
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
          <Card
            key={index}
            className="highlight-card"
            onClick={() => handleClickOpen(video.embed_link)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={`https://img.youtube.com/vi/${
                  video.embed_link.split("v=")[1]
                }/mqdefault.jpg`}
                alt="Video thumbnail"
                className="card-media"
              />
              <CardContent className="card-content">
                <Typography className="card-title">{video.title}</Typography>
                <Typography className="card-description">
                  {video.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className="video-dialog">
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "gray",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <div className="video-player">
              <YouTube
                videoId={selectedVideo.split("v=")[1]}
                className="video-container"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Videos;
