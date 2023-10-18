import React, { useState } from "react";
import { Trans } from "react-i18next";
import Joi from "joi";
import { baseURL } from "../../APIs/baseURL";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: null, password: null });

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(8).required(),
  });

  const validateForm = () => {
    const { error } = schema.validate({ email, password }, { abortEarly: false });
    const validationErrors = { email: null, password: null };

    if (error) {
      error.details.forEach((err) => {
        validationErrors[err.context.key] = err.message;
      });
    }

    setErrors(validationErrors);

    return !error;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(`${baseURL}auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const { token } = await response.json();
          // Your JWT token

          const [header, payload, signature] = token.split(".");

          const decodedHeader = atob(header);
          const decodedPayload = atob(payload);

          const headerData = JSON.parse(decodedHeader);
          const payloadData = JSON.parse(decodedPayload);

          localStorage.setItem("token", token);
          console.log("Decoded Header:", headerData);
          console.log("Decoded Payload:", payloadData);
          if (payloadData.role === "admin") {
            window.location.href = "/admindashboard";
          } else if (payloadData.role === "company") {
            window.location.href = "/";
          }
        } else {
          // Handle authentication error
        }
      } catch (error) {
        // Handle network or other errors
        console.log(error);
      }
    }
  };

  return (
    <div className="my-5 p-5">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center my-5">
          <form className="col-md-5 col-sm-7 col-9 d-flex flex-column">
            <div className="form-outline mb-4">
              <input
                type="email"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                } rounded-0 border-0 border-bottom border-black-50 mb-3`}
                id="form2Example1"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <div className="invalid-feedback text-danger">
                  {errors.email}
                </div>
              )}
              <label className="form-label" htmlFor="form2Example1">
                <Trans i18nKey="email"></Trans>
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                } rounded-0 border-0 border-bottom border-black-50 mb-3`}
                id="form2Example2"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <div className="invalid-feedback text-danger">
                  {errors.password}
                </div>
              )}
              <label className="form-label" htmlFor="form2Example2">
                <Trans i18nKey="password"></Trans>
              </label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-start align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    <Trans i18nKey="remember-me"></Trans>
                  </label>
                </div>
              </div>

              <div className="col text-end">
                <a href="#!">
                  <Trans i18nKey="forget-password"></Trans>
                </a>
              </div>
            </div>

            <div className="text-center mt-3">
              <button
                type="button"
                className="request-btn text-white col-4 mb-5"
                onClick={handleLogin}
              >
                <Trans i18nKey="sign-in"></Trans>
              </button>
              <p>
                <Trans i18nKey="not-member"></Trans>
                <b></b>
                <a href="#!">
                  <Trans i18nKey="register"></Trans>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
