import { Parallax } from "react-parallax";
import config from '../assets/config-bg.jpg'
import ConfigCard from "./ConfigCard";

const Configuration = () => {
  return (
    <Parallax strength={600} bgImage={config}>
      <div className="bg-black bg-opacity-70">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-[70px]">
          <div className="content">
            <h2 className="text-[28px] text-[#ffffff] mb-[13px] text-center font-bold tracking-widest">CONFIGURATION</h2>
            <div class="relative mx-auto my-5 w-24 h-[5px] bg-gradient-to-r bg-[#F58346]">
              <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#F58346] rotate-45"></div>
            </div>
            <div className="flex justify-center gap-8 flex-wrap">
              <ConfigCard type="3BHK Type 1" sqft="1670" />
              <ConfigCard type="3BHK Type 2" sqft="1785" />
              <ConfigCard type="4BHK" sqft="2168" />
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Configuration;