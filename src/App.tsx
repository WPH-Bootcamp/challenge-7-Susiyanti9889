import "./index.css";
import Navbar from "./components/layout/Navbar";
import Frame from "./components/layout/Frame";
import Companylogo from "./components/layout/Companylogo";
import End from "./components/layout/End";
import OurProcess from "./components/layout/OurProcess";
import Smart from "./components/layout/Smart";
import Industry from "./components/layout/Industry";
import Portfolio from "./components/layout/Portfolio";
import Testimonials from "./components/layout/Testimonials";
import Consultation from "./components/layout/Consultation";
import ContactForm from "./components/layout/ContactForm";
import Footer from "./components/layout/Footer";

function App() {
  return (
      <div>
      <Navbar/>
      <Frame/>
      <Companylogo/>
      <End/>
      <OurProcess/>
      <Smart/>
      <Industry/>
      <Portfolio/>
      <Testimonials/>
      <Consultation/>
      <ContactForm/>
      <Footer/>
      </div>
  );
}


export default App;
