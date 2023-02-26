import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function ProductCard(props) {
    const { product } = props
    return (
        <div key={product.slug} className="bg-slate-50 text-slate-900 w-36 sm:w-40 xl:w-44 min-h-[10rem] shadow-lg rounded-lg overflow-hidden">
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="w-full object-cover" />
            </Link>
            <div className='flex flex-col p-3'>
                <Link to={`/product/${product.slug}`}>
                    <h2 className="font-semibol truncate">{product.name}</h2>
                </Link>
                <span>Rp {product.price}</span>
                <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
        </div>
    )
}

export default ProductCard