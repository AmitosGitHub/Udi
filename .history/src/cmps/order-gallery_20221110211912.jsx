import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { ProductPreview } from '../cmps/home-page/product-preview'

import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'

export const OrderGallery = ({ gridImgs }) => {
  const { isEditor } = useSelector((state) => state.productModule)
  return (
    <section className="order-gallery">
      {gridImgs.length === 1 && (
        <div className="grid-img grid-img1">
          {gridImgs.map((item, idx) => (
            <div className={'box box' + idx}>
              <img src={item} />
              {isEditor && (
                <div className="tools-line">
                  <ul>
                    <li
                      onClick={() => {
                        // onRemoveProduct(product._id)
                      }}
                    >
                      <RiDeleteBinLine />
                    </li>
                    <li
                      onClick={() => {
                        // onUpdateProduct(product._id)
                      }}
                    >
                      <FiEdit2 />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {gridImgs.length === 2 && (
        <div className="grid-img grid-img2">
          {gridImgs.map((item, idx) => (
            <div className={'box box' + idx}>
              <img src={item} />
            </div>
          ))}
        </div>
      )}

      {gridImgs.length === 3 && (
        <div className="grid-img grid-img3">
          {gridImgs.map((item, idx) => (
            <div className={'box box' + idx}>
              <img src={item} />
            </div>
          ))}
        </div>
      )}

      {gridImgs.length === 4 && (
        <div className="grid-img grid-img4">
          {gridImgs.map((item, idx) => (
            <div className={'box box' + idx}>
              <img src={item} />
            </div>
          ))}
        </div>
      )}

      {gridImgs.length === 5 && (
        <div className="grid-img grid-img5">
          {gridImgs.map((product, idx) => (
            <ProductPreview
              key={product._id}
              product={product}
              //  onRemoveProduct={onRemoveProduct}
              //  onUpdateProduct={onUpdateProduct}
            />
            // <div className={'box box' + idx}>
            //   <img src={item} />
            //   {/* {isEditor && (
            //     <div className="tools-line">
            //       <ul>
            //         <li
            //           onClick={() => {
            //             // onRemoveProduct(product._id)
            //           }}
            //         >
            //           <RiDeleteBinLine />
            //         </li>
            //         <li
            //           onClick={() => {
            //             // onUpdateProduct(product._id)
            //           }}
            //         >
            //           <FiEdit2 />
            //         </li>
            //       </ul>
            //     </div>
            //   )} */}
            // </div>
          ))}
        </div>
      )}
    </section>
  )
}
