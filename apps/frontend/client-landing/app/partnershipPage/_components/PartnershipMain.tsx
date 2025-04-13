import React from "react";
import Image from "next/image";
import PlaneIcon from "@/public/svg/PlaneIcon";

export default function PartnershipMain() {
  return (
    <div className="flex flex-col items-center my-32 relative w-full xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
      <h2 className="text-3xl font-bold">Партнеры</h2>

      <div className="flex justify-center gap-[50px] max-w-[80%] z-10">
        <div className="flex flex-col items-center gap-5 w-[50%]">
          <Image
            src="/innovation.png"
            alt="Innovation Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[250px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[250px]"
          />
          <span className="text-center text-lg font-semibold">Innovation</span>
        </div>
        <div className="flex flex-col items-center gap-5 w-[50%]">
          <Image
            src="/enactus.png"
            alt="Enactus Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[250px] h-auto sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[250px]"
          />
          <span className="text-center text-lg font-semibold">Enactus</span>
        </div>
      </div>

      <button className="bg-[#489FC4] text-white w-[300px] h-[50px] rounded-[25px] z-10">
        Стань партнером
      </button>

      <p className="w-[80%] max-w-[650px] text-center font-semibold text-xl">
        Чтобы стать партнером TrustTravel, необходимо создать бизнес-аккаунт на
        нашем сайте. Это позволит вам получить доступ к эксклюзивным
        возможностям и преимуществам нашего партнерства.
      </p>

      <PlaneIcon className="absolute w-[5%] top-[25%] right-[5%] hidden sm:block" />
      <Image
        src="/bg-plane-line-2.png"
        alt="line"
        width={800}
        height={400}
        className="absolute w-[90%] left-0 top-[35%] hidden sm:block"
        loading="lazy"
      />
    </div>
  );
}
