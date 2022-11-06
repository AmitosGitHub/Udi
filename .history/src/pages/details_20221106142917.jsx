import { React, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { getProductById } from '../store/product.actions.js'
import { OrderGallery } from '../cmps/order-gallery.jsx'

import { HiLink } from 'react-icons/hi'

export const Details = () => {
  const { selectedProduct } = useSelector((state) => state.productModule)
  const params = useParams().id
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('params:', params)
    dispatch(getProductById(params))
    // console.log('selectedProduct', selectedProduct)
    // console.log(' user:', user)
  }, [])

  useEffect(() => {
    console.log('selectedProduct', selectedProduct)
  }, [selectedProduct])

  if (!selectedProduct)
    return (
      <section className="sweet-loading">
        <h1>loading...</h1>
        {/* <PulseLoader color="#99a8a4" margin={7} size={16} /> */}
      </section>
    )
  return (
    <section className="details">
      <header>
        <a href={selectedProduct.link}>
          {' '}
          Link
          <span>
            <HiLink />
          </span>
        </a>
      </header>
      <main>
        <div className="grid-img">
          <OrderGallery gridImgs={selectedProduct.imgUrls} />
          {/* {selectedProduct.imgUrls.map((item, idx) => (
            // console.log('item:',item)
            <div className={'box box' + idx}>
              <img src={item} />
            </div>
          ))} */}
        </div>
      </main>
      <footer>
        <p>{selectedProduct.summary}</p>
      </footer>
    </section>
  )
}
