import React from 'react'
import './Navbar.scss'
import logo from '../../../assets/images/logo.png';
import notifications from '../../../assets/images/dashboard/notifications.svg';

export default function Navbar() {
  return (
    <div className='navBar'>
      <div className="logo">
        <img src={logo} alt="" style={{ width: '50px' }} />
        <span>Strong Care</span>
      </div>
      <div className="icons">
        <div className="notification">
          <img src={notifications} alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src={logo}
            alt=""
          />
          <span>Ahmed</span>
        </div>
      </div>
    </div>
  )
}
