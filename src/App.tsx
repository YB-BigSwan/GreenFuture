import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import Events from "./pages/Events";
import Partners from "./pages/Partners";
import Petitions from "./pages/Petitions";
import StartPetition from "./pages/StartPetition";
import UniversityPartners from "./pages/UniversityPartners";
import Videos from "./pages/Videos";
import Volunteer from "./pages/Volunteer";
import Workshops from "./pages/Worshops";

import "./App.css";

function App() {
  return (
    <>
      <Router basename="/GreenFuture">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/petitions" element={<Petitions />} />
          <Route path="/start_petition" element={<StartPetition />} />
          <Route path="/university_partners" element={<UniversityPartners />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/workshops" element={<Workshops />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
