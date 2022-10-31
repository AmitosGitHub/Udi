import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const InfluentsFilter = () => {
  const [isDropdwon, setIsDropdwon] = useState(false)

  const getClassName = () => {
    console.log('isDropdwon:', isDropdwon)
    setIsDropdwon(!isDropdwon)
  }

  return <section className="influents-store">;revpr.</section>
}
