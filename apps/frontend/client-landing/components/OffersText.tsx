import React from 'react';
import { Button } from '../../../../packages/ui/components/ui/button';
import Image from 'next/image';
import OffersTextButtons from './OffersTextButtons';

export default function OffersText() {
  return (
    <div
      className="w-full h-[350px] bg-no-repeat bg-cover py-20 px-[180px] my-20 flex items-center justify-between"
      style={{ backgroundImage: 'url(bgLineOffersText.svg)' }}>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-medium">
            Подключите аккаунт TrustTravel <br /> и путешествуйте выгоднее
          </h2>
          <p className="text-xl font-light">
            Вернем вам до 8% заотели, аренду <br /> машин имногое другое— просто <br /> перейдите
            покнопке, <br />
            авторизируйтесь иначните копить
          </p>
        </div>
        <Button className="rounded-full py-3 px-[60px] text-foreground bg-[radial-gradient(circle,#489FC4,#3771C8)] w-[180px] text-lg">
          Хочу!
        </Button>
      </div>
      <OffersTextButtons />
    </div>
  );
}
