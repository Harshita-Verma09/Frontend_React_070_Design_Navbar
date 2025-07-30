import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">
          Medi<span className="text-green-800">Care</span>
        </h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition pb-1 ${
                isActive
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-700 hover:text-green-700'
              }`
            }
          >
            
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition pb-1 ${
                isActive
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-700 hover:text-green-700'
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
