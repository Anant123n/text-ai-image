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
        className='flex border-2 border-gray-600 rounded-full px-6 py-2 my-10 bg-amber-100 text-gray-600 hover:bg-amber-200 hover:text-gray-700 transition-colors duration-200'
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
        className='flex gap-1 rounded-full py-2 px-5 border-0 my-10 bg-red-800 text-amber-100  hover:text-lg hover:scale-105 transition-all duration-200'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Generate Your Image <img src={assets.star_group} alt="" className='w-5 h-5' />
      </motion.button>

      <div className='my-10'>
        {Array(6).fill().map((item,index)=>(
          <img src={index%2==0 ? assets.sample_img_1: assets.sample_img_2} alt="" key={index} className='inline-block w-20 h-20 mx-1'/>
        ))}
         <div className='text-xl text-amber-100 text-center'>Generated images from PicMagicAi</div>
      </div>

      <div className='m-4'>
        <div className="rounded-full border-2 border-amber-400 px-6 py-3 text-lg font-semibold text-amber-700 shadow-md transition-all duration-200 hover:scale-105 cursor-pointer text-center ">
          How AI Magic Works
        </div>
        <div className='text-gray-400'>Transform Texts Into Stunning Images</div>
      </div>

<div className='w-auto h-auto my-10 flex flex-col gap-5 items-center justify-center p-4'>

  {/* Step 1 */}
  <div className='flex border-2 p-5 gap-4 rounded-lg w-full max-w-3xl bg-yellow-200 hover:scale-105 transition-all duration-200'>
  <img src='client/src/assets/step_icon_1.svg' alt="" className='h-10 w-10' />
  <div className='flex flex-col justify-center'>
    <div className='font-semibold text-lg'>Describe Your Vision</div>
    <div className='text-orange-500'>
      Type a phrase, sentence, or paragraph that describes the image you want to create.
    </div>
  </div>
</div>

{/* Step 2 */}
<div className='flex border-2 p-5 gap-4 rounded-lg w-full bg-yellow-200 max-w-3xl hover:scale-105 transition-all duration-200'>
  <img src='client/src/assets/step_icon_2.svg' alt="" className='h-10 w-10' />
  <div className='flex flex-col justify-center'>
    <div className='font-semibold text-lg'>Watch the Magic</div>
    <div className='text-orange-500'>
      Our AI engine swiftly transforms your text into a high-quality, unique image within seconds.
    </div>
  </div>
</div>

{/* Step 3 */}
<div className='flex border-2 px-5 py-5 gap-4 rounded-lg w-full bg-yellow-200 max-w-3xl hover:scale-105 transition-all duration-200'>
  <img src='client/src/assets/step_icon_3.svg' alt="" className='h-10 w-10' />
  <div className='flex flex-col justify-center'>
    <div className='font-semibold text-lg'>Download & Share</div>
    <div className='text-orange-500'>
      Download your creation or share it directly from our platform. 
      Let your imagination flow wild.
    </div>
  </div>
</div>
</div>


   <div className="w-full  py-10 flex flex-col items-center justify-center text-center">
  <h2 className="text-3xl text-blue-500 md:text-4xl font-bold">Generate AI Images</h2>
  <p className="text-gray-500 text-red-600 text-lg mt-1">Bring Creative Vision to Life</p>
  {/* Dummy Image */}
  
</div>


<div class="flex flex-col md:flex-row items-center justify-center px-6 py-12">
 
  <div class="md:w-1/2 mb-8 md:mb-0 md:mr-8">
    <img
      src="https://via.placeholder.com/500x350" 
      alt="AI Image Generator Example"
      class="rounded-xl shadow-lg"
    />
  </div>

 
  <div class="md:w-1/2 text-yellow-500">
    <h2 class="text-3xl font-boldmb-4 text-pink-500">
      Introducing the AI Website – Your Ultimate Text to Image Generator
    </h2>
    <p class=" mb-4">
      Effortlessly bring your ideas to life with our free AI image generator. Transform your text into stunning visuals in seconds. Imagine, describe, and see your vision come to life instantly.
    </p>
    <p class="">
      Type a text prompt, and our advanced AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even non-existent concepts come to life effortlessly. Unleash limitless creativity with our AI technology.
    </p>
  </div>
</div>

<div className="py-12 bg-gray-50 text-center">
  {/* Section Header */}
  <h2 className="text-3xl font-bold text-gray-900 mb-2">User Reviews</h2>
  <p className="text-gray-500 mb-10">What our customers say</p>

  {/* Reviews Container */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
    
    {/* Review Card 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm hover:scale-105 transition-all duration-200">
      <img
        src={assets.credit_star}
        alt="User Avatar"
        className="mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900">Manish Mehta</h3>
      <p className="text-gray-500 mb-2">Graphic Designer</p>
      <img
        src={assets.credit_star}
        alt="Star Rating"
        className="mx-auto mb-4"
      />
      <p className="text-gray-600">
        Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.
      </p>
    </div>

    {/* Review Card 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm hover:scale-105 transition-all duration-200">
      <img
        src={assets.credit_star}
        alt="User Avatar"
        className="mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900">Anil Nair</h3>
      <p className="text-gray-500 mb-2">TCS</p>
      <img
        src={assets.credit_star}
        alt="Star Rating"
        className="mx-auto mb-4"
      />
      <p className="text-gray-600">
        Professional work! Delivered on time, with a polished design and smooth user experience. Efficient and detail-oriented.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm hover:scale-105 transition-all duration-200">
      <img
        src={assets.credit_star}
        alt="User Avatar"
        className="mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900">Anil Nair</h3>
      <p className="text-gray-500 mb-2">TCS</p>
      <img
        src={assets.credit_star}
        alt="Star Rating"
        className="mx-auto mb-4"
      />
      <p className="text-gray-600">
        Professional work! Delivered on time, with a polished design and smooth user experience. Efficient and detail-oriented.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm hover:scale-105 transition-all duration-200">
      <img
        src={assets.credit_star}
        alt="User Avatar"
        className="mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900">Anil Nair</h3>
      <p className="text-gray-500 mb-2">TCS</p>
      <img
        src={assets.credit_star}
        alt="Star Rating"
        className="mx-auto mb-4"
      />
      <p className="text-gray-600">
        Professional work! Delivered on time, with a polished design and smooth user experience. Efficient and detail-oriented.
      </p>
    </div>
  </div>
</div>

<div className=" flex flex-col items-center justify-center py-20">
  <h2 className="text-3xl font-semibold text-blue-500 mb-6">See the Magic. Try Now</h2>
  <button className="bg-yellow-400 text-pink-600 px-10 py-3 rounded-full font-medium hover:bg-yellow-500 transition">
    Subscription <span className="ml-1">✨</span>
  </button>
</div>





     


    </motion.div>
  )
}

export default Header