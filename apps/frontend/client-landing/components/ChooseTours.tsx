import React from 'react';
import { Button } from '../../../../packages/ui/components/ui/button';
import Image from 'next/image';

const choiseTours = [
  { id: 1, name: 'Город', button: 'Алматы' },
  { id: 2, name: 'Тип Тура', button: 'Водный' },
  { id: 3, name: 'Дата', button: 'Любое' },
  { id: 4, name: 'Кол-во людей', button: 'Взрослые' },
];

export default function ChooseTours() {
  return (
    <div className="bg-gradient-to-r from-[#489FC4] via-[#6FABC5] to-[#489FC4] w-[95%] m-10 rounded-3xl p-10 flex flex-col gap-10">
      <div className="flex justify-center gap-5">
        <Button className="py-3 px-[60px] bg-foreground rounded-full text-[#747474]">
          Подбор туров
        </Button>
        <Button className="py-3 px-[100px] bg-transparent border border-white rounded-full text-foreground">
          Подбор достопримечательностей
        </Button>
      </div>
      <div className="flex ">
        <div className="flex justify-center gap-10">
          {choiseTours.map((elem, index) => (
            <div key={elem.id} className="flex gap-[5vw] items-center">
              <p className="flex flex-col gap-5">
                <span className="text-foreground text-xl w-[15vw]">{elem.name}</span>
                <span className="text-foreground text-xl flex gap-3">
                  {elem.button} <Image src="dropDownLight.svg" alt="line" width={15} height={0} />
                </span>
              </p>
              {index < choiseTours.length - 1 && (
                <Image src="line.svg" alt="line" width={1} height={1} />
              )}
            </div>
          ))}
        </div>
        <Image src="searchIcon.svg" alt="search" width={80} height={50} />
      </div>
    </div>
  );
}
