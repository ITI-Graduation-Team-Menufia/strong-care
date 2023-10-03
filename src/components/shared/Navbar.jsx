import React from "react";
import { Trans } from "react-i18next";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" dir="rtl">
      <div className="container fw-bold">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="100" />
        </a>
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
              <a className="nav-link" aria-current="page" href="#">
                <Trans i18nKey="home"></Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <Trans i18nKey="claimsAndCompensations"></Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Trans i18nKey="investors"></Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Trans i18nKey="aboutUs"> </Trans>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle p-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person p-1 lead"></i>
                <Trans i18nKey="login"></Trans>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-center" href="#">
                    <i className="bi bi-people-fill p-1 lead"></i>
                    <Trans i18nKey="loginAsCorporation"></Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-center" href="#">
                    <i className="bi bi-person-fill p-1 lead"></i>
                    <Trans i18nKey="loginAsIndividual"></Trans>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
