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
            <h1 className="main-logo-txt">Travelo</h1>
          </div>
        </NavLink>
      </div>
    </header>
  )
}
