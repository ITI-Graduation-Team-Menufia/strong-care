import "./App.css";
// import FormOne from "./components/FormOne";
// import FormTwo from "./components/FormTwo";
// import { Route, Routes } from "react-router-dom";
// import { Footer, Navbar } from "./components/shared";
// import { CompanyProfile } from './components/company';
// import Review from './components/Review'
// import ConfirmationCode from './components/ConfirmationCode'
// import Home from "./pages/Home/Home";
import Compensation from "./components/Compensation";


function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <FormOne></FormOne>
      <FormTwo></FormTwo>
      <CompanyProfile></CompanyProfile>
      <Review></Review>
      <ConfirmationCode></ConfirmationCode>
      <Routes>
        <Route path="companyProfile" element={<CompanyProfile></CompanyProfile>}></Route>
      </Routes> */}
      <Compensation />
    </div>
  );
}

export default App;







