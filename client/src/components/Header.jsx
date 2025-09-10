import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div
      className='flex flex-col justify-center items-center px-2 sm:px-8 lg:px-16 text-black w-full h-auto py-4'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className='flex border-2 border-gray-600 rounded-full px-4 py-1 my-10 bg-amber-100 text-gray-600 hover:bg-amber-200 hover:text-gray-700 transition-colors duration-200'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>Transform your Idea into Art</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1
        className='text-6xl text-center text-sky-500 font-semibold'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Transform Words into <br /> <span className="text-amber-500 font-bold">Art</span> in seconds
      </motion.h1>

      <motion.div
        className='text-center text-lg sm:text-xl lg:text-2xl font-light mt-6 text-teal-400'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Unleash boundless creativity with AI – Turn your thoughts into stunning visual art <br /> instantly. Just type, and watch the magic unfold.
      </motion.div>

      <motion.button
        className='flex gap-1 rounded-full py-2 px-5 border-0 my-5 bg-red-800 text-amber-100  hover:text-lg hover:scale-105 transition-all duration-200'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Generate Your Image <img src={assets.star_group} alt="" className='w-5 h-5' />
      </motion.button>


    </motion.div>
  )
}

export default Header