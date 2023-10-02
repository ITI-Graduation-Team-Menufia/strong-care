import "./App.css";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Navbar from "./components/shared/Navbar";
import Register from "./components/shared/Register";
import OurPartners from "./components/OurPartners";

function App() {
  return (
    <div className="App h-100 d-flex-column">
      <Navbar></Navbar>
      <Register/>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
      <Slider />
    </div>
  );
}

export default App;
