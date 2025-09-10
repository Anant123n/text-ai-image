import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/assets.js'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-2  sm:px-8 lg:px-16  bg-[#111827] text-white w-full h-auto'> 
      <Link to="/">
      <img src={assets.logo} alt="" className='w-28 h-17 sm:w-32 lg:w-40  '/>
      </Link>

      <div>
        <div className='flex justify-between items-center gap-4 text-md sm:text-lg lg:text-xl font-medium'>
            <button className='flex gap-2'>
                <img src={assets.credit_star} alt="" />
                <p>Credits Left : 10</p>
            </button>
            <p>Hi, Anant</p>
            
            <div>
                <img src={assets.profile_icon} alt="" className='w-10 h-10 drop-shadow-2xl'/>
            </div>          


        </div>



      </div>







    </div>
  )
}

export default Navbar
