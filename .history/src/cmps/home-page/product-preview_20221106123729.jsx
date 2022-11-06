import React from 'react'

import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const ProductPreview = ({ product }) => {
  return (
    <section className="product-preview">
      <Link to={`/details/${product._id}`} className="info">
        <div className="preview-img-container">
          {/* <img src={Home1} /> */}
          <img src={product.imgUrls[0]} />
        </div>
      </Link>
    </section>
  )
}
