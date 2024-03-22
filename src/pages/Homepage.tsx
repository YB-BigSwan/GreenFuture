import AboutUs from "../components/Homepage/AboutUs";
import ContentSection from "../components/Homepage/ContentSection";
import HeroSection from "../components/Homepage/HeroSection";
import Highlights from "../components/Homepage/Highlights";
import "../styles/homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <HeroSection />
      <h2 className="highlight-header">Highlights</h2>
      <Highlights />
      <ContentSection />
      <h2 className="highlight-header">About Us</h2>
      <AboutUs />
    </div>
  );
}

export default Homepage;
