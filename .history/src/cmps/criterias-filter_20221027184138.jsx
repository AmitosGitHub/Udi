import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { BiHome } from 'react-icons/bi'
import { TbShirt } from 'react-icons/tb'
import { GiConverseShoe } from 'react-icons/gi'
import { GiLargeDress } from 'react-icons/gi'
import { BsHandbag } from 'react-icons/bs'
import { MdSportsSoccer } from 'react-icons/md'
import { GiSittingDog } from 'react-icons/gi'

export const CriteriasFilter = () => {
  return (
    <section className="criterias-filter">
      <ul>
        <li>
          <div className="content-criterias">
            <BsHandbag />
            <h4>bags</h4>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <MdSportsSoccer />
            <h4>sport</h4>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <GiSittingDog />
            <h4>pet</h4>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <BiHome />
            <h4>home</h4>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <TbShirt />
            <h4>men</h4>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <GiConverseShoe />
            <h4>shoes</h4>
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <GiLargeDress />
            <h4>women</h4>
          </div>
        </li>
      </ul>
    </section>
  )
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//---------ICONS-------------

import Men1 from '../../assets/img/shirt-men.jpeg'
import Men2 from '../../assets/img/shirt-men2.jpeg'
import Men3 from '../../assets/img/shirt-men3.jpeg'

export class CriteriasFilter extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 12,
      slidesToScroll: 10,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1824,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 8,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ],
    }
    return (
      <section className="men-fashion-carousel">
        <div className="main-carousel">
          <Slider {...settings}>
            <Link to={`/stay/explore/type/Amazing pools`}>
              <div className="content-carousel">
                <img src={Men1} />
              </div>
            </Link>
            <div className="content-criterias">
              <BsHandbag />
              <h4>bags</h4>
            </div>
            <div className="content-criterias">
              <MdSportsSoccer />
              <h4>sport</h4>
            </div>
            <div className="content-criterias">
              <GiSittingDog />
              <h4>pet</h4>
            </div>
            <div className="content-criterias">
              <BiHome />
              <h4>home</h4>
            </div>
            <div className="content-criterias">
              <TbShirt />
              <h4>men</h4>
            </div>
            <div className="content-criterias">
              <GiConverseShoe />
              <h4>shoes</h4>
            </div>
            <div className="content-criterias">
              <GiLargeDress />
              <h4>women</h4>
            </div>
          </Slider>
        </div>
      </section>
    )
  }
}
