import React from 'react';
import banner from "../../assests/banner/2.jpg"
const Footer = () => {
  return (
    <footer className="relative  pt-8 pb-6 mt-[100px]">
      <div className="container mx-auto px-4">
<div className=' flex justify-between'>
<div className=' max-w-[500px]'>
    <img src={banner} alt="" />
   </div>
<div className=' max-w-[500px] mobile'>
    <img src={banner} alt="" />
   </div>
</div>
        <hr className="my-6 border-blue-300" />
        <div className="flex flex-wrap items-center md:justify-between bg-blue-200 justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blue-500 font-semibold py-1 flex gap-2">
              Copyright © <span id="get-current-year">2024</span>

<div className=''>
Powered By -
<a href="https://mahi-technocrafts.vercel.app/" className="text-blue-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Mahi TechnoCrafts</a>
</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
