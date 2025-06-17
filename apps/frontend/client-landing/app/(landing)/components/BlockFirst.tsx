import React from 'react';
import Button from '@/components/ui/Button';

export default function BlockFirst() {
  return (
    <section className="h-[580px] relative">
      <div
        style={{ backgroundImage: 'url(/mountain-bg-mobile.png)' }}
        className="h-[500px] p-6 bg-no-repeat bg-cover bg-center rounded-[30px] flex flex-col justify-between">
        <h2 className="text-white text-xl font-semibold">
          Путешествуйте <br /> с удовольствием, выбирайте <br /> TrusTTravel!
        </h2>

        <div className="flex justify-between flex-row-reverse items-end">
          <div className="bg-white/50 w-[250px] h-[150px] rounded-[20px] p-3 ">
            <h2 className="text-white">
              Искуственный интелект уже <br /> на нашей платформе!
            </h2>
          </div>
          <Button
            variant="link"
            size="lg"
            iconType="arrowSide"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:static sm:-translate-x-0 sm:bg-white/90">
            Выбрать Тур
          </Button>
        </div>
      </div>
    </section>
  );
}
