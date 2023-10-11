import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom';
import home from '../../../assets/images/dashboard/home.svg';
import profile from '../../../assets/images/dashboard/profile.svg'
import companies from '../../../assets/images/dashboard/user.svg'


export default function Menu() {
  return (
    <div className="menu">
    
      {/* Static Content */}
        <div className="item">
          <span className="title">Admin dashboard</span>
            <Link to='users' className="listItem">
              <img src={home} alt="" />
              <span className="listItemTitle">Home</span>
            </Link>
            <Link to='users' className="listItem">
              <img src={profile} alt="" />
              <span className="listItemTitle">Users</span>
            </Link>
            <Link to='companies' className="listItem">
              <img src={companies} alt="" />
              <span className="listItemTitle">Companies</span>
            </Link>
            <Link to='users' className="listItem">
              <img src={companies} alt="" />
              <span className="listItemTitle">Compensations</span>
            </Link>
            <Link to='users' className="listItem">
              <img src={companies} alt="" />
              <span className="listItemTitle">Contracts</span>
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
