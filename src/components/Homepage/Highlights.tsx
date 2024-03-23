import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Highlights = () => {
  const highlightData = [
    {
      url: "https://plus.unsplash.com/premium_photo-1683134044077-c8af4c752c5f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683134044077-c8af4c752c5f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683134044077-c8af4c752c5f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683134044077-c8af4c752c5f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683134044077-c8af4c752c5f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati. Odio possimus dolores earum sint, fugit tempore, accusantium magni ipsa cumque quidem veniam corrupti temporibus.",
    },
  ];

  return (
    <div className="highlights-wrapper">
      <div className="highlights-container">
        {highlightData.map((highlight, index) => (
          <Card className="highlight-card" key={index}>
            <CardActionArea>
              <CardMedia
                className="card-img"
                component="img"
                image={highlight.url}
                alt="card thumbnail image"
              />
              <CardContent className="card-content">
                <Typography className="card-title">
                  {highlight.title}
                </Typography>
                <Typography className="card-description">
                  {highlight.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
