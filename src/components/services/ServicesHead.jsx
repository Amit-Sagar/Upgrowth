import React from 'react'

const ServicesHead = () => {
  return (
    <div className='bg-[url("https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/agency/hero-logo.png")] pt-[120px] flex flex-col justify-center items-center gap-5 text-center px-[10%] py-20'
    style={{
        backgroundImage: 'url("https://www.singlegrain.com/wp-content/themes/singlegrain/assets/dist/images/agency/hero-logo.png")',
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}
    >
      <h1 className='text-5xl font-bold leading-tight'>SEO Agency Focused on Increasing Your Rankings & Revenue via Organic Search</h1>
      <p className='text-xl'>Single Grain’s expert SEO & content marketing team will increase your online visibility, search rankings, and website traffic.</p>
      <button className='bg-[rgb(242,112,56)] hover:bg-[rgb(216,101,51)] duration-200 px-16 py-2 text-white text-xl rounded-full mt-10'>Boost Rankings & Revenue</button>
    </div>
  )
}

export default ServicesHead
