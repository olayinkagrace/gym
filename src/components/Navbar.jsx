import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FiX } from "react-icons/fi";
import { FaAlignJustify, FaFacebook, FaInstagram, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "orangered",
    };

    return (
        <nav className='flex bg-transparent flex-wrap justify-around items-center p-5 md:justify-between md:flex-wrap'>
            <div>
                <NavLink to='..'>
                    <img src={logo} alt='logo' width={'50%'} className='logoImg' />
                </NavLink>
            </div>
            <div className='flex flex-wrap justify-evenly text-[10px] gap-5 font-bold  nav'>
                <NavLink to='/' style={({ isActive }) => (isActive ? activeStyles : null)}>HOME</NavLink>
                <NavLink to='/about' style={({ isActive }) => (isActive ? activeStyles : null)}>ABOUT US</NavLink>
                <NavLink to='/classes' style={({ isActive }) => (isActive ? activeStyles : null)}>CLASSES</NavLink>
                <NavLink to='/services' style={({ isActive }) => (isActive ? activeStyles : null)}>SERVICES</NavLink>
                <NavLink to='/team' style={({ isActive }) => (isActive ? activeStyles : null)}>OUR TEAM</NavLink>
                <NavLink  to='/contact'style={({ isActive }) => (isActive ? activeStyles : null)}>CONTACT</NavLink>
            </div>
            <div >
                <Link to='#'  className='md:flex md:flex-wrap md:gap-4 hidden'>
                <FaSearch size={'10px'} />
                <FaFacebook size={'10px'} />
                <FaTwitter size={'10px'} />
                <FaYoutube size={'10px'} />
                <FaInstagram size={'10px'} />
                </Link>
               
            </div>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                {toggle ? <FiX onClick={() => setToggle(!toggle)} /> : <FaAlignJustify onClick={() => setToggle(!toggle)} />}
                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                >
                    <div className='bg-black text-[12px] font-bold p-5 text-left'>

                        <NavLink to='/' className='block my-2'>HOME</NavLink>
                        <NavLink to='/about' className='block my-2'>ABOUT US</NavLink>
                        <NavLink to='/classes' className='block my-2'>CLASSES</NavLink>
                        <NavLink to='/services' className='block my-2'>SERVICES</NavLink>
                        <NavLink to='/team' className='block my-2'>OUR TEAM</NavLink>
                        <NavLink to='/contact' className='block my-2'>CONTACT</NavLink>
                    </div>

                </div>
            </div>

        </nav>
    )
}
