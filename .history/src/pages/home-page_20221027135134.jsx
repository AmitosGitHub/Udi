import React from 'react'

import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { CarouselProduct } from '../cmps/home-page/carousel-product.jsx'
import { WomenFashion } from '../cmps/home-page/women-fashion.jsx'
import { MenFashion } from '../cmps/home-page/men-fashion.jsx'
import { KidsFashion } from '../cmps/home-page/kids-fashion.jsx'
import { HomeTools } from '../cmps/home-page/home-tools.jsx'
import { BeautyHealth } from '../cmps/home-page/beauty-health.jsx'

export const HomePage = () => {
  return (
    <section className="home-page">
      {/* <div className="carousel-product">
        <CarouselProduct />
      </div> */}

      <div className="women-fashion">
        <WomenFashion />
      </div>

      <div className="men-fashion">
        <MenFashion />
      </div>

      <div className="kids-fashion">
        <KidsFashion />
      </div>

      <div className="home-tools">
        <HomeTools />
      </div>

      <div className="beauty-health">
        <BeautyHealth />
      </div>
    </section>
  )
}
