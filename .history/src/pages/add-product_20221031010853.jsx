import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import Grid1 from '../assets/img/grid/grid1.jpeg'
import Grid3 from '../assets/img/grid/grid3.jpeg'
import Grid4 from '../assets/img/grid/grid4.jpeg'

import { BsImage } from 'react-icons/bs'

export const AddProduct = () => {
  const [approve, setApprove] = useState({
    isGallery: false,
    isLink: false,
    isImg: false,
    isDescription: false,
  })
  const [selectedGrid, setSelectedGrid] = useState({
    firstTime: true,
    grid1: false,
    grid3: false,
    grid4: false,
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
    setSelectedGrid({
      firstTime: false,
      grid1: false,
      grid3: false,
      grid4: false,
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
        <div className="top-header">
          <div
            className={
              approve.isGallery
                ? 'box select-gallery green'
                : 'box select-gallery'
            }
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
          <div className="line"></div>
          <div className="box date-picker">Time</div>

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
        </div>
        <div className="bottom-header">
          <button>Add</button>
        </div>
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
              <div className="box box1">
                <BsImage />
              </div>
            </div>
          )}
          {selectedGrid.grid3 && (
            <div className="gallery-img2">
              <div className="box box1">
                <BsImage />
              </div>
              <div className="box box2">
                <BsImage />
              </div>
              <div className="box box3">
                <BsImage />
              </div>
            </div>
          )}
          {(selectedGrid.grid4 || selectedGrid.firstTime) && (
            <div className="gallery-img3">
              <div className="box box1">
                <BsImage />
              </div>
              <div className="box box2">
                <BsImage />
              </div>
              <div className="box box3">
                <BsImage />
              </div>
              <div className="box box4">
                <BsImage />
              </div>
              <div className="box box5">
                <BsImage />
              </div>
            </div>
          )}
        </div>

        <div className="main-footer">
          {/* <input type="text" placeholder="insert description" /> */}
          <textarea />
        </div>
      </main>
    </section>
  )
}
