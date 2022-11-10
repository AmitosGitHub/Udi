import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'

export const ProductPreview = ({
  product,
  onRemoveProduct,
  onUpdateProduct,
}) => {
  const { isEditor } = useSelector((state) => state.productModule)

  return (
    <section className="product-preview">
      <div className="preview-img-container">
        <Link to={`/details/${product._id}`} className="info">
          <img src={product.imgUrls[0]} />
        </Link>
        {isEditor && (
          <div className="tools-line">
            <ul>
              <li
                onClick={() => {
                  onRemoveProduct(product._id)
                }}
              >
                <RiDeleteBinLine />
              </li>
              <li
                onClick={() => {
                  onUpdateProduct(product._id)
                }}
              >
                <FiEdit2 />
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
