import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function Searchbar() {
  return (
    <div className="flex w-full items-center justify-center border rounded-md">
      <input type="text" placeholder="Search..." className="px-4 py-2 w-full" />
      <button className="px-4 py-2">
        <HiOutlineSearch size="20px" />
      </button>
    </div>
  )
}

export default Searchbar