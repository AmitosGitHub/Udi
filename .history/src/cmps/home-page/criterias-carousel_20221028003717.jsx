import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { BiHome } from 'react-icons/bi'
import { TbShirt } from 'react-icons/tb'
import { GiConverseShoe } from 'react-icons/gi'
import { GiLargeDress } from 'react-icons/gi'
import { BsHandbag } from 'react-icons/bs'
import { MdSportsSoccer } from 'react-icons/md'
import { GiSittingDog } from 'react-icons/gi'

export const CriteriasCarousel = () => {
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
