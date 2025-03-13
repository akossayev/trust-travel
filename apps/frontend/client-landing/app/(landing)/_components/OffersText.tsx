import React from 'react';

export default function OffersText() {
  return (
    <div className="flex flex-col items-center">
      <h2>Подключите аккаунт TrustTravel и путешествуйте выгоднее</h2>
      <p>
        Вернем вам до 8% за отели, аренду машин и многое другое — просто перейдите по кнопке,
        авторизируйтесь и начните копить
      </p>
      <button className="p-3 w-[150px] h-[50px] rounded-[30px] text-foreground border-[#C8C8C8] bg-gradient-to-r from-[#489FC4] to-[#3771C8]">
        Хочу!
      </button>
    </div>
  );
}
