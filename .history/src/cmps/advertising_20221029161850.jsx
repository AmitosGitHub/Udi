import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import { utilService } from '../services/util.service.js'

import Aliexpress from '../assets/img/advertising/aliexpress.jpeg'
import SoyMilk from '../assets/img/advertising/soy-milk.jpeg'
import Shofrsal from '../assets/img/advertising/shofrsal.jpeg'

export const Advertising = () => {
  const [advertising, setAdvertising] = useState({
    timer: null,
    Advertising: 'Aliexpress',
  })
  useEffect(() => {
    const intervalId = setInterval(() => {
      getAdvertising()
    }, 6000)
    return () => clearInterval(intervalId)
  }, [])

  const getAdvertising = () => {
    const advertisings = [Aliexpress, SoyMilk, Shofrsal]
    const idx = utilService.getRandomIntInclusive(0, 2)
    console.log('idx:', idx)
    console.log('advertisings[idx]:', advertisings[idx])
    return advertisings[idx]
  }

  return (
    <section className="advertising">
      <img src={getAdvertising()} />
    </section>
  )
}
