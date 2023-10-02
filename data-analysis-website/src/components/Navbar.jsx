import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const navbarHandler = () => {
        setNavbar(!navbar)
    }

    return (
        <div className='max-w-[1240px] mx-auto px-4 text-white h-24 flex justify-center items-center'>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] hover:cursor-pointer">REACT.</h1>
            <ul className="md:flex hidden">
                <li className="p-4 hover:cursor-pointer">Home</li>
                <li className="p-4 hover:cursor-pointer">Company</li>
                <li className="p-4 hover:cursor-pointer">Resources</li>
                <li className="p-4 hover:cursor-pointer">About</li>
                <li className="p-4 hover:cursor-pointer">Contact</li>
            </ul>
            {/* show left side menu which depends on navbar state */}
            <div onClick={navbarHandler} className="block md:hidden">
                {navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={navbar ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 hover:cursor-pointer'>REACT.</h1>
                <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>Home</li>
                <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>Company</li>
                <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>Resources</li>
                <li className='p-4 border-b border-gray-600 hover:cursor-pointer'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
