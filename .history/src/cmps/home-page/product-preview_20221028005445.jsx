import React from 'react'

import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

export const ProductPreview = ({ product }) => {
  return (
    <section className="product-preview">
      <Link to={`/home`} className="info">
        <div className="preview-text-container"></div>
      </Link>
    </section>
  )
}
