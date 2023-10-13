import React from 'react'
import { Footer, Navbar } from '../../components/shared';
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { SignIn } from '../../components/shared/SignIn';
import { Register } from '../../components/home';
import { FormOne } from '../../components/FormOne';
import { FormTwo } from '../../components/FormTwo';
import { Review } from '../../components/Review';
import { ConfirmPassword } from '../../components/shared/ConfirmPassword';
import { ForgotPassword } from '../../components/shared/ForgotPassword';
import { WarrantyContract } from '../../components/shared/WarrantyContract';
import { ConfirmationCode } from '../../components/ConfirmationCode';
import Warranty from '../../components/Warranty';
import { Compensation } from '../../components/Compensation';
// import { About, BenefitsOverview, ContactUSForm, OurPartners, Register, Slider } from '../../components/home/index'


export default function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<FormOne></FormOne>}></Route>
        <Route path='/signup2' element={<FormTwo></FormTwo>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/confirmpassword' element={<ConfirmPassword></ConfirmPassword>}></Route>
        <Route path='/forgetpassword' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/warrantycontract' element={<WarrantyContract></WarrantyContract>}></Route>
        <Route path='/confirmationcode' element={<ConfirmationCode></ConfirmationCode>}></Route>
        <Route path='/warranty' element={<Warranty></Warranty>}></Route>
        <Route path='/compensation' element={<Compensation></Compensation>}></Route>


      </Routes>
      <Footer></Footer>
    </>
  )
}
