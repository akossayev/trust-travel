import React from 'react';
import QuestionIcon from '../../../public/svg/QuestionIcon';

export default function OftenQuestions() {
  return (
    <div className="flex flex-col items-center gap-5 xl:my-[20px]">
      <h2 className="font-medium text-lg xl:text-4xl">Часто задаваемые вопросы.</h2>
      <div className="flex flex-col gap-8 xl:flex-row mt-[30px]">
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <QuestionIcon className="ml-[220px] cursor-pointer" />
        </div>
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <QuestionIcon className="ml-[220px] cursor-pointer" />
        </div>
        <div className="bg-[#F5F5F5] p-5 rounded-2xl flex flex-col gap-5 w-[300px] h-auto">
          <p>
            Что можно приобрести во <br /> внутреннем магазине?
          </p>
          <QuestionIcon className="ml-[220px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
