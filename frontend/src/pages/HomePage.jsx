// eslint-disable-next-line no-unused-vars
import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import logger from 'use-reducer-logger'
import ProductCard from '../components/ProductCard'
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
      <div className="grid mt-5 gap-2 justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-slate-200">
        {
          loading ? (<div>Loading ...</div>) :
            error ? (<div>{error}</div>) :
              products.map((product) => (
                <ProductCard product={product} />
              ))}
      </div>
    </div>
  )
}

export default HomePage