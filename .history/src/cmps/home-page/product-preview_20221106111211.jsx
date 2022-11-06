import React from 'react'

import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const ProductPreview = ({ product }) => {
  console.log('product:', product)
  console.log('product:', product.imgUrl)
  // console.log('Home1:', Home1)
  return (
    <section className="product-preview">
      <Link to={`/details`} className="info">
        <div className="preview-img-container">
          {/* <img src={Home1} /> */}
          <img src={product.imgUrls[1]} />
        </div>
      </Link>
    </section>
  )
}
