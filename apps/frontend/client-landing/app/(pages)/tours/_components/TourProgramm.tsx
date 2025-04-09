import React from 'react';

export default function TourProgramm() {
  return (
    <div className="px-[20px] lg:px-[50px] lg:mt-[80px] w-full flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row lg:gap-0 lg:justify-between lg:items-center gap-[30px]">
        <div className="flex lg:flex-col gap-[15px] lg:gap-[5px] ml-[0px] flex-nowrap lg:items-center">
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[185px] lg:h-[105px] lg:mb-[-50px]  rounded-[20px] lg:rounded-[40px] flex-shrink-0"></div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[210px] lg:h-[130px] rounded-[20px] lg:rounded-[40px] flex-shrink-0"></div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[240px] lg:h-[150px] rounded-[20px] lg:rounded-[40px] flex-shrink-0"></div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[210px] lg:h-[130px] rounded-[20px] lg:rounded-[40px] flex-shrink-0"></div>
          <div className="bg-[#ccc]/50 w-[180px] h-[100px] lg:w-[185px] lg:h-[105px] lg:mt-[-50px]  rounded-[20px] lg:rounded-[40px] flex-shrink-0"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3  gap-[15px] ml-[10px]">
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px]"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px]"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px]"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block"></div>
          <div className="bg-[#ccc]/50 w-[125px] h-[125px] lg:w-[170px] lg:h-[165px] rounded-[20px] hidden lg:block"></div>
        </div>
      </div>

      <button className="bg-[#489FC4] text-light w-[80%] lg:w-[22%] py-[10px] rounded-[50px] ml-[10%] lg:ml-0 text-xs mt-[70px]">
        Купить
      </button>
    </div>
  );
}
