import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo1.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
//import MagicWand from '../assets/icon/magic-wand.svg'
import MagicWand from '../assets/icon/pngwing1.png'

import './Navbar.css';
import { useMagicBackground } from './MagicBgContent'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logoHover, setLogoHover] = useState(false)
    const handleClick = () => setNav(!nav)
    const { toggleMagicBackground } = useMagicBackground();
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#001D39] text-gray-300 border-b-2 border-[#D3215A] pb-1">
            <NavLink to="/">
                <img 
                    src={Logo}
                    className='img_rotate'
                    alt="Logo image"
                    style={{ width: '50px', transform: logoHover ? 'rotate(0deg)' : 'rotate(360deg)' }} 
                    onMouseEnter={() => setLogoHover(true)}
                    onMouseLeave={() => setLogoHover(false)}
                    title="home"
                />
            </NavLink>

            <div className="flex items-center">
                <div className="mx-4 cursor-pointer" onClick={() => toggleMagicBackground(true)}>
                    <img src={MagicWand} alt="Magic Wand" className='magicWand' />
                </div>
            </div>

            {/* Menu */}
            <div className="hidden md:flex">
                <ul className="hidden md:flex">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/work">Work</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className="py-4 text-3xl">
                    <Link to="/" onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link to="/about" onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link to="/skills" onClick={handleClick}>
                        Skills
                    </Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link to="/work" onClick={handleClick}>
                        Work
                    </Link>
                </li>
                <li className="py-4 text-3xl">
                    <Link to="/contact" onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D3215A]">
                        <a
                            className="flex  justify-between item-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/natallia-karpuk-37414824b/"
                            target="_blank"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="flex  justify-between item-center w-full text-gray-300"
                            href="https://github.com/MyMelanie"
                            target="_blank"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3674B0]">
                        <a
                            className="flex  justify-between item-center w-full text-gray-300"
                            href="https://t.me/natallia_karpuk"
                            target="_blank"
                        >
                            Telegram <FaTelegramPlane size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#585400]">
                        <a
                            className="flex  justify-between item-center w-full text-gray-300"
                            href="https://drive.google.com/drive/u/1/my-drive?ths=true"
                            target="_blank"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
