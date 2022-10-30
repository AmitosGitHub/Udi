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
  const [selectedGrid, setSelectedGrid] = useState({
    grid1: false,
    grid3: false,
    grid4: true,
  })

  const [isOpen, setIsOpen] = useState(false)

  const setToggleModal = () => {
    setIsOpen(!isOpen)
  }

  const onSelectedGrid = (val) => {
    console.log(val)
    setApprove({
      isGallery: true,
      isLink: approve.isLink,
      isImg: approve.isImg,
      isDescription: approve.isDescription,
    })

    setSelectedGrid((prevState) => ({
      ...prevState,
      [val]: true,
    }))

    setToggleModal()
  }

  return (
    <section className="add-product">
      <header>
        <div
          className="box select-gallery"
          onClick={() => {
            setToggleModal()
          }}
        >
          select gallery
        </div>
        <div className="line"></div>
        <div className="box approve-link">insert link</div>
        <div className="line"></div>
        <div className="box approve-img">upload image</div>
        <div className="line"></div>
        <div className="box approve-description">insert description</div>

        {isOpen && (
          <div className="modal">
            <img
              src={Grid1}
              onClick={() => {
                onSelectedGrid('grid1')
              }}
            />
            <img
              src={Grid3}
              onClick={() => {
                onSelectedGrid('grid3')
              }}
            />
            <img
              src={Grid4}
              onClick={() => {
                onSelectedGrid('grid4')
              }}
            />
          </div>
        )}
      </header>

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
          {selectedGrid.grid1 && (
            <div className="gallery-img1">
              <div className="box box1">1</div>
            </div>
          )}
          {selectedGrid.grid3 && (
            <div className="gallery-img2">
              <div className="box box1">1</div>
              <div className="box box2">2</div>
              <div className="box box3">3</div>
            </div>
          )}
          {selectedGrid.grid4 && (
            <div className="gallery-img3">
              <div className="box box1">1</div>
              <div className="box box2">2</div>
              <div className="box box3">3</div>
              <div className="box box4">4</div>
              <div className="box box5">5</div>
            </div>
          )}
        </div>

        <div className="main-footer">
          <input type="text" placeholder="insert description" />
        </div>
      </main>
    </section>
  )
}
