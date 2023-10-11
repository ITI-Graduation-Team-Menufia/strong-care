import React from 'react'
import { Footer, Navbar } from '../components/shared';
import { Route, Routes } from 'react-router-dom'
import { Home } from './home/Home';

export default function Main() {
  return (
    <>
    <Navbar></Navbar>
        <Routes>
            {/* <Route path='/' element={<Home></Home>}></Route> */}
            <Route path='*' element={<Home></Home>}></Route>
        </Routes>
    <Footer></Footer>
    </>
  )
}
