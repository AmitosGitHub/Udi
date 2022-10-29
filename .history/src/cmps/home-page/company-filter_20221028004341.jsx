import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Alo } from '../../assets/img/company-logo/alo.jpeg'
import { Asos } from '../../assets/img/company-logo/asos.jpeg'
import { Amzn } from '../../assets/img/company-logo/amzn.jpeg'
import { Aliexpress } from '../../assets/img/company-logo/aliexpress.jpeg'
import { Ebay } from '../../assets/img/company-logo/ebay.jpeg'
import { Terminalx } from '../../assets/img/company-logo/terminalx.jpeg'
import { Iherb } from '../../assets/img/company-logo/iherb.jpeg'
import { Next } from '../../assets/img/company-logo/next.jpeg'

export const CompanyCarousel = () => {
  return (
    <section className="company-filter">
      <ul>
        <li>
          <div className="content-criterias">
            <img src={Ebay} />
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <img src={Next} />
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <img src={Alo} />
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <img src={Terminalx} />
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <img src={Aliexpress} />
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <img src={Iherb} />
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <img src={Amzn} />
          </div>
        </li>
        <li>
          <div className="content-criterias">
            <img src={Asos} />
          </div>
        </li>
      </ul>
    </section>
  )
}
