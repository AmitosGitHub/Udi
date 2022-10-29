import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const CriteriasFilter = () => {
  return (
    <section className="criterias-filter">
      <ul>
        <li>🔧</li>
        <li>🔨</li>
        <li>🪛</li>
        <li>🛠</li>
      </ul>
    </section>
  )
}
