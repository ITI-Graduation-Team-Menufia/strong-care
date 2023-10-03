import React from "react";
import { Trans } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faGlobe,
  faHeadset,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "./about.css";
export default function About() {
  return (
    <div>
      <div
        className="about row container-fluid my-5 align-items-center "
        dir="rtl"
      >
        <div className="about-content col-md-6 d-flex justify-content-start pe-5">
          <div>
            <h2 className="fs-1 text mb-4 primary-text">
              <Trans i18nKey="about-us" values="ar"></Trans>
            </h2>
            <p className="about-description fs-5 text ">
              <Trans i18nKey="about-description"></Trans>
            </p>
            <p className="mb-1 distinguish-text">
              <Trans i18nKey="distinguish"></Trans>
            </p>
            <hr className="mt-0 mb-4 w-75" />
            <div className="distungish row gap-3">
              <div className="distungish-item d-flex gap-2 align-items-center col-xxl-5 col-xl-5 col-sm-6">
                <FontAwesomeIcon icon={faGlobe} className="fs-5 primary-text" />
                <p className="fs-5 my-auto gray-text">
                  <Trans i18nKey="coverage"></Trans>
                </p>
              </div>
              <div className="distungish-item d-flex gap-2 align-items-center col-xxl-5 col-xl-5 col-sm-6">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="fs-5 primary-text"
                />
                <p className="fs-5 my-auto gray-text">
                  <Trans i18nKey="customer-service"></Trans>
                </p>
              </div>
              <div className="distungish-item d-flex gap-2 align-items-center col-xxl-5 col-xl-5 col-sm-6">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="fs-5 primary-text"
                />
                <p className="fs-5 my-auto gray-text">
                  <Trans i18nKey="easy-usage"></Trans>
                </p>
              </div>
              <div className="distungish-item d-flex gap-2 align-items-center col-xxl-5 col-xl-5 col-sm-6">
                <FontAwesomeIcon icon={faAward} className="fs-5 primary-text" />
                <p className="fs-5 my-auto gray-text">
                  <Trans i18nKey="quality-of-service"></Trans>
                </p>
              </div>
            </div>
            <hr className="mt-4 w-75" />
          </div>
        </div>
        <div className="about-img col-md-6 d-flex justify-content-center">
          <img
            className="h-75 d-inline-block w-75 rounded-2 main-shadow"
            src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
