import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { GrHome } from 'react-icons/gr'
import { TbShirt } from 'react-icons/tb'
import { GiConverseShoe } from 'react-icons/gi'
import { GiLargeDress } from 'react-icons/gi'

export const CriteriasFilter = () => {
  return (
    <section className="criterias-filter">
      <ul>
        <li>
          <GrHome />
        </li>
        <li>
          <TbShirt />
        </li>
        <li>
          <GiConverseShoe />
        </li>
        <li>
          <GiLargeDress />
        </li>
      </ul>
    </section>
  )
}
