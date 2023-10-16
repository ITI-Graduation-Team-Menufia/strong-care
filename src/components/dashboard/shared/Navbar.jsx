import React, {  useState } from 'react'
import './Navbar.scss'
import logo from '../../../assets/images/logo.png';
import notifications from '../../../assets/images/dashboard/notifications.svg';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../APIs/baseURL';import { Trans } from "react-i18next";

export default function Navbar() {
  const [shouldFetch, setShouldFetch] = useState(true);
  
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the JWT from local storage or cookies
    localStorage.removeItem('token');
    
    // Access the history object using the useHistory hook
    
    // Redirect to the login page
    navigate('/signin');
  };
  const token = localStorage.getItem("token"); // Replace 'token' with the key you use to store the JWT
    if(!token){
      return false;
    }else {
      const [header, payload, signature] = token.split('.');

      // Decode the base64-encoded header and payload
              const decodedHeader = atob(header);
              const decodedPayload = atob(payload);
      
      // Parse the JSON data in the header and payload
              const headerData = JSON.parse(decodedHeader);
              const payloadData = JSON.parse(decodedPayload);
              console.log(payloadData);
              
    }
    const handleUser = async (id) => {
      try {
        const response = await fetch(`${baseURL}/users/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json(); // Parse the response data
          console.log(data); // Log the response data
        } else {
          console.log('Request failed with status:', response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    // Old nav
    // <div className='container-fluid'>
    //   <div className='navBar d-flex justify-content-between'>
    //   <div className="logo">
    //     <img src={logo} alt="" style={{ width: '70px' }} />
    //     <span>Strong Care</span>
    //   </div>
    //   {/* <div className="icons">
    //     <div className="notification">
    //       <img src={notifications} alt="" />
    //       <span>1</span>
    //     </div>
    //     <div className="user">
    //       <img
    //         src={logo}
    //         alt=""
    //         style={{ width: '50px', height:'50px' }}
    //       />
    //       <span>Ahmed</span>
    //     </div>
    //   </div> */}
    //   <div className="user">
    //       <img
    //         src={logo}
    //         alt=""
    //         style={{ width: '50px', height:'50px' }}
    //       />
    //       <span>Ahmed</span>
    //     </div>
    // </div>
    // </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'red'}}>
      <div className="container fw-bold">
        <span className="navbar-brand" >
          <img src={logo} alt="Bootstrap" width="70" />
          <span>Admin Dashboard</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <span className="nav-link" >
              <img
            src={logo}
            alt=""
            style={{ width: '50px', height:'50px', margin:'0 10px' }}

          />
          <span>Admin Name</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

