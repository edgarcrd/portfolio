import React from 'react'
import background from '../assets/Diego.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left'
        src={ background }
        alt="/"
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Edgar Buenrostro</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Coder',
              2000,
              'Tech Enthusiast',
              2000,
            ]}
            wrapper="div"
            cursor={true}
            speed={50}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            repeat={Infinity}
          />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className="cursor-pointer" size={20}/>
            <FaFacebookF className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaLinkedinIn className="cursor-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
