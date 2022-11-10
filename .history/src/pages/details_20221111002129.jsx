import { React, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'

import { getProductById, removeProduct } from '../store/product.actions.js'
import { OrderGallery } from '../cmps/order-gallery.jsx'

import { HiLink } from 'react-icons/hi'

export const Details = () => {
  const { isEditor } = useSelector((state) => state.productModule)
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

  const onRemoveImg = (productId) => {
    console.log('onRemoveImg :', productId)
    console.log('onRemoveImg :', productId)
    // dispatch(removeProduct(productId))
  }

  const onUpdateLink = (ev) => {
    ev.preventDefault()
    const target = ev.target
    const field = target.name
    let value = target.value
    console.log('ev.target:', ev.target.value)
    console.log('ev:', ev)
    console.log('value:', value)
  }

  const handleChange = (ev) => {
    ev.preventDefault()
    const target = ev.target
    const field = target.name
    let value = target.value
    console.log('field:', field)
    console.log('value:', value)
  }

  const handleChangeDescription = (ev) => {
    ev.preventDefault()
    const target = ev.target
    const field = target.name
    let value = target.value
    console.log('field:', field)
    console.log('value:', value)
  }

  if (!selectedProduct)
    return (
      <section className="sweet-loading">
        <h1>loading...</h1>
        {/* <PulseLoader color="#99a8a4" margin={7} size={16} /> */}
      </section>
    )
  return (
    <section className="details">
      <div className="container-details glass">
        <header>
          {!isEditor && (
            <a href={selectedProduct.link}>
              <button>
                Link
                <span>
                  <HiLink />
                </span>
              </button>
            </a>
          )}
          {isEditor && (
            <form className="update-link" onSubmit={onUpdateLink}>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="https://example.com"
                required
                // value={newProduct.link}
                onChange={handleChange}
              />
              <button>update</button>
            </form>
          )}
        </header>
        <main>
          <div className="grid-img">
            <OrderGallery
              gridImgs={selectedProduct.imgUrls}
              onRemoveImg={onRemoveImg}
            />
          </div>
        </main>
        <footer>
          {!isEditor && <p>{selectedProduct.summary}</p>}
          {isEditor && (
            <div className="update-description">
              <textarea
                placeholder="insert description"
                type="text"
                name="description"
                id="description"
                required
                onChange={handleChangeDescription}
              />
              <button>update</button>
            </div>
          )}
        </footer>
      </div>

      <div className="bkg-circle1 circle"></div>
      <div className="bkg-circle2 circle"></div>
      <div className="bkg-circle3 circle"></div>
      <div className="bkg-circle4 circle"></div>
    </section>
  )
}
