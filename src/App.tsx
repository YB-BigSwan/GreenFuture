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
import NavBar from "./components/NavBar";
import EventInfo from "./pages/EventInfo";
import WorkshopInfo from "./pages/WorkshopInfo";
import VolunteerInfo from "./pages/VolunteerInfo";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router basename="/GreenFuture">
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/petitions" element={<Petitions />} />
            <Route path="/start_petition" element={<StartPetition />} />
            <Route
              path="/university_partners"
              element={<UniversityPartners />}
            />
            <Route path="/videos" element={<Videos />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/event/:id" element={<EventInfo />} />
            <Route path="/volunteer/:id" element={<VolunteerInfo />} />
            <Route path="/workshop/:id" element={<WorkshopInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
