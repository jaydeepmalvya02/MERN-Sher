import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Service from '../Pages/Service.jsx'
import Contact from '../Pages/Contact.jsx'
import Profile from '../Pages/Profile.jsx'
import About from '../Pages/About.jsx'
const Header = () => {
  return (
    <nav className="bg-emerald-700 py-5 px-4 flex gap-10 items-center justify-between">
      <h2 className="text-2xl">Google</h2>
      <div className="">
        <ul className="text-xl flex gap-10 ">
          <Link  to='about'>
          <li className="">About</li>
          </Link>
          <Link  to='/contact'>
          <li className="">Contact</li>
          </Link>
          <Link  to='/service'>
          <li className="">Service</li>
          </Link>
          <Link  to='/profile'>

          <li className="">Profile</li>
          </Link>
        </ul>
      </div>
    </nav>
  

  )
}

export default Header
