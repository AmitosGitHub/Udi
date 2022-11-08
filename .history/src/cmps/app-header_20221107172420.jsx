import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { InfluentsFilter } from '../cmps/influents-filter.jsx'
import { Advertising } from '../cmps/advertising.jsx'

import { CgMenuGridO } from 'react-icons/cg'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import { RiDashboardLine } from 'react-icons/ri'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { BiStore } from 'react-icons/bi'
import { RiLoginCircleFill } from 'react-icons/ri'

export const AppHeader = () => {
  const [isDropdwon, setIsDropdwon] = useState(true)

  let location = useLocation()

  const isOpenInfluentsFilter = () => {
    const strParams = location.pathname
    const params = strParams.split('/')
    return params.length === 2 && !params[1]
  }

  const getClassName = () => {
    setIsDropdwon(!isDropdwon)
  }

  return (
    <header className="app-header">
      <div className="top-header">
        <div className="container-advertising">{/* <Advertising /> */}</div>
      </div>

      <div className="mid-header">
        <NavLink key="//" to="/">
          <div className="main-logo ">
            <h1 className="main-logo-sign ">
              <CgMenuGridO />
            </h1>
            <h1 className="main-logo-txt">Udi</h1>
          </div>
        </NavLink>
        <button
          className="main-menu"
          onClick={() => {
            getClassName()
          }}
        >
          <div className="icon-user">{/* <FaRegUserCircle /> */}</div>
          <div className="humburger">
            <FiMenu />
          </div>
        </button>

        <div
          className={
            isDropdwon ? 'dropdown-main-menu' : 'dropdown-main-menu active'
          }
        >
          <ul>
            <Link
              to={`/login`}
              onClick={() => {
                getClassName()
              }}
            >
              <li>
                <h2>
                  <FiLogIn />
                </h2>
                <h3>Log in</h3>
              </li>
            </Link>
            <Link
              to={`/signup`}
              onClick={() => {
                getClassName()
              }}
            >
              <li>
                <h2>
                  <RiLoginCircleFill />
                </h2>
                <h3>Sign up </h3>
              </li>
            </Link>
            <Link
              to={`/add-product`}
              onClick={() => {
                getClassName()
              }}
            >
              <li>
                <h2>
                  <MdOutlineDashboardCustomize />
                </h2>
                <h3>Add Product </h3>
              </li>
            </Link>
            <Link
              to={`/influents-store`}
              onClick={() => {
                getClassName()
              }}
            >
              <li>
                <h2>
                  <BiStore />
                </h2>
                <h3>Influents store </h3>
              </li>
            </Link>
            <Link
              to={`/dashboard`}
              onClick={() => {
                getClassName()
              }}
            >
              <li>
                <h2>
                  <RiDashboardLine />
                </h2>
                <h3>Dashboard</h3>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="bottom-header">
        {isOpenInfluentsFilter() && <InfluentsFilter />}
      </div>
    </header>
  )
}
