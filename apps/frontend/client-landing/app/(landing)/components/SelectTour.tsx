import React from 'react';
import Button from '@/components/ui/Button';

export default function SelectTour() {
  return (
    <section className="bg-[#489FC4] mt-[30px] p-6 rounded-[40px]">
      <div className="flex flex-col gap-4">
        <Button variant="primaryWhite">Подбор туров</Button>
        <Button variant="primaryOutline">Подбор достопримечательностей</Button>
      </div>

      <form className="flex flex-col items-center mt-[20px] gap-2">
        <div className="w-full flex flex-col gap-2">
          <label className="text-white">город</label>
          <select className="py-4 px-4 rounded-[40px] text-[#1E1E1E]">
            <option>Алматы</option>
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-white">город</label>
          <select className="py-4 px-4 rounded-[40px] text-[#1E1E1E]">
            <option>Алматы</option>
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-white">город</label>
          <select className="py-4 px-4 rounded-[40px] text-[#1E1E1E]">
            <option>Алматы</option>
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-white">город</label>
          <select className="py-4 px-4 rounded-[40px] text-[#1E1E1E]">
            <option>Алматы</option>
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-white">город</label>
          <select className="py-4 px-4 rounded-[40px] text-[#1E1E1E]">
            <option>Алматы</option>
          </select>
        </div>

        <Button
          variant="primaryTransperent"
          size="custom"
          className="mt-[30px] w-[90%] flex-row-reverse gap-2"
          iconType="search">
          Найти
        </Button>
      </form>
    </section>
  );
}
