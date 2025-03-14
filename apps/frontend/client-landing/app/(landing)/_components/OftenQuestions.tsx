import React from 'react';
import Image from 'next/image';
import questionIcon from '../../../public/question.svg';

export default function OftenQuestions() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="font-medium text-lg">Часто задаваемые вопросы.</h2>
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <Image
            src={questionIcon}
            alt="question-icon"
            width={50}
            height={50}
            className="ml-[220px] cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <Image
            src={questionIcon}
            alt="question-icon"
            width={50}
            height={50}
            className="ml-[220px] cursor-pointer"
            loading="lazy"
          />
        </div>
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <Image
            src={questionIcon}
            alt="question-icon"
            width={50}
            height={50}
            className="ml-[220px] cursor-pointer"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
