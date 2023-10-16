import React from 'react';
import logo from '../../../assets/images/logo.png';
import notifications from '../../../assets/images/dashboard/notifications.svg';
import { Trans } from "react-i18next";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'red'}}>
      <div className="container fw-bold">
        <span className="navbar-brand" >
          <img src={logo} alt="Bootstrap" width="70" />
          <span>Admin Dashboard</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <span className="nav-link" >
              <img
            src={logo}
            alt=""
            style={{ width: '50px', height:'50px', margin:'0 10px' }}

          />
          <span>Admin Name</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

