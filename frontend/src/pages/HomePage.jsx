import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

function HomePage() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="grid mt-5 gap-1 justify-items-center grid-cols-2 bg-slate-200">
        {data.products.map((product) => (
          <div className="bg-yellow-300 text-slate-900 w-44 min-h-[10rem] shadow-lg rounded-lg overflow-hidden">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} className="w-full object-cover" />
            </Link>
            <Link to={`/product/${product.slug}`}>
              <h2 className="font-semibol overvlow-ellipsis overflow-hidden whitespace-nowrap">{product.name}</h2>
            </Link>
            <div className='p-4'>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <p>{product.numReviews}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage