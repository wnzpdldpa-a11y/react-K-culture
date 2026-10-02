import React from 'react'
import ProductCard from './components/ProductCard';

function ProductsList() {
  const products = [
    {
      id: 1,
      name: "무선 키보드",
      price: 39000
    },
    {
      id: 2,
      name: "무선 마우스",
      price: 25000
    },
    {
      id: 3,
      name: "USB 허브",
      price: 18000
    }
  ];

  return (
    <div className="product-list">
      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))
      }
    </div>
  )
}

export default ProductsList