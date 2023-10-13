import React from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";
export default function Warranty() {
  return (
    <div
      className="container-fluid shadow p-3 mt-3 col-12 col-xxl-7 col-xl-7 col-lg-8 col-md-8 col-sm-10"
      dir="rtl"
    >
      <h2 className="fs-2 text-center my-4 primary-text">
        <Trans i18nKey="create-warranty-contract"></Trans>
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
          <div className="invalid-feedback text-danger">
            <Trans i18nKey="please-enter"></Trans>
            <Trans i18nKey="client-name"></Trans>
          </div>
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer01"
            required
            placeholder={t("device-company")}
          />
          {/* <div className="invalid-feedback text-danger"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="device-company"></Trans> </div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer01"
            required
            placeholder={t("device-type")}
          />
          {/* <div className="invalid-feedback text-danger"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="device-type"></Trans></div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer01"
            required
            placeholder={t("device-color")}
          />
          {/* <div className="invalid-feedback text-danger"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="device-color"></Trans></div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer01"
            required
            placeholder={t("device-serial-number")}
          />
          {/* <div className="invalid-feedback text-danger"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="device-serial-number"></Trans></div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("client-phone")}
          />
          {/* <div className="invalid-feedback"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="client-phone"></Trans></div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            type=""
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer01"
            placeholder={t("email")}
          />
        </div>

        {/* <div className=" mb-4 m-auto w-75">
          <input
            type="date"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            
          
          />
           <div className="invalid-feedback"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="purchase-date"></Trans></div> 
        </div> */}
        <div className=" mb-4 m-auto w-75">
          <select className="form-select">
            <option selected>
              <Trans i18nKey={"warranty-period"}></Trans>
            </option>
            <option defaultValue="1">
              <Trans i18nKey={"one-year"}></Trans>
            </option>
            <option defaultValue="2">
              <Trans i18nKey={"two-year"}></Trans>
            </option>
          </select>

          {/* <div className="invalid text-danger"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="purchase-date"></Trans></div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            readOnly
            disabled
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("agent-identification-number")}
          />
          {/* <div className="invalid-feedback"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="agent-identification-number"></Trans></div> */}
        </div>
        <div className=" mb-4 m-auto w-75">
          <input
            readOnly
            disabled
            type="text"
            className="form-control is-invalid rounded-0 border-0 border-bottom border-black-50 mb-3"
            id="validationServer02"
            required
            placeholder={t("shop-name")}
          />
          {/* <div className="invalid-feedback"><Trans i18nKey="please-enter"></Trans><Trans i18nKey="shop-name"></Trans> </div> */}
        </div>

        <div className=" m-auto text-white">
          <button className="request-btn btn btn-primary px-5" type="submit">
            <Trans i18nKey="create"></Trans>
          </button>

        </div>
      </form>
    </div>
  );
}