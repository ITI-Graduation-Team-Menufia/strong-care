import React from "react";
import { Trans } from "react-i18next";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary text-success bg-dark"
      dir="rtl"
      style={{ color: "#416cb4" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="90" height="90" />
        </a>
        <a className="navbar-brand" href="#">
          <Trans i18nKey="home">Home</Trans>
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Trans i18nKey="claimsAndCompensation">
                  المطالبات والتعويض
                </Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Trans i18nKey="investors">المستثمرون</Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Trans i18nKey="aboutUs">من نحن</Trans>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Trans i18nKey="login">الدخول</Trans>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <Trans i18nKey="action">Action</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Trans i18nKey="anotherAction">Another action</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Trans i18nKey="somethingElse">Something else here</Trans>
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
