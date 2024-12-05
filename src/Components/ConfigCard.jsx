import React from "react";

const ConfigCard = ({ type, sqft }) => {
  return (
    <div class="col-md-4 col-sm-6 mt-7 uppercase aos-init aos-animate hover:-translate-y-2 duration-500" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
      <div class="bg-white shadow-lg rounded-3xl overflow-hidden w-[285px] h-[286px]">
        <div class="bg-white py-[24px] px-[50px] text-center">
          <h3 class="text-gray-800 text-xl font-bold leading-9 tracking-widest uppercase mt-[25px] mb-2">{type}</h3>
          <hr className="border-b-[3px] border-black w-[50%] m-auto" />
          <div class="text-[24px] leading-9 font-bold mt-3">{sqft} <br /><span class="text-[24px]">SQFT</span></div>
        </div>
        <div class="p-[30px] bg-[#5f291e]">
          <div class="text-center">
            <a class="bg-transparent border-2 text-white py-[15px] px-[20px] rounded-lg transition-colors duration-300 tracking-widest font-semibold hover:underline hover:ring-4 hover:ring-[#ffffff66]" href="javascript:void(0);" onclick="fbEvent_send('Price Button Click');">₹ Check Price</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigCard;