import "./App.css";
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
// import Register from "./components/shared/Register";
import OurPartners from "./components/OurPartners";
<<<<<<< HEAD
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
=======
import Register from "./components/shared/Register";
>>>>>>> 8174dd6c29a2955301b9fc757ffe0fc812e07218

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
<<<<<<< HEAD
      <About ></About>
      <ContactUSForm className="mt-5"></ContactUSForm>
      <Register/>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
      <FormOne></FormOne>
      <FormTwo></FormTwo>
=======
>>>>>>> 8174dd6c29a2955301b9fc757ffe0fc812e07218
      <Slider />
      <BenefitsOverview></BenefitsOverview>
      <Register />
      <About></About>
      <OurPartners></OurPartners>
      <ContactUSForm></ContactUSForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
