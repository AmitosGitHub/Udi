import React, { useState } from 'react'
import { connect } from 'react-redux'

export const ApprovelChain = ({ newProduct }) => {
  return (
    <section className="approvel-chain">
      <div
        className={
          newProduct.link ? 'box approve-link green' : 'box approve-link'
        }
      >
        insert link
      </div>
      <div className="line"></div>
      <div
        className={
          gridImgs.length ? 'box approve-img green' : 'box approve-img'
        }
      >
        upload image
      </div>
      <div className="line"></div>
      <div
        className={
          newProduct.description
            ? 'box approve-description green'
            : 'box approve-description'
        }
      >
        insert description
      </div>
    </section>
  )
}
