import React from 'react'
import { Trans } from 'react-i18next'

export const SignIn = () => {
    return (
        <div className='my-5 p-5'>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center my-5">
                <form className="col-md-5 col-sm-7 col-9 d-flex flex-column">
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            className="form-control rounded-0 border-0 border-bottom border-black-50 mb-3"
                            id="form2Example1"
                            required
                        />
                        <label className="form-label" htmlFor="form2Example1">
                            <Trans i18nKey="email"></Trans>
                        </label>
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            className="form-control rounded-0 border-0 border-bottom border-black-50 mb-3"
                            id="form2Example2"
                            required
                        />
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
                            <a href="#!"><Trans i18nKey="forget-password"></Trans></a>
                        </div>
                    </div>


                    <div className="text-center mt-3">
                        <button
                            type="button"
                            className="request-btn text-white col-4 mb-5"
                        >
                            <Trans i18nKey="sign-in"></Trans>
                        </button>
                        <p>
                            <Trans i18nKey="not-member"></Trans><b></b><a href="#!"> <Trans i18nKey="register"></Trans></a>
                        </p>

                    </div>
                </form>
            </div>
        </div>
        </div>

    )
}
