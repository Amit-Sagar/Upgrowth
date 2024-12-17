import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-[3rem] fixed w-full top-0 py-8 bg-white'>
      <div className='text-3xl font-extrabold'>
        <p>UpGrowth</p>
      </div>
      <div>
        <ul className='flex justify-center items-center gap-8'>
          <li>Home</li>
          <li>About</li>
          <li><button className='px-20 rounded-lg py-3 border border-black bg-black text-white hover:bg-pink-300 hover:text-black transition duration-400'>Contact Us</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header