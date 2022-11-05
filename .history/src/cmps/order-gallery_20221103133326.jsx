import React, { useState } from 'react'
import { connect } from 'react-redux'

export const OrderGallery = ({ gridImgs }) => {
  return (
    <section className="order-gallery">
      {gridImgs.length === 1 && (
        <div className="grid-img grid-img1">
          {gridImgs.map((item, idx) => (
            <div className={'box box' + idx}>
              <img src={item} />
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
          {gridImgs.map((item, idx) => (
            <div className={'box box' + idx}>
              <img src={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
