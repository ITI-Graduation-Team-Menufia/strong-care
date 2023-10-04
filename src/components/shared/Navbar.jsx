import React from "react";
import { Trans } from "react-i18next";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" dir="rtl">
      <div className="container fw-bold">
        <span className="navbar-brand" >
          <img src={logo} alt="Bootstrap" width="100" />
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
              <span className="nav-link" aria-current="page" >
                <Trans i18nKey="home"></Trans>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" aria-current="page" >
                <Trans i18nKey="claimsAndCompensations"></Trans>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" >
                <Trans i18nKey="investors"></Trans>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" >
                <Trans i18nKey="aboutUs"> </Trans>
              </span>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle p-1"
                
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person p-1 lead"></i>
                <Trans i18nKey="login"></Trans>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item text-center" >
                    <i className="bi bi-people-fill p-1 lead"></i>
                    <Trans i18nKey="loginAsCorporation"></Trans>
                  </span>
                </li>
                <li>
                  <span className="dropdown-item text-center" >
                    <i className="bi bi-person-fill p-1 lead"></i>
                    <Trans i18nKey="loginAsIndividual"></Trans>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
