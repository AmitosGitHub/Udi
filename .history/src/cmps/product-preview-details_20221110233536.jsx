import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'

export const ProductPreviewDetails = ({ product, onRemoveImg }) => {
  const { isEditor } = useSelector((state) => state.productModule)

  const onRemoveImg123 = (productId) => {
    console.log('v :', productId)
    // dispatch(removeProduct(productId))
  }

  return (
    <section className="product-preview-details">
      <div className="preview-img-container">
        <img src={product} />

        {isEditor && (
          <div className="tools-line">
            <ul>
              <li
                onClick={() => {
                  //   onRemoveImg(product)
                  onRemoveImg123(product)
                }}
              >
                <RiDeleteBinLine />
              </li>
              <li
                onClick={() => {
                  //   onUpdateProduct(product._id)
                  console.log('dsjmicdo')
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
