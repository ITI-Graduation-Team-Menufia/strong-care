import "./App.css";
<<<<<<< HEAD
// import Review from "./components/shared/Review";
import ConfirmationCode from "./components/shared/ConfirmationCode";
// import Navbar from "./components/shared/Navbar";
// import Register from "./components/shared/Register";

function App() {
  return (
    <div >
      {/* <Navbar></Navbar>
      <Register/> */}
      <ConfirmationCode/>
      {/* <Review/> */}

=======
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
>>>>>>> b7d47dd87c67b394e3b5171fdf7b1b5ff803ed5e
    </div>
  );
}

export default App;
