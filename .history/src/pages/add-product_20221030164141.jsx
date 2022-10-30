import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const AddProduct = () => {
  return (
    <section className="add-product">
      <header>
        <ul>
          <li>x</li>
          <li>save</li>
        </ul>
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
          <div className="gallery-img1">
            <div className="box1"></div>
          </div>
          <div className="gallery-img2">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
          <div className="gallery-img3">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
            <div className="box5"></div>
          </div>
        </div>
      </main>
    </section>
  )
}
