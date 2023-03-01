import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const toRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number)
}

function ProductCard(props) {
    const { product } = props
    const { slug, name, image, price, rating, numRatings } = product
    return (
        <div key={slug} className="bg-slate-50 text-slate-900 w-36 sm:w-40 xl:w-44 min-h-[10rem] shadow-lg rounded-lg overflow-hidden">
            <Link to={`/product/${slug}`}>
                <img src={image} alt={name} className="w-full object-cover" />
            </Link>
            <div className='flex flex-col p-3'>
                <Link to={`/product/${slug}`}>
                    <h2 className="font-semibold truncate">{name}</h2>
                </Link>
                <span>{toRupiah(price)}</span>
                <span className='flex'>
                    <Rating rating={rating} />
                    <p>({numRatings})</p>
                </span>
            </div>
        </div>
    )
}

export default ProductCard