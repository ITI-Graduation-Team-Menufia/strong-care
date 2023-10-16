import React from "react";
import "./AdminDashboard.scss";
import { Navbar, Menu, Footer } from '../../components/dashboard/shared/index';
import Users from "./users/Users";
import Companies from "./companies/Companies";
import { Route, Routes } from "react-router-dom";
import Company from "./companies/Company";
import User from "./users/User";
import Contracts from "./WarrantyContracts/Contracts";
import Compensations from './compensationRequests/Compensations';
import Home from './home/Home'
import Map from './companiesmap/CompaniesMap'
import CompaniesMap from "./companiesmap/CompaniesMap";

export default function AdminDashboard() {

    return (
        <div className="" style={{minHeight:'100vh', backgroundColor: 'var(--primary-bg)', color:'var(--white-text)'}}>
            <Navbar></Navbar>
            <div className="mt-3 d-flex justify-content-between text-light" style={{flex:'1'}}>
                <div className="px-2 border-end border-light">
                    <Menu></Menu>
                </div>
                <div className="w-100 m-2 d-flex justify-content-center">
                    <Routes>
                        <Route path='home' element={<Home></Home>}></Route>    
                        <Route path='users' element={<Users></Users>}></Route>
                        <Route path='users/:id' element={<User></User>}></Route>
                        <Route path='companies' element={<Companies></Companies>}/>
                        <Route path='companies/:id' element={<Company></Company>}></Route>
                        <Route path="companiesmap" element={<CompaniesMap></CompaniesMap>}></Route>
                        <Route path='warrantycontracts' element={<Contracts/>}></Route>
                        <Route path='compensationrequests' element={<Compensations/>}></Route>
                        <Route path='*' element={<Home></Home>}></Route>
                    </Routes>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
