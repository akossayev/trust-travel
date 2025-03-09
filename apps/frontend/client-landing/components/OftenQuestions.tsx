import React from 'react';
import Image from 'next/image';

export default function OftenQuestions() {
  return (
    <div className="flex flex-col items-center gap-10 py-[150px]">
      <h2 className="text-4xl">Часто задаваемые вопросы.</h2>
      <div className="flex gap-5">
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <Image
            src="/questionIcon.svg"
            alt="question-icon"
            width={50}
            height={50}
            className="ml-[220px] cursor-pointer"
          />
        </div>
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <Image
            src="/questionIcon.svg"
            alt="question-icon"
            width={50}
            height={50}
            className="ml-[220px] cursor-pointer"
          />
        </div>
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <Image
            src="/questionIcon.svg"
            alt="question-icon"
            width={50}
            height={50}
            className="ml-[220px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
