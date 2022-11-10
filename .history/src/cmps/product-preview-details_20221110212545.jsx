import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { ProductPreviewDetails } from '../cmps/product-preview-details.jsx'

import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'

export const ProductPreviewDetails = () => {
  const { isEditor } = useSelector((state) => state.productModule)
  return <section className="product-preview-details">cdc</section>
}
