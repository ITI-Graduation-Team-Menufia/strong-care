import "./App.css";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import OurPartners from "./components/OurPartners";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider className="mx-auto" />
      <Footer></Footer>
      <BenefitsOverview></BenefitsOverview>
      <OurPartners></OurPartners>
      <Slider />
    </div>
  );
}

export default App;
