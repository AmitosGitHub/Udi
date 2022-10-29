import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { InfluentsFilter } from '../cmps/influents-filter.jsx'
import { Advertising } from '../cmps/advertising.jsx'

import { CgMenuGridO } from 'react-icons/cg'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

export const AppHeader = () => {
  const [isDropdwon, setIsDropdwon] = useState(false)

  const getClassName = () => {
    console.log('isDropdwon:', isDropdwon)
    setIsDropdwon(!isDropdwon)
  }

  return (
    <header className="app-header">
      <div className="top-header">
        <NavLink key="//" to="/">
          <div className="main-logo ">
            <h1 className="main-logo-txt">Udi</h1>
            <h1 className="main-logo-sign ">
              <CgMenuGridO />
            </h1>
          </div>
        </NavLink>

        <div className="container-advertising">
          <Advertising />
        </div>

        <div className="main-menu">
          <div className="icon-user">
            <FaRegUserCircle />
          </div>
          <div className="humburger">
            <FiMenu />
          </div>
        </div>

        <div
          className={
            isDropdwon ? 'dropdown-main-menu' : 'dropdown-main-menu active'
          }
          onclick={() => {
            getClassName()
          }}
        >
          <ul>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        </div>
      </div>

      <div className="mid-header">
        <InfluentsFilter />
      </div>
      {/* <div className="bottom-header"><CriteriasFilter /></div> */}
    </header>
  )
}
