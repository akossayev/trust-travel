import React from 'react';
import Image from 'next/image';

export default function SelectTour() {
  const toursCard = [
    { id: 1, title: 'Активный отдых', imgSrc: '/arrowButtonCard.svg' },
    { id: 2, title: 'Активный отдых', imgSrc: '/arrowButtonCard.svg' },
    { id: 3, title: 'Активный отдых', imgSrc: '/arrowButtonCard.svg' },
  ];

  return (
    <div className="mx-3 h-[550px] sm:h-[520px] lg:h-[840px] xl:h-[700px] 2xl:h-[840px] overflow-hidden">
      <div
        className="w-full bg-no-repeat min-h-screen bg-cover rounded-[30px] p-[20px] flex flex-col justify-between "
        style={{ backgroundImage: 'url(/bgMountain.png)' }}>
        <h1 className="text-xl font-semibold text-foreground sm2:text-2xl lg:text-4xl xl:text-5xl">
          Путешествуйте <br /> с удовольствием, выбирайте <br /> TrusTTravel!
        </h1>
        <div className="relative lg:static lg:flex lg:flex-row-reverse lg:items-end lg:justify-between">
          <div className="flex gap-3 ml-[60px] w-[450px] sm:w-[650] sm:ml-[100px] md:ml-[190px] xl:mr-[-100px]">
            {toursCard.map((elem) => (
              <div
                className="bg-white/50 rounded-[20px] p-2 sm2:p-3 pb-0 pt-3 xl:pt-5 flex flex-col gap-3 xl:gap-10 sm:gap-6 w-[110px] sm2:w-[130px] sm:w-[180px] h-[130px] sm2:h-[140px] sm:h-[200px] xl:w-[200px] xl:h-[240px]"
                key={elem.id}>
                <button className="flex items-center gap-1 text-foreground text-left text-sm sm2:text-base sm:text-xl xl:text-2xl">
                  {elem.title}
                  <Image
                    src={elem.imgSrc}
                    alt="card-button-weekend"
                    width={20}
                    height={30}
                    className="w-[25px] sm2:w-[30px] sm:w-[50px]"
                    loading="lazy"
                  />
                </button>
                <Image
                  src="/cardTour.png"
                  alt="card-button-weekend"
                  width={110}
                  height={30}
                  className="sm2:w-[120px] sm:w-[170px] xl:w-[190px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button className="w-[230px] xl:text-xl xl:h-[50px] xl:w-[220px] xl:rounded-[40px] xl:gap-[10px] lg:h-[50px] lg:py-7 lg:px-1 lg:text-xl sm:w-[300px] flex items-center p-1 gap-7 lg:gap-3 sm:gap-[50px] rounded-[30px] bg-white/50 lg:bg-white/90 text-[#489FC4] text-lg border border-[#489FC4] absolute top-[190px] sm:top-[250px] left-[30px] sm2:left-[50px] sm3:left-[70px] sm:left-[22%] md:left-[27%] lg:static">
            <Image
              src="/arrowButton.svg"
              alt="card-button-weekend"
              width={50}
              height={30}
              className="xl:w-[50px]"
              loading="lazy"
            />
            Выбрать тур
          </button>
        </div>
      </div>
    </div>
  );
}
