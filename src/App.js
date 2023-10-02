import "./App.css";
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
      <Register/>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
      <Footer></Footer>
    </div>
  );
}

export default App;
