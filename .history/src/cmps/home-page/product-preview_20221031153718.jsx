import React from 'react'

import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import Home1 from '../../assets/img/product/home1.jpeg'
import Home2 from '../../assets/img/product/home2.jpeg'
import Home3 from '../../assets/img/product/home3.jpeg'
import Men from '../../assets/img/product/shirt-men.jpeg'
import Men2 from '../../assets/img/product/shirt-men2.jpeg'
import Men3 from '../../assets/img/product/shirt-men3.jpeg'
import Women1 from '../../assets/img/product/women1.jpeg'
import Women2 from '../../assets/img/product/women2.jpeg'
import Women3 from '../../assets/img/product/women3.jpeg'

export const ProductPreview = ({ product }) => {
  console.log('product:', product.imgUrl)
  return (
    <section className="product-preview">
      <Link to={`/home`} className="info">
        <div className="preview-img-container">
          {/* <img src={Home1} /> */}
          <img src={product.imgUrl} />
        </div>
      </Link>
    </section>
  )
}
