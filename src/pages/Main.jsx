import React from 'react'
import { Footer, Navbar } from '../components/shared';
// import { Route, Routes } from 'react-router-dom'
// import { Home } from '../pages/home/Home';
import { About, BenefitsOverview, ContactUSForm, OurPartners, Register, Slider } from '../components/home/index'


export default function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Slider />
      <BenefitsOverview></BenefitsOverview>
      <Register></Register>
      <About></About>
      <OurPartners></OurPartners>
      <ContactUSForm></ContactUSForm>
      {/* <Routes> */}
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        {/* <Route path='*' element={<Home></Home>}></Route> */}
      {/* </Routes> */}
      <Footer></Footer>
    </>
  )
}
