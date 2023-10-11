import React from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";
export default function Compensation() {
  return (
    <div
      className="container-fluid shadow p-3 mt-3 col-12 col-xxl-7 col-xl-7 col-lg-8 col-md-8 col-sm-10"
      dir="rtl"
    >
      <h2 className="fs-2 text-center my-4 primary-text">
        <Trans i18nKey="compensation"></Trans>
      </h2>
      <form className="d-flex flex-column">
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer01"
            required
            placeholder={t("client-name")}
          />
          <div class="invalid-feedback text-danger">
            <Trans i18nKey="requiredName"></Trans>
            {/* <Trans i18nKey="company-name"></Trans> */}
          </div>
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="number"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("client-tel-num")}
          />

        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="number"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("Warranty-number")}
          />
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("Warranty-owner")}
          />
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("device-model")}
          />
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("damage")}
          />
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="file"
            accept=".jpg, .png, .pdf"
            className="form-control is-invalid rounded-0  border border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("photo-of-damage")}
          />
           <div class="invalid-feedback text-danger">
            <Trans i18nKey="photo-of-damage"></Trans>
          </div>
        </div>


        <div className=" m-auto text-white">
          <button  class="btn btn-primary btn-lg" type="submit">
            <Trans i18nKey="send-compensatio-request"></Trans>
          </button>
        </div>
      </form>
    </div>
  );
}