/* eslint-disable no-restricted-globals */
import "./contactUs.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Trans } from "react-i18next";
export default function ContactUSForm() {
  //adding inputs dynamially
  const Input = ({  type, id, placeholder }) => {
    return (
      <input
        id={id}
        type={type}
        className=" form-control w-75 font-medium border rounded-0 mb-3 mt-2 mx-auto border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
      />
    );
  };
  //submit function
  return (
    <div className="sec">
      <div className="overlay">
        <div
          className="container-fluid text-center  w-75 py-4 contact"
          dir="rtl"
        >
          <h2 className="primary-text mb-4">
            <Trans i18nKey="contact-with-us"></Trans>
          </h2>

          <form action="">
            <div className="name">
              <div className="name">
                <label htmlFor="name" className="gray-text">
                  <Trans i18nKey="name"></Trans>
                </label>
                <Input type="text" id={name} name="name" placeholder={"name"} />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email" className="gray-text">
                <Trans i18nKey="email"></Trans>
              </label>
              <Input type="email" name="email" placeholder={"email"} />
            </div>
            <div className="phone">
              <label htmlFor="phone" className="gray-text">
                <Trans i18nKey="phone"></Trans>
              </label>
              <Input type="phone" name="phone" placeholder={"phone"} />
            </div>
            <div className="msg">
              <label htmlFor="msg" className="gray-text">
                <Trans i18nKey="message"></Trans>
              </label>
              <textarea
                className=" form-control w-75 font-medium border rounded-0 mb-3 mt-2 mx-auto border-slate-300 placeholder:opacity-60"
                type="text"
                name="msg"
                placeholder={"message"}
              />
            </div>
            .
            <button className="request-btn mb-2 form-btn">
              <Trans i18nKey="send"></Trans>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
