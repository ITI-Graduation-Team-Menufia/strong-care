import "./App.css";
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
// import Register from "./components/shared/Register";
import OurPartners from "./components/OurPartners";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import Register from "./components/shared/Register";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider />
      <BenefitsOverview></BenefitsOverview>
      <Register />
      <About></About>
      <OurPartners></OurPartners>
      <ContactUSForm></ContactUSForm>
      <FormOne></FormOne>
      <FormTwo></FormTwo>
      <Footer></Footer>
    </div>
  );
}

export default App;
