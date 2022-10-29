import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { FaBeer } from 'react-icons/fa'

export const CriteriasFilter = () => {
  return (
    <section className="criterias-filter">
      <ul>
        <li>
          <FaBeer />
        </li>
        <li>
          <FaBeer />
        </li>
        <li>
          <FaBeer />
        </li>
        <li>
          <FaBeer />
        </li>
      </ul>
    </section>
  )
}
