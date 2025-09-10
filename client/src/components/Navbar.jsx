import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/assets.js'


const Navbar = () => {
  return (
    <div>
      <Link to="/">
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40  '/>
      </Link>

      <div>
        <div>
            <button>
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
