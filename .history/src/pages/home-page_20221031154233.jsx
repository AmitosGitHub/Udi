import React from 'react'

import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { CompanyCarousel } from '../cmps/home-page/company-filter'
import { CriteriasCarousel } from '../cmps/home-page/criterias-carousel'
import { ProductList } from '../cmps/home-page/product-list'

import Home1 from '../../assets/img/product/home1.jpeg'
import Home2 from '../../assets/img/product/home2.jpeg'
import Home3 from '../../assets/img/product/home3.jpeg'
import Men from '../../assets/img/product/shirt-men.jpeg'
import Men2 from '../../assets/img/product/shirt-men2.jpeg'
import Men3 from '../../assets/img/product/shirt-men3.jpeg'
import Women1 from '../../assets/img/product/women1.jpeg'
import Women2 from '../../assets/img/product/women2.jpeg'
import Women3 from '../../assets/img/product/women3.jpeg'

export const HomePage = () => {
  const imgs = [Home1, Home2, Home3, Men, Men2, Men3, Women1, Women2, Women3]
  const products = [
    { _id: '101', title: 'home', type: 'home', imgUrl: imgs[0] },
    { _id: '102', title: 'home', type: 'home', imgUrl: imgs[1] },
    { _id: '103', title: 'home', type: 'home', imgUrl: imgs[2] },
    { _id: '104', title: 'men', type: 'men', imgUrl: imgs[3] },
    { _id: '105', title: 'men', type: 'men', imgUrl: imgs[4] },
    { _id: '106', title: 'men', type: 'men', imgUrl: imgs[5] },
    { _id: '107', title: 'women', type: 'wome', imgUrl: imgs[6] },
    { _id: '108', title: 'women', type: 'wome', imgUrl: imgs[7] },
    { _id: '109', title: 'women', type: 'wome', imgUrl: imgs[8] },
    { _id: '107', title: 'women', type: 'wome', imgUrl: imgs[0] },
    { _id: '108', title: 'women', type: 'wome', imgUrl: imgs[1] },
    { _id: '109', title: 'women', type: 'wome', imgUrl: imgs[2] },
    { _id: '107', title: 'women', type: 'wome', imgUrl: imgs[3] },
    { _id: '108', title: 'women', type: 'wome', imgUrl: imgs[4] },
    { _id: '109', title: 'women', type: 'wome', imgUrl: imgs[5] },
  ]
  return (
    <section className="home-page">
      <div className="container-filter">
        <div className="company-filter">
          <CompanyCarousel />
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
