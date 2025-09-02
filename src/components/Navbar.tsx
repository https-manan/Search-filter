import { useState } from 'react'

const Navbar = ({setSearchQuery}) => {
  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e)=>{setSearchQuery(e.target.value)}}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  )
}

export default Navbar
