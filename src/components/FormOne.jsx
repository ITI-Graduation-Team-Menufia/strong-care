import React from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";
export default function FormOne() {
  return (
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
            placeholder={t("company-name")}
          />
          <div class="invalid-feedback">
            <Trans i18nKey="plz-enter"></Trans>
            <Trans i18nKey="company-name"></Trans>
          </div>
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("company-tel-num")}
          />
          {/* <div class="invalid-feedback">
            <Trans i18nKey="plz-enter"></Trans>
            <Trans i18nKey="company-tel-num"></Trans>
          </div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer03"
            required
            placeholder={t("company-email")}
          />
          {/* <div class="invalid-feedback">
            <Trans i18nKey="plz-enter"></Trans>
            <Trans i18nKey="company-email"></Trans>
          </div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer04"
            required
            placeholder={t("password")}
          />
          {/* <div class="invalid-feedback">
            <Trans i18nKey="plz-enter"></Trans>
            <Trans i18nKey="password"></Trans>
          </div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control  is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer05"
            required
            placeholder={t("confirm-password")}
          />
          {/* <div class="invalid-feedback">
            <Trans i18nKey="plz"></Trans>
            <Trans i18nKey="confirm-password"></Trans>
          </div> */}
        </div>

        <div className=" m-auto">
          <button className="request-btn" type="submit">
            <Trans i18nKey="continue"></Trans>
          </button>
        </div>
      </form>
    </div>
  );
}
