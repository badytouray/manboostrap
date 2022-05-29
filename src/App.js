import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Slider from './Components/Slider/Slider';
import NavBar from './Components/NavBar/Navbar';
import About from "./Components/About/About";
import Faq from "./Components/FAQ/Faq";
import ContactUs from "./Components/ContactUs/ContactUs" 
import Events from "./Components/Events/Events";
import Interviews from "./Components/Interviews/Interviews";
import Gallary from "./Components/Gallary/Gallary";
import Videos from "./Components/Videos/Videos";
import ManCrew from "./Components/ManCrew/ManCrew";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import RampaigeInterview from "./Components/Interviews/RampaigeInterview/RampaigeInterview";
import News from "./Components/News/News";
import Home from "./Components/Home/Home";
import LatestInterview from "./Components/LatestInterview/LatestInterview";
import FeaturedEvents from "./Components/Home/FeaturedEvents/FeaturedEvents";
import Store from "./Components/Store/Store";
import MensClothing from "./Components/Store/MensClothing/MensClothing";
import WomensClothing from "./Components/Store/WomensClothing/WomensClothing";
import PromoteEvents from "./Components/PromoteEvents/PromoteEvents";
import Careers from "./Components/Careers/Careers";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";







function App() {
  return (
    <> 
    <NavBar />
    <Slider />
    
    <Router>
      <Routes>
        <Route path="about-us"  element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/picture-gallery" element={<Gallary />} />
        <Route path="/video-gallery" element={<Videos />} />
        <Route path="/man-crew" element={<ManCrew />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
        <Route path="/maddy-v-interview" element={<RampaigeInterview/>} />
        {/* <Route path="/rampaige-interview" element={<RampaigeInterview/>} /> */}
        <Route path="/news" element={<News/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/latest-interview" element={<LatestInterview />} />
        <Route path="/latest-interview" element={<FeaturedEvents />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mens-clothing" element={<MensClothing />} />
        <Route path="/womens-clothing" element={<WomensClothing />} />
        <Route path="/list-events" element={<PromoteEvents />} />
        <Route path="/careers" element={<Careers />} />
        
 
        
      </Routes>
    </Router>
    {/* <ScrollToTop /> */}
    
    </>
  );
}

export default App;
