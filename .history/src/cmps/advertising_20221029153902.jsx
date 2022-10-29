import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { Aliexpress } from '../../assets/img/advertising/aliexpress.jpeg'
import { SoyMilk } from '../../assets/img/advertising/soy-milk.jpeg'
import { Shofrsal } from '../../assets/img/advertising/shofrsal.jpeg'

export const Advertising = () => {
  return (
    <section className="advertising">
      <img src={SoyMilk} />
    </section>
  )
}
