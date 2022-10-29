import React from 'react'

import { ProductPreview } from '../cmps/home-page/product-preview.jsx'

export const ProductList = ({ products }) => {
  return (
    <section className="card-layout">
      {products.map((product) => (
        <div className="preview-card" key={product._id}>
          <ProductPreview key={product._id} product={product} />
        </div>
      ))}
    </section>
  )
}
