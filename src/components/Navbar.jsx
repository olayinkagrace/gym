import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { FaEllipsisV, FaFacebook, FaInstagram, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className='flex bg-transparent flex-wrap justify-around items-center py-5 md:justify-between md:flex-wrap'>
            <div>
                <NavLink>
                    <img src={logo} alt='logo' width={'50%'} />
                </NavLink>
            </div>
            <div className='md:flex md:flex-wrap md:justify-between text-[10px] md:gap-5 font-bold hidden md:block '>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/about'>ABOUT US</NavLink>
                <NavLink>CLASSES</NavLink>
                <NavLink>SERVICES</NavLink>
                <NavLink>OUR TEAM</NavLink>
                <NavLink>PAGES</NavLink>
                <NavLink>CONTACT</NavLink>
            </div>
            <div className='md:flex md:flex-wrap md:gap-4 hidden md:block' >
                <FaSearch />
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
            </div>
            <div>
                <FaEllipsisV className='md:hidden lg:hidden ' />

            </div>

        </nav>
    )
}
