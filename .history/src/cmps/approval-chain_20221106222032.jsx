import React, { useState } from 'react'
import { connect } from 'react-redux'

export const ApprovalChain = ({ newProduct, gridImgs }) => {
  return (
    <section className="approval-chain">
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
          newProduct.summary
            ? 'box approve-description green'
            : 'box approve-description'
        }
      >
        insert description
      </div>
    </section>
  )
}
