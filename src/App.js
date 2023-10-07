import "./App.css";
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import OurPartners from "./components/OurPartners";
import Register from "./components/shared/Register";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import { CompanyProfile } from './components/company';
import Review from './components/shared/Review'
import ConfirmationCode from './components/shared/ConfirmationCode'


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
      <Footer></Footer>
      <CompanyProfile></CompanyProfile>
      <Review></Review>
      <ConfirmationCode></ConfirmationCode>
      <Routes>
        <Route path="companyProfile" element={<CompanyProfile></CompanyProfile>}></Route>
      </Routes>
    </div>
  );
}

export default App;







