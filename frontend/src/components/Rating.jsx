import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function Rating(props) {
    const { rating } = props
    return (
        <div className='flex'>
            <div className='flex items-center'>
                <span className='text-yellow-400'>
                    {rating >= 1 ? <FaStar /> :
                        rating >= 0.5 ? <FaStarHalfAlt /> :
                            <FaRegStar />}
                </span>
                <span className='text-yellow-400'>
                    {rating >= 2 ? <FaStar /> :
                        rating >= 1.5 ? <FaStarHalfAlt /> :
                            <FaRegStar />}
                </span>
                <span className='text-yellow-400'>
                    {rating >= 3 ? <FaStar /> :
                        rating >= 2.5 ? <FaStarHalfAlt /> :
                            <FaRegStar />}
                </span>
                <span className='text-yellow-400'>
                    {rating >= 4 ? <FaStar /> :
                        rating >= 3.5 ? <FaStarHalfAlt /> :
                            <FaRegStar />}
                </span>
                <span className='text-yellow-400'>
                    {rating >= 5 ? <FaStar /> :
                        rating >= 4.5 ? <FaStarHalfAlt /> :
                            <FaRegStar />}
                </span>
            </div>
        </div>
    )
}

export default Rating