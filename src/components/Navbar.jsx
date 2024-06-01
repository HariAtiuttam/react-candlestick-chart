import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex align-center justify-center space-x-4">
        <li className='text-red' >
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li className='w-[40px]' >
          <Link to="/chart" className="text-white hover:text-gray-400">Chart</Link>
        </li>
        <li className='w-[40px]' >
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}
