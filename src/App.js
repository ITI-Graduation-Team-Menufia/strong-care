import "./App.css";
<<<<<<< HEAD
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
=======
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
>>>>>>> 8174dd6c29a2955301b9fc757ffe0fc812e07218
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
// import Register from "./components/shared/Register";
import OurPartners from "./components/OurPartners";
import Register from "./components/shared/Register";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider />
<<<<<<< HEAD
>>>>>>> b7d47dd87c67b394e3b5171fdf7b1b5ff803ed5e
=======
      <BenefitsOverview></BenefitsOverview>
      <Register />
      <About></About>
      <OurPartners></OurPartners>
      <ContactUSForm></ContactUSForm>
      <Footer></Footer>
>>>>>>> 8174dd6c29a2955301b9fc757ffe0fc812e07218
    </div>
  );
}

export default App;
