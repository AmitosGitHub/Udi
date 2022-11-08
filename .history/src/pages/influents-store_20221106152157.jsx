import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CompanyCarousel } from '../cmps/home-page/company-filter'
import { CriteriasCarousel } from '../cmps/home-page/criterias-carousel'
import { ProductList } from '../cmps/home-page/product-list'
import GridLoader from 'react-spinners/GridLoader'

import {
  loadProducts,
  addProduct,
  updateProduct,
  removeProduct,
} from '../store/product.actions.js'

import Shylie1 from '../assets/img/shylie1.png'
import Shylie2 from '../assets/img/shylie2.png'

export const InfluentsStore = () => {
  const dispatch = useDispatch()

  // const [isLoading, setIsLoading] = useState(true)
  const { products } = useSelector((state) => state.productModule)
  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(!isLoading)
    // }, 600)
    console.log('helooo:', products)
    dispatch(loadProducts())
  }, [])

  useEffect(() => {
    console.log('rendering....')
    console.log('helooo:', products)
  }, [products])

  if (!products || !products.length)
    return (
      <section className="sweet-loading">
        <GridLoader color="#b836d6" margin={7} size={16} />
      </section>
    )
  return (
    <section className="influents-store">
      <div className="container-hero">
        <div className="bckg-img1">
          <img src={Shylie1} />
        </div>
        <div className="influents-name">
          <h1>Shylie Harel</h1>
        </div>

        <div className="bckg-img2">
          <img src={Shylie2} />
        </div>
      </div>
      <div className="container-filter">
        <div className="company-carousel">
          <CompanyCarousel />
        </div>
        <div className="criterias-carousel">
          <CriteriasCarousel />
        </div>
      </div>
      <div className="product-list">
        <ProductList products={products} />
      </div>
    </section>
  )
}
