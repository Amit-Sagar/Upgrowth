import React from 'react'

const Eric = () => {
  return (
    <div className='flex justify-center items-center bg-[rgb(248,248,248)]'>
      <div>
        <img className='w-[70%] py-20' src="https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/sections/eric-siu.png" alt="" />
      </div>
      <div className='w-[40%] flex flex-col justify-start gap-8 text-lg text-gray-500 font-semibold'>
        <h1 className='text-3xl font-bold pb-5 text-black'>Who is Eric Siu?</h1>
        <p>Eric Siu is the founder of digital marketing agency Single Grain. He also hosts two podcasts: Marketing School & Leveling Up, which get over 2.1M monthly downloads combined. Over the years, Eric has helped companies such as Amazon, Uber, Airbnb, and Salesforce acquire more customers.</p>
        <p>Eric hosts a marketing mastermind where 100 of the best in media, marketing, and business get together twice a year in Miami and Beverly Hills. He is also the author of 'Leveling Up: How to Master the Game of Life'.</p>
        <p>He also speaks around the world on marketing, SaaS, and SEO. Eric is also an investor in companies such as Eight Sleep, Levels, Fountain Health, Synthesis, and more. Finally, Eric is a member of communities such as YPO and TED.</p>
      </div>
    </div>
  )
}

export default Eric
