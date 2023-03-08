import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { FaStar } from 'react-icons/fa'
import { HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Rating from '../components/Rating'
import Review from '../components/Review'
import TotalRating from '../components/TotalRating'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false }
        case 'FETCH_FAILED':
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const toRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number)
}

function ProductPage() {
    const params = useParams();
    const { slug } = params

    const [{ product, loading, error }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: ''
    })

    useEffect(() => {
        const fetchProduct = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get(`/api/product/${slug}`)
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            } catch (err) {
                dispatch({ type: 'FETCH_FAILED', payload: err.message })
            }
        }
        fetchProduct()
    }, [slug])

    return loading ? (
        <div>Loading ...</div>
    ) : error ? (
        <div>error</div>
    ) : (
        <div className="grid grid-cols-3">
            <div className='border row-span-3 border-slate-800'>
                <div className='w-full'>
                    <img src={product.image} alt={product.slug} />
                </div>
                <div className='flex w-16'>
                    <img src={product.image} alt={product.slug} />
                    <img src={product.image} alt={product.slug} />
                    <img src={product.image} alt={product.slug} />
                </div>
            </div>

            <div className='border border-slate-800'>
                <h1 className='text-xl font-semibold'>{product.name}</h1>
                <span className='flex'>
                    <Rating rating={product.rating} />
                    <p>({product.numRatings} rating)</p>
                </span>
                <h1 className='text-3xl font-bold'>{toRupiah(product.price)}</h1>
            </div>

            <div className='border row-span-4 border-slate-800'>
                <h3>Set amount and notes</h3>
                <div className='flex'>
                    <div className='flex border border-slate-800'>
                        <button>
                            <HiOutlineMinusSm />
                        </button>
                        <input type="text" />
                        <button>
                            <HiOutlinePlusSm />
                        </button>
                    </div>
                    <span>
                        <p>Total stock: <b>{product.stock}</b></p>
                    </span>
                </div>
                <span>
                    <p>Max order 1</p>
                </span>
                <div>
                    <input type="text" />
                    <button>
                        Add notes
                    </button>
                </div>
                <div>
                    <p>Subtotal</p>
                    <p>Rp. Total</p>
                </div>
                <div>
                    <div>
                        <button>Buy</button>
                        <button>+ Cart</button>
                    </div>
                    <div>
                        <button>Chat</button>
                        <button>Wishlist</button>
                        <button>Share</button>
                    </div>
                </div>
            </div>

            <div className='border border-slate-800'>
                <h3>Detail</h3>
                <ul>
                    <li>category: {product.category}</li>
                </ul>
                <div>
                    <div>{product.description}</div>
                    <button>More</button>
                </div>
            </div>

            <div className='border border-slate-800'>
                <div>
                    <img src="" alt="shop" />
                    <div>
                        <h2>shop</h2>
                        <span>Online</span>
                    </div>
                    <button>Follow</button>
                </div>
                <div>
                    <img src="" alt="*" />
                    <span>average rating</span>
                </div>
            </div>

            <div className='border col-span-2 border-slate-800'>
                <h2>Reviews</h2>
                <div className="flex">
                    <div>
                        <div>
                            <div className='flex items-center'>
                                <span className='text-2xl text-yellow-400'>
                                    <FaStar />
                                </span>
                                <p>
                                    <span className='text-6xl'>{product.rating}</span>
                                    <span>/5.0</span>
                                </p>
                            </div>
                            <p>98% of satisfied buyers</p>
                            <p>100000000 ratings - 12000 reviews</p>
                            <TotalRating />
                        </div>
                        <div>
                            <div>
                                <p>Filter reviews</p>
                            </div>
                            <div>
                                <span className='flex items-center'>
                                    <h3>Media</h3>
                                    <button>
                                        <HiOutlineChevronUp />
                                    </button>
                                </span>
                                <span className='flex items-center'>
                                    <input type="checkbox" name="" id="" />
                                    <p>With photos & videos</p>
                                </span>
                            </div>
                            <div>
                                <h3>Rating
                                    <button>
                                        <HiOutlineChevronUp />
                                    </button>
                                </h3>
                                <div>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='flex items-center'>
                                            <span className='text-yellow-400'>
                                                <FaStar />
                                            </span>
                                            <p>5</p>
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='flex items-center'>
                                            <span className='text-yellow-400'>
                                                <FaStar />
                                            </span>
                                            <p>4</p>
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='flex items-center'>
                                            <span className='text-yellow-400'>
                                                <FaStar />
                                            </span>
                                            <p>3</p>
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='flex items-center'>
                                            <span className='text-yellow-400'>
                                                <FaStar />
                                            </span>
                                            <p>2</p>
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <span className='flex items-center'>
                                            <span className='text-yellow-400'>
                                                <FaStar />
                                            </span>
                                            <p>1</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dir><h1>Photo & Video buyers</h1></dir>
                            <div>
                                <button><img src="" alt="med" /></button>
                                <button><img src="" alt="med" /></button>
                                <button><img src="" alt="med" /></button>
                                <button><img src="" alt="med" /></button>
                                <button><img src="" alt="med" /></button>
                                <button><img src="" alt="med" /> <p>+4276</p></button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Selected reviews</h3>
                                <p>Showing {5} from {12001} reviews</p>
                            </div>
                            <div>
                                <p>Short By</p>
                                <button>
                                    <HiOutlineChevronDown />
                                </button>
                            </div>
                            <div>
                                <Review />
                            </div>
                            <div>
                                <ul className='flex'>
                                    <li><button>{'<'}</button></li>
                                    <li><button>1</button></li>
                                    <li><button>2</button></li>
                                    <li><button>3</button></li>
                                    <li><button>...</button></li>
                                    <li><button>last</button></li>
                                    <li><button>{'>'}</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border col-span-3 border-slate-800'>
                <div>
                    <h3>More in this store</h3>
                </div>
                <div className="grid mt-5 gap-2 justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-slate-200">
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                </div>
            </div>

            <div className='border col-span-3 border-slate-800'>
                <div>
                    <h3>Another choice</h3>
                </div>
                <div className="grid mt-5 gap-2 justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-slate-200">
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                </div>
            </div>
        </div>
    )
}

export default ProductPage 