import React from 'react'
import { comImg } from './data';

const Company = () => {
  return (
        <div className="bg-black/90 w-[95%] rounded-lg py-4 flex justify-center items-center gap-24">
          {comImg.map((item, index) => {
            return (
              <img
                src={item}
                className=" cursor-pointer hover:scale-110"
                key={index}
                alt=""
              />
            );
          })}
        </div>
  )
}

export default Company
