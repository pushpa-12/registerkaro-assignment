import "./App.css";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Clients from "./Components/Clients";
import Company from "./Components/Company";
import CompanyLogo from "./Components/CompanyLogo";
import EmailSub from "./Components/EmailSub";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import ManageService from "./Components/ManageService";
import ProcessSection from "./Components/ProcessSection";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial";
import VideoInstruction from "./Components/VideoInstruction";
import WhyChoose from "./Components/WhyChoose";
import WhyRegisterkaro from "./Components/WhyRegisterkaro";
function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Company />
      <Service />
      <About />
      <WhyChoose />
      <VideoInstruction />
      <Clients/>
      <ProcessSection/>
      <Blog/>
      <Testimonial/>
      <Faq/>
      <ManageService/>
      <WhyRegisterkaro/>
      <EmailSub/>
      <CompanyLogo/>
      <Footer/>
    </div>
  );
}

export default App;
