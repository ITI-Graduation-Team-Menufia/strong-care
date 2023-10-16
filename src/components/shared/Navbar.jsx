import React from "react";
import { Trans } from "react-i18next";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { FormOne } from "../FormOne";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" dir="rtl">
      <div className="container fw-bold">
        <span className="navbar-brand" >
          <Link to="/">
            <img src={logo} alt="Bootstrap" width="100" />
          </Link>
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
              <Link to="/">
                <span className="nav-link" aria-current="page" >
                  <Trans i18nKey="home"></Trans>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='compensation'>
                <span className="nav-link" aria-current="page" >
                  <Trans i18nKey="claimsAndCompensations"></Trans>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" >
                <Trans i18nKey="investors"></Trans>
              </span>
            </li>
            <li className="nav-item">
              <Link to='aboutus'>
                <span className="nav-link" >
                  <Trans i18nKey="aboutUs"> </Trans>
                </span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle p-1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person p-1 lead"></i>
                <Trans i18nKey="register"></Trans>
              </span>
              <ul className="dropdown-menu text-center">
                <li className="w-100">
                  <Link to="signup">
                    <span className="dropdown-item text-center" >
                      <i className="bi bi-people-fill p-1 lead"></i>
                      <Trans i18nKey="signUpAsCorporation"></Trans>
                    </span>
                  </Link>
                </li>
                <li className="w-100">
                  <Link to="register">
                    <span className="dropdown-item text-center" >
                      <i className="bi bi-person-fill p-1 lead"></i>
                      <Trans i18nKey="signUpAsIndividual"></Trans>
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to='signin'>
                <span className="nav-link" >
                  <Trans i18nKey="login"> </Trans>
                </span>
              </Link>
            </li>
            {/* Temporary */}
            {/* <li className="nav-item">
              <span className="nav-link" >
                <Trans i18nKey="personalProfile"> </Trans>
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
