import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { CompanyCarousel } from '../cmps/home-page/company-filter'
import { CriteriasCarousel } from '../cmps/home-page/criterias-carousel'
import { ProductList } from '../cmps/home-page/product-list'

import Shylie1 from '../assets/img/shylie1.png'
import Shylie2 from '../assets/img/shylie2.png'

export const InfluentsStore = () => {
  const products = [
    { _id: '101', title: 'home', type: 'home', imgUrl: 'Home1' },
    { _id: '102', title: 'home', type: 'home', imgUrl: 'Home2' },
    { _id: '103', title: 'home', type: 'home', imgUrl: 'Home3' },
    { _id: '104', title: 'men', type: 'men', imgUrl: 'Men' },
    { _id: '105', title: 'men', type: 'men', imgUrl: 'Men2' },
    { _id: '106', title: 'men', type: 'men', imgUrl: 'Men3' },
    { _id: '107', title: 'women', type: 'wome', imgUrl: 'Women1' },
    { _id: '108', title: 'women', type: 'wome', imgUrl: 'Women2' },
    { _id: '109', title: 'women', type: 'wome', imgUrl: 'Women3' },
  ]
  return (
    <section className="influents-store">
      <div className="container-hero">
        <div className="bckg-img1">
          <img src={Shylie1} />
        </div>
        <div className="bckg-img2">
          <img src={Shylie2} />
        </div>
        <div className="criterias-carousel">
          <CriteriasCarousel />
        </div>
      </div>
      <div className="product-list">
        <ProductList products={products} />
      </div>
    </section>
  )
}
