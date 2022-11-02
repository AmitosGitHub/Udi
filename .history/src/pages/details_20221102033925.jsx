import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import Ex1 from '../assets/img/ex-details/ex1.webp'
import Ex2 from '../assets/img/ex-details/ex2.webp'
import Ex3 from '../assets/img/ex-details/ex3.webp'
import Ex4 from '../assets/img/ex-details/ex4.webp'
import Ex5 from '../assets/img/ex-details/ex5.webp'

export const Details = () => {
  const gridImgs = [Ex1, Ex2, Ex3, Ex4, Ex5]
  return (
    <section className="details">
      <div className="grid-img">
        {gridImgs.map((item, idx) => (
          // console.log('item:',item)
          <div className={'box box' + idx}>
            <img src={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
