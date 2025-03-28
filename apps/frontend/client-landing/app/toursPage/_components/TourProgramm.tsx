import React from 'react';

export default function TourProgramm() {
  return (
    <div className="flex flex-col gap-[100px] items-center w-full">
      <div className="flex justify-between px-[80px] w-full">
        <div className="flex flex-col items-center">
          <div className="bg-[#B4B4B496] rounded-[40px] w-[257px] h-[152px]"></div>
          <div className="bg-[#B4B4B496] rounded-[40px] w-[318px] h-[180px]"></div>
          <div className="bg-[#B4B4B496] rounded-[40px] w-[369px] h-[223px]"></div>
          <div className="bg-[#B4B4B496] rounded-[40px] w-[318px] h-[180px]"></div>
          <div className="bg-[#B4B4B496] rounded-[40px] w-[257px] h-[152px]"></div>
        </div>

        <div className="grid grid-rows-3 grid-cols-3 gap-[20px]">
          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>
          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>
          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>

          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>
          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>
          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>

          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>
          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>
          <div className="w-[240px] h-[235px] bg-[#000] rounded-[40px]"></div>
        </div>
      </div>
      <button className="w-[320px] h-[50px] rounded-[50px] bg-[#489FC4] text-white">Купить</button>
    </div>
  );
}
