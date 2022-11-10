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
import GridLoader from 'react-spinners/GridLoader'

export const HomePage = () => {
  const dispatch = useDispatch()

  // const [isLoading, setIsLoading] = useState(true)
  const { products } = useSelector((state) => state.productModule)
  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  useEffect(() => {
    console.log('rendering....')
    // console.log('helooo:', products)
  }, [products])

  const onRemoveProduct = (productId) => {
    console.log('onRemoveProduct :', productId)
    // dispatch(removeProduct())
  }

  // useEffect(() => {
  //   console.log('isLoading:', isLoading)
  // }, [isLoading])
  if (!products || !products.length)
    return (
      <section className="sweet-loading">
        <GridLoader color="#b836d6" margin={7} size={16} />
      </section>
    )
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
        <ProductList products={products} onRemoveProduct={onRemoveProduct} />
      </div>
    </section>
  )
}
