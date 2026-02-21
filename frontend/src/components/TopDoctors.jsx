
import React from 'react'
import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const TopDoctors = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='font-color  text-3xl font-bold text-center'>Top Doctors</h1>
        <p className='text-center text-sm sm:w-1/3 text-gray-600'>Simply browse through our existing list of doctors</p>
        
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                doctors.slice(0,10).map((item, index)=>(
                    <div className="border border-blue-200  rounded-xl overflow-hidden cursor-pointer hover:translatte-y-[-10px] transition-all duration-500" key={index}>
                        <img className="bg-blue-100" src={item.image} alt={item.name} />
                        <div className='p-4'>

                                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                {/* Container: aligns dot and text horizontally with spacing */}
                                
                                <span className="relative flex h-2 w-2">
                                    {/* Wrapper for animated dot with fixed size */}
                                    
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                                    {/* Outer circle: creates the pulsing/water-ripple animation */}
                                    
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                    {/* Inner solid dot: stays visible while outer pulse animates */}

                                </span>

                                <p>Available</p>
                                {/* Status text */}
                                </div>

                            <p className='text-gray-900 text-md font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>

                        </div>
                    </div>
                    )
                )
            }
        </div>
        <button className='bg-primary text-white px-3 py-3 rounded-full'>View More</button>
    </div>
  )
}

export default TopDoctors