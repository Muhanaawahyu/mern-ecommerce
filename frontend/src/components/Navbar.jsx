import React, { useState } from 'react'
import {HiOutlineShoppingCart, HiOutlineX, HiOutlineMenu, HiOutlineMail, HiOutlineBell} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)

    return (
        <div className="w-screen bg-slate-50 top-0 h-20 z-10 drop-shadow-md">
            <div className='px-5 flex justify-between items-center w-full h-full'>
                <div className='hidden md:flex items-center px-2'>
                    <Link to="/" className="text-slate-400 font-bold text">Shoppedia</Link>
                </div>
                <div className='flex items-center justify-between md:justify-evenly w-full px-2'>
                    <div className='flex w-full'>
                        <Searchbar />
                    </div>
                    <ul className='flex items-center justify-between md:justify-between px-2'>
                        <li><HiOutlineShoppingCart size="20px" /></li>
                        <li><HiOutlineBell size="20px" /></li>
                        <li><HiOutlineMail size="20px" /></li>
                    </ul>
                    <div className='hidden md:flex mr-2 h-8 border-r border-cyan-700'></div>
                    <div className='hidden md:flex item-center justify-between px-2'>
                        <button className='rounded-md mr-2 px-4 py-2 whitespace-nowrap border text-cyan-700 bg-transparent border-cyan-700'>Sign In</button>
                        <button className='rounded-md px-4 py-2 whitespace-nowrap border text-slate-50 bg-cyan-700 border-cyan-700'>Sign Up</button>
                    </div>
                </div>
                <div className='md:hidden w-5' onClick={handleClick}>
                    {!navbar ? <HiOutlineMenu size="20px" /> : <HiOutlineX size="20px" />}
                </div>
            </div>

            <div className={!navbar ? 'hidden' : 'absolute w-full px-6 py-4 flex item-center justify-between bg-slate-50'}>
                <button className='rounded-md mr-4 flex-grow h-full whitespace-nowrap border text-cyan-700 bg-transparent border-cyan-700'>Sign In</button>
                <button className='rounded-md flex-grow h-full whitespace-nowrap border text-slate-50 bg-cyan-700 border-cyan-700'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar