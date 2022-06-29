import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='py-4 '>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link d-inline" to='/home'>Home</Link>
          <Link className="nav-link d-inline" to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}
