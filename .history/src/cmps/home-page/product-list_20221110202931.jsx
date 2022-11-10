import React from 'react'

import { ProductPreview } from '../home-page/product-preview'

export const ProductList = ({ products, onRemoveProduct }) => {
  return (
    <section className="product-list card-layout">
      {products.map((product) => (
        <div className="preview-card" key={product._id}>
          <ProductPreview
            key={product._id}
            product={product}
            onRemoveProduct={onRemoveProduct}
          />
        </div>
      ))}
    </section>
  )
}
