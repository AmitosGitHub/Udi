import React, { useState } from 'react'
import { connect } from 'react-redux'

export const OrderGallery = ({ gridImgs }) => {
  return (
    <section className="order-gallery">
      <div className="grid-img">
        {gridImgs.map((item, idx) => (
          // console.log('item:',item)
          <div className={'box box' + idx}>
            {/* <h3>{'box box' + idx}</h3> */}
            <img src={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
