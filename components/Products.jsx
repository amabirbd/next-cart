import React from 'react'
import ProductCard from './ProductCard'

function Products({products}) {
  
  return (
    <div>
        <h2>Products</h2>
        <div className="products flex flex-wrap">
            {
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default Products