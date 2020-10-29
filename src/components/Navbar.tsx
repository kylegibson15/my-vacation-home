import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
      <NavLink to="/my-vacation-home" className="brand-logo">
        My Vacation Home
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li cy-data="home-nav-link">
          <NavLink to="/my-vacation-home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/my-vacation-home/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
