import "./App.css";
import BenefitsOverview from "./components/BenefitsOverview";
import Navbar from "./components/shared/Navbar";
import OurPartners from "./components/OurPartners";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
    </div>
  );
}

export default App;
