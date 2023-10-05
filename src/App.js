import "./App.css";
<<<<<<< HEAD
import ContactUSForm from "./components/ContactUSForm";
import FormOne from "./components/FormOne";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import FormTwo from "./components/FormTwo";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <About></About> */}
      {/* <ContactUSForm></ContactUSForm> */}
      <FormOne></FormOne>
      <FormTwo></FormTwo>
=======
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Navbar from "./components/shared/Navbar";
import Register from "./components/shared/Register";
import OurPartners from "./components/OurPartners";

function App() {
  return (
    <div className="App h-100 d-flex-column">
      <Navbar></Navbar>
      <About ></About>
      <ContactUSForm className="mt-5"></ContactUSForm>
      <Register/>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
      <Slider />
>>>>>>> 054122decf1ce2f1742af0e04f6c82ceba92fd67
    </div>
  );
}

export default App;
