import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { BiHome } from 'react-icons/bi'
import { TbShirt } from 'react-icons/tb'
import { GiConverseShoe } from 'react-icons/gi'
import { GiLargeDress } from 'react-icons/gi'

export const CriteriasFilter = () => {
  return (
    <section className="criterias-filter">
      <ul>
        <li>
          <div className="content-criterias">
            <BiHome />
            <h2>home</h2>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <TbShirt />
            <h2>men</h2>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <GiConverseShoe />
            <h2>shoes</h2>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <GiLargeDress />
            <h2>women</h2>
          </div>
        </li>
      </ul>
    </section>
  )
}
