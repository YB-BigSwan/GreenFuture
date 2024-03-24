import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Highlights = () => {
  const highlightData = [
    {
      url: "https://assets-global.website-files.com/6218c29f6dd8384e1c520433/65b0e9e76755b5ab932b5da2_sdgs_stamp_Poster02-p-500.png",
      title: "Solve the SDGs Hackathon (Challenge)",
    },
    {
      url: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Clean Our Beaches (Quest)",
    },
    {
      url: "https://assets.change.org/photos/7/uh/bo/lwUhBOFpePChHHd-800x450-noPad.jpg?1528123538",
      title: "Anti-Plastic Petition, Singapore (Petition)",
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/5872dc6a8419c2fab25852a3/e5082d8f-89cb-4a14-8fd9-41e414cdbb35/zero-waste-cooking-kraftylab",
      title: "Sustainable Cook-off Workshop",
    },
    {
      url: "https://www.sitra.fi/app/uploads/2018/05/ficlimatesummit.jpg",
      title: "Finnish Climate Summit (Challenge)",
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
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
