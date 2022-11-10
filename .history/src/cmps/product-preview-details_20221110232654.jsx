import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'

export const ProductPreviewDetails = ({ product, onRemoveProduct }) => {
  const { isEditor } = useSelector((state) => state.productModule)
  return (
    <section className="product-preview-details">
      <div className="preview-img-container">
        <img src={product} />

        {isEditor && (
          <div className="tools-line">
            <ul>
              <li
                onClick={() => {
                  onRemoveProduct(product)
                }}
              >
                <RiDeleteBinLine />
              </li>
              <li
                onClick={() => {
                  //   onUpdateProduct(product._id)
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
