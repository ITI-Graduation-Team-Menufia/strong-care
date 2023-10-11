import React from "react";
import "./AdminDashboard.scss";
import { Navbar, Menu, Footer } from '../../components/dashboard/shared/index';
import Users from "./users/Users";
import Companies from "./companies/Companies";
import { Route, Routes } from "react-router-dom";
import Company from "./companies/Company";
import User from "./users/User";

// import Home from "./home/Home";

export default function AdminDashboard() {

    return (
        <div className="main">
            <Navbar></Navbar>
            <div className="Container">
                <div className="menu-container">
                    <Menu></Menu>
                </div>
                <div className="content-container">
                    <Routes>
                        <Route path='/' element={<Users></Users>}></Route>    
                        <Route path='users' element={<Users></Users>}></Route>
                        <Route path='users/:id' element={<User></User>}></Route>
                        <Route path='companies' element={<Companies></Companies>}></Route>
                        <Route path='companies/:id' element={<Company></Company>}></Route>
                        <Route path='*' element={<Users></Users>}></Route>
                    </Routes>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
