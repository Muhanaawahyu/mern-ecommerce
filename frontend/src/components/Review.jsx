import React from 'react'
import { HiOutlineChevronDown, HiOutlineDotsVertical, HiOutlineThumbUp } from 'react-icons/hi'
import Rating from './Rating'

function Review() {
    return (
        <article className='w-full'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <Rating rating={4} />
                    <p>date</p>
                </div>
                <button>
                    <span>
                        <HiOutlineDotsVertical />
                    </span>
                </button>
            </div>
            <div className='flex items-center'  >
                <img src="" alt="profile" />
                <span>initial</span>
            </div>
            <span>
                <p>comment comment comment comment comment comment</p>
            </span>
            <div className='flex items-center justify-between'>
                <button className='flex items-center'>
                    <span>
                        <HiOutlineThumbUp />
                    </span>
                    <span>Helpful</span>
                </button>
                <button className='flex items-center'>
                    <span>See reply</span>
                    <span>
                        <HiOutlineChevronDown />
                    </span>
                </button>
            </div>
        </article>
    )
}

export default Review