'use client';
import { useRouter } from 'next/navigation';
import { BadgeCheck, Trophy, MountainSnow } from 'lucide-react';
import ArrowButtonBlue from '../public/svg/ArrowButtonBlue';

export default function SelectTour() {
  const router = useRouter();

  return (
      <div className="relative h-[720px] sm:h-[800px] lg:h-[860px] overflow-hidden mt-[10px]">
        <div
            className="relative flex flex-col justify-center items-start w-[95%] mx-auto h-full px-6 sm:px-12 py-10 rounded-[30px] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(/bg-mountain.png)' }}
        >
          {/* 🧭 Верхняя панель — Уровень + Рейтинг */}
          <div className="absolute top-6 right-6 flex gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl shadow-sm">
              <MountainSnow className="w-5 h-5" />
              <span>Уровень 2 — Проводник</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition">
              <Trophy className="w-5 h-5" />
              <span>Рейтинг</span>
            </div>
          </div>

          {/* 📣 Заголовок */}
          <div className="z-10 mt-10 sm:mt-0 max-w-[700px]">
            <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow">
              Путешествуйте <br />
              с удовольствием, выбирайте <br />
              TrusTTravel!
            </h2>

            {/* 📊 Прогресс */}
            <div className="relative w-full h-[10px] bg-white/20 rounded-full mt-4 mb-2">
              <div
                  className="absolute top-0 left-0 h-full bg-blue-400 rounded-full transition-all duration-500"
                  style={{ width: '40%' }}
              />
            </div>
            <span className="text-white text-sm">2/5 туров до нового достижения</span>
          </div>

          {/* ⚡ Низ — XP + CTA */}
          <div className="z-10 mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-6">
            {/* 🎖 XP Badge */}
            <div className="mb-4 sm:mb-0 flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl shadow-md animate-pulse">
              <BadgeCheck className="w-5 h-5" />
              <span>+100 XP</span>
            </div>

            {/* CTA Кнопка */}
            <button
                onClick={() => router.push('/tours')}
                className="flex items-center gap-4 px-6 py-4 bg-white/90 text-lightblue font-semibold text-lg rounded-full border border-lightblue hover:bg-white transition-all shadow-md"
            >
              <ArrowButtonBlue className="w-5 h-5" />
              Выбрать Тур
            </button>
          </div>
        </div>
      </div>
  );
}
