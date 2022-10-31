import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import Shylie1 from '../assets/img/shylie1.png'
import Shylie2 from '../assets/img/shylie2.png'

export const InfluentsStore = () => {
  return (
    <section className="influents-store">
      <div className="bckg-img1">
        <img src={Shylie1} />
      </div>
      <div className="bckg-img2">
        <img src={Shylie2} />
      </div>
    </section>
  )
}
