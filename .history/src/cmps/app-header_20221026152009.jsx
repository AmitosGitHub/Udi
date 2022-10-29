import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <header className="app-header ">
      <div className="top-header">
        <NavLink key="//" to="/">
          <div className="main-logo">
            <h1 className="main-logo-txt">Udi</h1>
          </div>
        </NavLink>

        <div className="nav-site">
          <ul>
            <li>AliExpress</li>
            <li>Amazon</li>
            <li>Next</li>
            <li>Asos</li>
          </ul>
        </div>

        <div className="top-header-mobile">
          <div className="humburger">- - -</div>
          <div className="icon-user">😇</div>
        </div>

        <div className="main-menu">
          <div className="humburger">- - -</div>
          <div className="icon-user">😇</div>
        </div>
      </div>
      <div className="mid-header"></div>
      <div className="bottom-header"></div>
    </header>
  )
}
