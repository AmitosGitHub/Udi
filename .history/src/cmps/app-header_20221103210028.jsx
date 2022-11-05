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
            <h1 className="main-logo-txt">Udi</h1>
            <h1 className="main-logo-sign ">
              <CgMenuGridO />
            </h1>
          </div>
        </NavLink>
        <button
          className="main-menu"
          onClick={() => {
            getClassName()
          }}
        >
          <div className="icon-user">
            <FaRegUserCircle />
          </div>
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
            <li>
              <Link
                to={`/login`}
                onClick={() => {
                  getClassName()
                }}
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to={`/signup`}
                onClick={() => {
                  getClassName()
                }}
              >
                {' '}
                Sign up{' '}
              </Link>
            </li>
            <li>
              <Link
                to={`/add-product`}
                onClick={() => {
                  getClassName()
                }}
              >
                {' '}
                Add Product{' '}
              </Link>
            </li>
            <li>
              <Link
                to={`/influents-store`}
                onClick={() => {
                  getClassName()
                }}
              >
                {' '}
                influents store{' '}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-header">
        {isOpenInfluentsFilter() && <InfluentsFilter />}
      </div>
    </header>
  )
}
