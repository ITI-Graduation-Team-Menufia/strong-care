import "./App.css";
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Register from "./components/shared/Register";
import OurPartners from "./components/OurPartners";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider />
      <About ></About>
      <ContactUSForm className="mt-5"></ContactUSForm>
      <Register/>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
      <Register />
      <Footer></Footer>
    </div>
  );
}

export default App;
