import React from 'react';
import ArrowButtonText from '../svg-icons/ArrowButtonText';

export default function OffersText() {
  return (
    <div className="flex flex-col items-center xl:px-[150px]">
      <div className="flex flex-col gap-[40px] items-center xl:flex-row ">
        <div className="flex flex-col gap-[40px] items-center  xl:items-start">
          <div className="flex flex-col w-full items-center xl:items-start">
            <h2 className="font-semibold text-[21px] sm1:text-[22px] sm2:text-[24px] sm3:text-[27px] mb-1">
              Подключите аккаунт TrustTravel <br /> и путешествуйте выгоднее
            </h2>
            <p className="w-[88%] sm2:text-[18px] xl:w-[55%] xl:text-xl">
              Вернем вам до 8% за отели, аренду машин и многое другое — просто перейдите по кнопке,
              авторизируйтесь и начните копить
            </p>
          </div>
          <button className="w-[330px] xl:w-[200px] h-[55px] text-foreground text-xl rounded-[30px] xl:rounded-[35px] border border-[#C8C8C8] bg-gradient-to-r from-[#489FC4] to-[#3771C8]">
            Хочу!
          </button>
        </div>

        <div className="flex flex-col gap-1 items-center xl:gap-3 mt-[10px]">
          <div className="flex gap-1 xl:gap-3">
            <button className="flex items-center gap-[10px] w-[120px] xl:w-[180px] xl:text-xl xl:gap-[20px] h-[50px] xl:h-[70px] xl:rounded-[35px] text-[#489FC4] text-lg border border-[#489FC4] rounded-[30px] py-2 pl-[5px] sm2:w-[130px]">
              <ArrowButtonText className="w-[40px] h-[40px] xl:w-[60px]" />
              Текст
            </button>
            <button className="flex items-center gap-[10px] w-[120px] xl:w-[180px] xl:text-xl  xl:gap-[20px] h-[50px] xl:h-[70px] xl:rounded-[35px] text-[#489FC4] text-lg border border-[#489FC4] rounded-[30px] py-2 pl-[5px] sm2:w-[130px]">
              <ArrowButtonText className="w-[40px] h-[40px] xl:w-[60px]" />
              Текст
            </button>
          </div>
          <div className="flex gap-1 xl:gap-3">
            <button className="flex items-center gap-[10px] w-[120px] xl:w-[180px] xl:text-xl  xl:gap-[20px] h-[50px] xl:h-[70px] xl:rounded-[35px] text-[#489FC4] text-lg border border-[#489FC4] rounded-[30px] py-2 pl-[5px] sm2:w-[130px]">
              <ArrowButtonText className="w-[40px] h-[40px] xl:w-[60px]" />
              Текст
            </button>
            <button className="flex items-center gap-[35px] w-[180px] xl:w-[300px] xl:gap-[20px] xl:text-xl  h-[50px] xl:h-[70px] xl:rounded-[35px] text-[#489FC4] text-lg border border-[#489FC4] rounded-[30px] py-2 pl-[5px] sm2:w-[200px]">
              <ArrowButtonText className="w-[40px] h-[40px] xl:w-[60px]" />
              Текст
            </button>
          </div>
          <div>
            <button className="flex items-center gap-[10px] w-[130px] xl:w-[300px] xl:gap-[20px] xl:text-xl  h-[50px] xl:h-[70px] xl:rounded-[35px] text-[#489FC4] text-lg border border-[#489FC4] rounded-[30px] py-2 pl-[5px] sm2:w-[140px]">
              <ArrowButtonText className="w-[40px] h-[40px] xl:w-[60px]" />
              Текст
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
