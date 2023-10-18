import React, { useState } from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";
import Joi from "joi";

export function FormTwo() {
  const [formData, setFormData] = useState({
    area: "",
    recordsNum: "",
    legalName: "",
    legalOffice: "",
    identity: "",
    companyPhone: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    area: Joi.string().required(),
    recordsNum: Joi.string().required(),
    legalName: Joi.string().required(),
    legalOffice: Joi.string().required(),
    identity: Joi.string().required(),
    companyPhone: Joi.string().min(11).required(),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validate the field as the user types
    const fieldSchema = Joi.object({ [name]: schema.extract(name) });
    const { error } = fieldSchema.validate({ [name]: value });

    // Update the errors state for the specific field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error ? error.details[0].message : undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the form validation
    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      // Handle validation errors, e.g., update errors state to display error messages
      const validationErrors = {};
      error.details.forEach((err) => {
        validationErrors[err.context.key] = err.message;
      });
      setErrors(validationErrors);
    } else {
      // If validation passes, you can access the form data in the formData object
      // Proceed with your form submission logic here
    }
  };

  return (
    <div>
      <div className="container-fluid shadow p-3 mt-3 col-12 col-xxl-7 col-xl-7 col-lg-8 col-md-8 col-sm-10" dir="rtl">
        <h2 className="fs-2 text-center my-4 primary-text">
          <Trans i18nKey="info"></Trans>
        </h2>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className={`form-control ${errors.area ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-3`}
              id="validationServer01"
              required
              placeholder={t("area")}
              name="area"
              value={formData.area}
              onChange={handleInputChange}
            />
            {errors.area && (
              <div className="invalid-feedback text-danger">
                <Trans i18nKey="please-enter"></Trans>
                <Trans i18nKey="area"></Trans>
              </div>
            )}
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className={`form-control ${errors.recordsNum ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-1`}
              id="validationServer02"
              required
              placeholder={t("records-num")}
              name="recordsNum"
              value={formData.recordsNum}
              onChange={handleInputChange}
            />
            {errors.recordsNum && (
              <div className="invalid-feedback text-danger">
                <Trans i18nKey="please-enter"></Trans>
                <Trans i18nKey="records-num"></Trans>
              </div>
            )}
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className={`form-control ${errors.legalName ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-1`}
              id="validationServer03"
              required
              placeholder={t("legal-name")}
              name="legalName"
              value={formData.legalName}
              onChange={handleInputChange}
            />
            {errors.legalName && (
              <div className="invalid-feedback text-danger">
                <Trans i18nKey="please-enter"></Trans>
                <Trans i18nKey="legal-name"></Trans>
              </div>
            )}
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className={`form-control ${errors.legalOffice ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-1`}
              id="validationServer04"
              required
              placeholder={t("legal-office")}
              name="legalOffice"
              value={formData.legalOffice}
              onChange={handleInputChange}
            />
            {errors.legalOffice && (
              <div className="invalid-feedback text-danger">
                <Trans i18nKey="please-enter"></Trans>
                <Trans i18nKey="legal-office"></Trans>
              </div>
            )}
          </div>
          <div className="input-group mb-3 mb-4 m-auto w-75">
            <input
              type="text"
              className={`form-control ${errors.identity ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-1`}
              placeholder={t("identity")}
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="identity"
              value={formData.identity}
              onChange={handleInputChange}
            />
            {errors.identity && (
              <div className="invalid-feedback text-danger">
                <Trans i18nKey="please-enter"></Trans>
                <Trans i18nKey="identity"></Trans>
              </div>
            )}
          </div>
          <div className=" mb-4 m-auto w-75">
            <input
              type="text"
              className={`form-control ${errors.companyPhone ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-1`}
              id="validationServer05"
              required
              placeholder={t("company-phone")}
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleInputChange}
            />
            {errors.companyPhone && (
              <div className="invalid-feedback text-danger">
                <Trans i18nKey="please-enter"></Trans>
                <Trans i18nKey="company-phone"></Trans>
              </div>
            )}
          </div>
          <div className="m-auto">
            <button className="request-btn mb-4 text-white" type="submit">
              <Trans i18nKey="confirm-code"></Trans>
            </button>
          </div>
          <div className="confirm text-center col-lg-4 col-sm-6 py-2 fw-semibold m-auto border">
            <ul>
              <Trans i18nKey="confirm"></Trans>
              <li className="mt-3 m-1"><Trans i18nKey="records-num"></Trans></li>
              <li className="m-1"><Trans i18nKey="legal-name"></Trans></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
