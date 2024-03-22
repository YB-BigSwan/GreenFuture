import HeroSection from "../components/Homepage/HeroSection";
import Highlights from "../components/Homepage/Highlights";
import "../styles/homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <HeroSection />
      <Highlights />
    </div>
  );
}

export default Homepage;
