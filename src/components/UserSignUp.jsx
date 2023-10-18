import React, { useState } from "react";
import { Trans } from "react-i18next";
import { t } from "i18next";
import Joi from 'joi';
import axios from "axios";
import { baseURL } from "../APIs/baseURL";

export function UserSignUp() {
  const phonePattern = /^[0-9]{11}$/;
  
  const [profileImg, setProfileImg] = useState(null);
  const [formData, setFormData] = useState({
    firstName: 'شركة',
    role: 'company',
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    longitude: "50",
    latitude: "50",
  });
  const [submitted, setSubmitted] = useState(false); // Track form submission status

  const schema = Joi.object({
    firstName: Joi.string(), 
    role: Joi.string(),
    longitude: Joi.string(),
    latitude: Joi.string(),
    lastName: Joi.string().min(3).required(),
    phone: Joi.string().pattern(phonePattern).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });

  const [errors, setErrors] = useState({});
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfileImg(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state with user input
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

  const handleSubmit = async (e) => {
    setSubmitted(true); // Form has been submitted

    e.preventDefault();
    const userData = new FormData();
    
  // Iterate through the formData object
  for (const key in formData) {
    // Check if the key is not "confirmPassword"
    if (key !== "confirmPassword") {
      // Append the data to the FormData object
      userData.append(key, formData[key]);
    }
  }
    // Append the profile image to the formData
    userData.append("profileImg", profileImg);

    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      const validationErrors = {};
      error.details.forEach((err) => {
        validationErrors[err.context.key] = err.message;
      });
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(`${baseURL}auth/signup`, userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Signup response:", response.data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };


  return (
    <div className="container-fluid shadow p-3 mt-3 col-12 col-xxl-7 col-xl-7 col-lg-8 col-md-8 col-sm-10" dir="rtl">
      <h2 className="fs-2 text-center my-4 primary-text">
        <Trans i18nKey="info"></Trans>
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <div className="mb-4 m-auto w-75">
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-3`}
            id="validationServer01"
            required
            placeholder={t("name")}
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <div className="invalid-feedback text-danger">
              <Trans i18nKey="please-enter"></Trans>
              <Trans i18nKey="valid-name"></Trans>
            </div>
          )}
        </div>
        <div className="mb-4 m-auto w-75">
          <input
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-3`}
            id="validationServer02"
            required
            placeholder={t("company-tel-num")}
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && (
            <div className="invalid-feedback text-danger">
              <Trans i18nKey="please-enter"></Trans>
              <Trans i18nKey="valid-phone-number"></Trans>
            </div>
          )}
        </div>
        <div className="mb-4 m-auto w-75">
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-3`}
            id="validationServer03"
            required
            placeholder={t("email")}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <div className="invalid-feedback text-danger">
              <Trans i18nKey="please-enter"></Trans>
              <Trans i18nKey="valid-email"></Trans>
            </div>
          )}
        </div>
        <div className="mb-4 m-auto w-75">
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-3`}
            id="validationServer04"
            required
            placeholder={t("password")}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <div className="invalid-feedback text-danger">
              <Trans i18nKey="please-enter"></Trans>
              <Trans i18nKey="valid-password"></Trans>
            </div>
          )}
        </div>
        <div className="mb-4 m-auto w-75">
          <input
            type="password"
            className={`form-control ${errors.confirmPassword&&submitted ? "is-invalid" : ""} rounded-0 border-0 border-bottom border-black-50 mb-3`}
            id="validationServer05"
            required
            placeholder={t("confirm-password")}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        {/* {errors.confirmPassword && submitted && (
            <div className="invalid-feedback text-danger">
              <Trans i18nKey="valid-confirm-password"></Trans>
            </div>
          )} */}
          <label className="form-label">ادخل صورة</label>
          <input
  type="file"
  className="form-control rounded-0 border-0 border-bottom border-black-50 mb-3"
  id="validationServer06"
  accept="image/*"
  name="companyImage"
  onChange={handleFileChange}
/>

        </div>
        <div className="m-auto text-white">
          <button className="request-btn" type="submit">
            <Trans i18nKey="continue"></Trans>
          </button>
        </div>
      </form>
    </div>
  );
}
