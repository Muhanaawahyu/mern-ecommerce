import React from 'react'
import Progressbar from './Progressbar'
import { FaStar } from 'react-icons/fa'

function TotalRating() {
    return (
        <div className="w-full">
            <div className='flex w-full'>
                <div className="flex items-center w-full">
                    <span className='text-yellow-400'>
                        <FaStar />
                    </span>
                    <p>5</p>
                    <div className="w-full">
                        <Progressbar />
                    </div>
                </div>
                <span>
                    <p>12817</p>
                </span>
            </div>
            <div className='flex w-full'>
                <div className="flex items-center w-full">
                    <span className='text-yellow-400'>
                        <FaStar />
                    </span>
                    <p>4</p>
                    <div className="w-full">
                        <Progressbar />
                    </div>
                </div>
                <span>
                    <p>12817</p>
                </span>
            </div>
            <div className='flex w-full'>
                <div className="flex items-center w-full">
                    <span className='text-yellow-400'>
                        <FaStar />
                    </span>
                    <p>3</p>
                    <div className="w-full">
                        <Progressbar />
                    </div>
                </div>
                <span>
                    <p>12817</p>
                </span>
            </div>
            <div className='flex w-full'>
                <div className="flex items-center w-full">
                    <span className='text-yellow-400'>
                        <FaStar />
                    </span>
                    <p>2</p>
                    <div className="w-full">
                        <Progressbar />
                    </div>
                </div>
                <span>
                    <p>12817</p>
                </span>
            </div>
            <div className='flex w-full'>
                <div className="flex items-center w-full">
                    <span className='text-yellow-400'>
                        <FaStar />
                    </span>
                    <p>1</p>
                    <div className="w-full">
                        <Progressbar />
                    </div>
                </div>
                <span>
                    <p>12817</p>
                </span>
            </div>
        </div>
    )
}

export default TotalRating