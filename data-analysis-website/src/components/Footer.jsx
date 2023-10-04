import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'>
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nostrum quisquam ea eligendi numquam nisi sed dolorum reiciendis quos ratione molestiae incidunt facere impedit, rerum itaque provident laborum voluptatum non?</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare className='hover:cursor-pointer' size={30} />
          <FaInstagram className='hover:cursor-pointer' size={30} />
          <FaTwitterSquare className='hover:cursor-pointer' size={30} />
          <FaGithubSquare className='hover:cursor-pointer' size={30} />
          <FaDribbbleSquare className='hover:cursor-pointer' size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between lg:ml-10">
        <div>
          <h1 className="font-bold text-gray-400">Solutions</h1>
          <ul className='mt-3'>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Analytics</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Marketing</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Commerce</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Insights</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-gray-400">Supports</h1>
          <ul className='mt-3'>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Pricing</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Documentation</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Guides</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">API Status</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-gray-400">Company</h1>
          <ul className='mt-3'>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">About</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Blog</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Jobs</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Press</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-gray-400">Legal</h1>
          <ul className='mt-3'>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Claims</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Policy</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Terms</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:font-semibold">Rights</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
