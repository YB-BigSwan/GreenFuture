// Videos.js
import YouTube from "react-youtube";
import "../styles/videos.css"; // Import your CSS file

function Videos() {
  // Extract the video ID from the YouTube URL
  const videoUrl = "https://www.youtube.com/watch?v=T6K0yzwJxXM";
  const videoId = videoUrl.split("v=")[1];

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="videos-container">
      <div className="video-wrapper">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="video-description">
        <h2>Video Description</h2>
        <p>This is a placeholder description for the video.</p>
      </div>
    </div>
  );
}

export default Videos;
