import { t } from "i18next";
import React from "react";
import { Trans } from "react-i18next";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FormTwo() {
  return (
    <div>
      <div
        className="container-fluid shadow p-3 mt-3 col-12 col-xxl-7 col-xl-7 col-lg-8 col-md-8 col-sm-10"
     dir="rtl"
     >
        <h2 className="fs-2 text-center my-4 primary-text">
          <Trans i18nKey="info"></Trans>
        </h2>
        <form className="d-flex flex-column">
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
              id="validationServer01"
              required
              placeholder={t("area")}
            />
            <div className="invalid-feedback text-danger"><Trans i18nKey="please-enter"></Trans> <Trans i18nKey="area"></Trans></div>
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-1"
              id="validationServer02"
              required
              placeholder={t("records-num")}
            />
            {/* <div className"invalid-feedback"> <Trans i18nKey="please-enter"></Trans> <Trans i18nKey="records-num"></Trans></div> */}
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-1"
              id="validationServer03"
              required
              placeholder={t("legal-name")}
            />
            {/* <div className"invalid-feedback"><Trans i18nKey="please-enter"></Trans> <Trans i18nKey="legal-name"></Trans></div> */}
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-1"
              id="validationServer04"
              required
              placeholder={t("legal-office")}
            />
            {/* <div className"invalid-feedback"><Trans i18nKey="please-enter"></Trans> <Trans i18nKey="legal-office"></Trans></div> */}
          </div>

          <div className="input-group mb-3 mb-4 m-auto w-75">
            <input
              type="text"
              className="form-control  is-invalid rounded-0 border-0 border-bottom border-black-50 mb-1"
              placeholder={t("identity")}
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />

            <button
              className="btn rounded-pill mr-5"
              type="button"
              id="button-addon2"
            >
              <FontAwesomeIcon icon={faPaperclip} />
            </button>
            {/* <div className"invalid-feedback"><Trans i18nKey="please-enter"></Trans> <Trans i18nKey="identity"></Trans></div> */}
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className="form-control  is-invalid rounded-0 border-0 border-bottom border-black-50 mb-1"
              id="validationServer05"
              required
              placeholder={t("company-phone")}
            />
            {/* <div className"invalid-feedback"><Trans i18nKey="please-enter"></Trans> <Trans i18nKey="company-phone"></Trans></div> */}
          </div>

          <div className=" m-auto">
            <button className="request-btn mb-4 text-white" type="submit" >
              <Trans i18nKey="confirm-code"></Trans>
            </button>
          </div>
          <div className="confirm text-center col-lg-4 col-sm-6 py-2 fw-semibold  m-auto border">
          <ul>
            <Trans i18nKey="confirm"></Trans>
            <li className=" mt-3 m-1"><Trans i18nKey="records-num"></Trans></li>
            <li className="m-1"><Trans i18nKey="legal-name"></Trans></li>
            </ul>

        </div>
        </form>
      </div>
    </div>
  );
}
