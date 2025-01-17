import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HeaderSwiper() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState(); // 슬라이드용

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <div className="relative">
      <Swiper
        className="swiper1 h-300pxr min-w-375pxr max-w-680pxr bg-slate-500"
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={{
          nextEl: '.next-slide-button',
          prevEl: '.prev-slide-button',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'bg-gray-500 rounded-full text-white',
        }}
        autoplay={{ delay: 7000 }}
        loop={true}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        <SwiperSlide className="h-full">
          <img src="/images/main/swiper/swiperBigImg.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img src="/images/main/swiper/swiperBigImg2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img src="/images/main/swiper/swiperBigImg3.svg" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="prev-slide-button absolute left-20pxr top-125pxr z-10 rounded-full bg-slate-200/60">
        <img src="/images/main/swiper/leftArrow.svg" alt="" />
      </div>
      <div className="next-slide-button absolute right-20pxr top-125pxr z-10 rounded-full bg-slate-200/60">
        <img src="/images/main/swiper/rightArrow.svg" alt="" />
      </div>
      <div className=" absolute bottom-3 right-20pxr z-10 flex h-20pxr w-50pxr items-center justify-center rounded-xl bg-gray-500/60 text-center text-white">
        <span>{swiperIndex + 1}</span>
        <span>{'/'}</span>
        <span>{3}</span>
      </div>
      {/* <div>
        <button
          onClick={handlePrev}
          className=" absolute left-200pxr top-20 rounded-full bg-slate-400 "
        >
          <img src="/images/main/swiper/leftArrow.svg" alt="" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-200pxr top-20 rounded-full bg-slate-400"
        >
          <img src="/images/main/swiper/rightArrow.svg" alt="" />
        </button>
      </div> */}
    </div>
  );
}

export default HeaderSwiper;
