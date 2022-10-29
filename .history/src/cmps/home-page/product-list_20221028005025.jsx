import React from 'react'

import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { ProductPreview } from '../cmps/home-page/product-preview'

export const ProductList = ({ products }) => {
  return (
    <section className="card-layout">
      {products.map((product) => (
        <div className="preview-card" key={product._id}>
          <ProductPreview key={product._id} products={products} />
        </div>
      ))}
    </section>
  )
}
