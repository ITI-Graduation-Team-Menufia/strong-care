import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom';
import home from '../../../assets/images/dashboard/home.svg';
import profile from '../../../assets/images/dashboard/profile.svg'
import companies from '../../../assets/images/dashboard/user.svg'
import warranty from '../../../assets/images/dashboard/order.svg'
import compensation from '../../../assets/images/dashboard/log.svg'




export default function Menu() {
  return (
    <div className="menu">

      {/* Static Content */}
      <div className="item">
        {/* <span className="title">Admin dashboard</span> */}
        <Link to='home' className="listItem">
          {/* <img src={home} alt="" /> */}
          <i class="fa-solid fa-house"></i>
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to='users' className="listItem">
          {/* <img src={profile} alt="" /> */}
          <i class="fa-solid fa-user"></i>
          <span className="listItemTitle">Users</span>
        </Link>
        <Link to='companies' className="listItem">
          {/* <img src={companies} alt="" /> */}
          <i class="fa-solid fa-building"></i>
          <span className="listItemTitle">Companies</span>
        </Link>
        <Link to='companiesmap' className="listItem">
          {/* <img src={map} alt="" /> */}
          <i className='fa-solid fa-map'></i>
          <span className="listItemTitle">Map</span>
        </Link>
        <Link to='warrantycontracts' className="listItem">
          {/* <img src={warranty} alt="" /> */}
          <i class="fa-solid fa-file-signature"></i>
          <span className="listItemTitle">Warranty Contract Requests</span>
        </Link>
        <Link to='compensationrequests' className="listItem">
          {/* <img src={compensation} alt="" /> */}
          <i class="fa-solid fa-file-contract"></i>
          <span className="listItemTitle">Compensation Requests</span>
        </Link>
      </div>

      {/* {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))} */}
    </div>
  )
}
