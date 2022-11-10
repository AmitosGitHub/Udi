import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'

export const ProductPreview = ({ product }) => {
  const { isEditor } = useSelector((state) => state.productModule)

  return (
    <section className="product-preview">
      <Link to={`/details/${product._id}`} className="info">
        <div className="preview-img-container">
          <img src={product.imgUrls[0]} />
          {isEditor && (
            <div className="tools-line">
              <ul>
                <li>
                  <RiDeleteBinLine />
                </li>
                <li>
                  <FiEdit2 />
                </li>
              </ul>
            </div>
          )}
        </div>
      </Link>
    </section>
  )
}
