import React from "react";
import { Footer, Navbar } from "../components/shared";
import { Route, Routes } from "react-router-dom";
import { Home } from './home/Home';
import { SignIn } from "../components/SignIn";
import { Register } from "../components/home";
import { FormOne } from "../components/FormOne";
import { FormTwo } from "../components/FormTwo";
import { Review } from "../components/Review";
import { ConfirmPassword } from "../components/ConfirmPassword";
import { ForgotPassword } from "../components/ForgotPassword";
import { WarrantyContract } from "../components/WarrantyContract";
import { ConfirmationCode } from "../components/ConfirmationCode";
import Warranty from "../components/Warranty";
import { Compensation } from "../components/Compensation";
import AboutUs from "../components/AboutUs";
// import { About, BenefitsOverview, ContactUSForm, OurPartners, Register, Slider } from '../../components/home/index'

export function Main() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<FormOne/>}/>
        <Route path="/signup2" element={<FormTwo/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route
          path="/confirmpassword"
          element={<ConfirmPassword/>}
        />
        <Route
          path="/forgetpassword"
          element={<ForgotPassword/>}
        />
        <Route
          path="/warrantycontract"
          element={<WarrantyContract/>}
        />
        <Route
          path="/confirmationcode"
          element={<ConfirmationCode/>}
        />
        <Route path="/warranty" element={<Warranty/>}/>
        <Route
          path="/compensation"
          element={<Compensation/>}
        />
      </Routes>
      <Footer/>
    </>
  );
}
