import React from 'react'

import { ProductPreview } from '../home-page/product-preview'

export const ProductList = ({ products, onRemoveProduct, onUpdateProduct }) => {
  return (
    <section className="product-list card-layout">
      {products.map((product) => (
        <div className="preview-card" key={product._id}>
          <ProductPreview
            key={product._id}
            product={product}
            onRemoveProduct={onRemoveProduct}
            onUpdateProduct={onUpdateProduct}
          />
        </div>
      ))}
    </section>
  )
}
