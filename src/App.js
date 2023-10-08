import "./App.css";
import About from "./components/About";
import ContactUSForm from "./components/ContactUSForm";
import BenefitsOverview from "./components/BenefitsOverview";
import Slider from "./components/Slider";
import OurPartners from "./components/OurPartners";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import { CompanyProfile } from "./components/company";
import Review from "./components/Review";
import ConfirmationCode from "./components/ConfirmationCode";

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
      <FormOne></FormOne>
      <FormTwo></FormTwo>
      <CompanyProfile></CompanyProfile>
      <Review></Review>
      <ConfirmationCode></ConfirmationCode>
      <Routes>
        <Route
          path="companyProfile"
          element={<CompanyProfile></CompanyProfile>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
