import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { baseURL } from '../../APIs/baseURL';   

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleLogin = async () => {
      try {
        const response = await fetch(`${baseURL}auth/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
          const { token } = await response.json();
          // Your JWT token

// Split the token into its parts
            // Split the token into its parts
        const [header, payload, signature] =await token.split('.');

// Decode the base64-encoded header and payload
        const decodedHeader = atob(header);
        const decodedPayload = atob(payload);

// Parse the JSON data in the header and payload
        const headerData = JSON.parse(decodedHeader);
        const payloadData = JSON.parse(decodedPayload);

        localStorage.setItem('token', token);
        console.log('Decoded Header:', headerData);
        console.log('Decoded Payload:', payloadData);
        if (payloadData.role ==='admin'){

              window.location.href = '/admindashboard';
        }else if(payloadData.role ==='company'){
            window.location.href = '/';
        }

          
          // Store the token in localStorage
    
          // Redirect to the protected route or dashboard
        } else {
          // Handle authentication error
          
        }
      } catch (error) {
        // Handle network or other errors
        console.log(error)
      }
    };
    
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
                            onClick={handleLogin}

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
