import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const AddProduct = () => {
  return (
    <section className="add-product">
      <header>
        <div className="select-gallery">select gallery</div>
        <div className="approve-link">insert link</div>
        <div className="approve-img">upload image</div>
        <div className="approve-description">insert description</div>
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
