import ArrowButtonBlue from "@/public/svg/ArrowButtonBlue";
import React from "react";

export default function PartnershipOfferText() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-7 my-20">
      <p className="w-[80%] max-w-[650px] text-center font-semibold lg:text-2xl text-xl">
        Создайте бизнес-аккаунт и начните пользоваться преимуществами уже
        сегодня! С TrustTravel вы сможете сделать больше для своих клиентов и
        своего бизнеса.
      </p>
      <button className="flex h-[50px] w-[300px]  flex-row gap-4 items-center bg-white border border-[#D7D7D7]  rounded-[30px] text-[#489FC4]">
        <ArrowButtonBlue className="w-[40px] h-[40px] ml-[5px]" />
        <p className="font-medium">Создать бизнес аккаунт</p>
      </button>
    </div>
  );
}
