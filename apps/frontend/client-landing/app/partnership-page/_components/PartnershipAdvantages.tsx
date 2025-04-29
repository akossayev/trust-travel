import PartnershipIcon from "@/public/svg/PartnershipIcon";
import React from "react";

const advantages = [
  "Конкурентные комиссионные: Получайте выгодные комиссионные вознаграждения за каждую успешную сделку, оформленную через вашу партнерскую ссылку.",
  "Доступ к эксклюзивным предложениям: Партнеры получают приоритетный доступ к нашим новым продуктам и специальным предложениям, что позволяет вам предлагать своим клиентам самые актуальные и выгодные туры.",
  "Расширенные возможности бронирования:Партнеры получают доступ к уникальным опциям бронирования, включая раннее бронирование и специальные места, недоступные для обычных пользователей.",
];

export default function PartnershipAdvantages() {
  return (
    <div className="flex flex-col items-center my-16 relative w-full gap-10">
      <p className="text-2xl font-bold">Преимущества для партнеров:</p>
      <div className="flex justify-center max-w-[85%] w-full">
        <div className="flex flex-col gap-8 xl:flex-row my-4">
          {advantages.map((advantage, index) => (
            <PartnershipAdvantage key={index} text={advantage} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnershipAdvantage({ text }: { text: string }) {
  return (
    <div className="text-left p-8 bg-[#F5F5F5] w-[350px] h-[350px] rounded-[25px] relative mb-5">
      <p className="font-semibold text-lg">{text}</p>
      <PartnershipIcon className="absolute bottom-5 right-5 w-12" />
    </div>
  );
}
