import "./App.css";
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Navbar from "./components/shared/Navbar";
import Register from "./components/shared/Register";
import OurPartners from "./components/OurPartners";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

function App() {
  return (
    <div className="App h-100 d-flex-column">
      <Navbar></Navbar>
      <About ></About>
      <ContactUSForm className="mt-5"></ContactUSForm>
      <Register/>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
      <FormOne></FormOne>
      <FormTwo></FormTwo>
      <Slider />
    </div>
  );
}

export default App;
