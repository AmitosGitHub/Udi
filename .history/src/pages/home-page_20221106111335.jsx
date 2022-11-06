import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'

import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CompanyCarousel } from '../cmps/home-page/company-filter'
import { CriteriasCarousel } from '../cmps/home-page/criterias-carousel'
// import { CriteriasFilter } from '../cmps/criterias-filter'
import { ProductList } from '../cmps/home-page/product-list'
import {
  loadProducts,
  addProduct,
  updateProduct,
  removeProduct,
} from '../store/product.actions.js'

export const HomePage = () => {
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

  // useEffect(() => {
  //   console.log('isLoading:', isLoading)
  // }, [isLoading])
  // if (isLoading)
  // return (
  //   <section className="sweet-loading">
  //     <PulseLoader color="#99a8a4" margin={7} size={16} />
  //   </section>
  // )
  return (
    <section className="home-page">
      <div className="container-filter">
        <div className="company-filter">
          <CompanyCarousel />
        </div>
        <div className="criterias-carousel">
          <CriteriasCarousel />
          {/* <CriteriasFilter /> */}
        </div>
      </div>

      <div className="product-list">
        <ProductList products={products} />
      </div>
    </section>
  )
}
