// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logger from 'use-reducer-logger'
// import data from '../data'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

function HomePage() {
  const [{ products, loading, error }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  })
  // const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED', payload: err.message })
      }
      // setProducts(result.data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="grid mt-5 gap-3 justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-slate-200">
        {
          loading ? (<div>Loading ...</div>) :
            error ? (<div>{error}</div>) :
              products.map((product) => (
                <div key={product.slug} className="bg-yellow-300 text-slate-900 w-44 min-h-[10rem] shadow-lg rounded-lg overflow-hidden">
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