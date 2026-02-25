import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 sm:gap-20 md:gap-40 lg:gap-60 py-10 px-5 sm:px-10 md:px-20 lg:px-32'>
        {/* Left Section */}
        <div className="">
            <img className="w-40 mb-5"src={assets.logo} alt="" />
            <p className='text-sm justify-start'>Medease is a leading healthcare platform providing accessible and affordable medical services to patients across the country.</p>


        </div>
        {/* Center Section */}
        <div className="">
            <p className='text-xl font-medium mb-5'>Medease</p>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
            </ul>

        </div>

        {/* Right Section */}
        <div className="">
            <p className='text-xl font-medium mb-5'>Contact Us</p>
            <ul>
                <li>+01521584710</li>
                <li>medeasebd@gmail.com</li>
                <li>123 Gopibagh Ram Krisna Mission Rd., Dhaka, Bangladesh</li>
            </ul>

        </div> 
        {/* Copy */}
        <div className="col-span-2 text-center py-5 border-t border-primary">
            <p>© {new Date().getFullYear()} Medease. All rights reserved.</p>
        </div>
    </div>

  )
}

export default Footer       