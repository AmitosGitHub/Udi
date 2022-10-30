import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import Grid1 from '../assets/img/grid/grid1.jpeg'
import Grid3 from '../assets/img/grid/grid3.jpeg'
import Grid4 from '../assets/img/grid/grid4.jpeg'

export const AddProduct = () => {
  const [approve, setApprove] = useState({
    isGallery: false,
    isLink: false,
    isImg: false,
    isDescription: false,
  })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="add-product">
      <header>
        <div className="box select-gallery">select gallery</div>
        <div className="line"></div>
        <div className="box approve-link">insert link</div>
        <div className="line"></div>
        <div className="box approve-img">upload image</div>
        <div className="line"></div>
        <div className="box approve-description">insert description</div>
      </header>

      <div className="modal">
        <img src={Grid1} />
        <img src={Grid3} />
        <img src={Grid4} />
      </div>

      <main>
        <div className="main-header">
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            required
          />
        </div>

        <div className="container-gallery-img">
          <div className="gallery-img1">
            <div className="box box1">1</div>
          </div>
          <div className="gallery-img2">
            <div className="box box1">1</div>
            <div className="box box2">2</div>
            <div className="box box3">3</div>
          </div>
          <div className="gallery-img3">
            <div className="box box1">1</div>
            <div className="box box2">2</div>
            <div className="box box3">3</div>
            <div className="box box4">4</div>
            <div className="box box5">5</div>
          </div>
        </div>

        <div className="main-footer">
          <input type="text" placeholder="insert description" />
        </div>
      </main>
    </section>
  )
}
