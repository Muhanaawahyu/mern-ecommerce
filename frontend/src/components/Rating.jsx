import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-regular-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'

function Rating(props) {
    const { rating, numReviews } = props
    return (
        <div>
            <span className='text-yellow-400'>
                {rating >= 1 ? <FontAwesomeIcon icon={fasStar} /> :
                    rating >= 0.5 ? <FontAwesomeIcon icon={faStarHalfAlt} /> :
                        <FontAwesomeIcon icon={faStar} />}
            </span>
            <span className='text-yellow-400'>
                {rating >= 2 ? <FontAwesomeIcon icon={fasStar} /> :
                    rating >= 1.5 ? <FontAwesomeIcon icon={faStarHalfAlt} /> :
                        <FontAwesomeIcon icon={faStar} />}
            </span>
            <span className='text-yellow-400'>
                {rating >= 3 ? <FontAwesomeIcon icon={fasStar} /> :
                    rating >= 2.5 ? <FontAwesomeIcon icon={faStarHalfAlt} /> :
                        <FontAwesomeIcon icon={faStar} />}
            </span>
            <span className='text-yellow-400'>
                {rating >= 4 ? <FontAwesomeIcon icon={fasStar} /> :
                    rating >= 3.5 ? <FontAwesomeIcon icon={faStarHalfAlt} /> :
                        <FontAwesomeIcon icon={faStar} />}
            </span>
            <span className='text-yellow-400'>
                {rating >= 5 ? <FontAwesomeIcon icon={fasStar} /> :
                    rating >= 4.5 ? <FontAwesomeIcon icon={faStarHalfAlt} /> :
                        <FontAwesomeIcon icon={faStar} />}
            </span>
            <span> {numReviews}</span>
        </div>
    )
}

export default Rating