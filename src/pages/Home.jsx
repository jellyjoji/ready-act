import {category} from '@/data/category';
import Map from '@/parts/map/Map';
import {currentLocation} from '@/parts/map/currentLocation';
import {mapMark} from '@/parts/map/mapMark';
import {Link} from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import {FreeMode, Keyboard, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import inactiveAlarm from '@/assets/inactiveAlarm.svg';
import myLocation from '@/assets/myLocation.svg';
import reset from '@/assets/reset.svg';

function Home() {
  return (
    <div className="relative p-4">
      <h2 className="text-lg font-semibold">공구룸</h2>
      <button>
        <img
          src={inactiveAlarm}
          alt="알림 없음"
          className="absolute top-4 right-4"
        />
      </button>

      <Swiper
        slidesPerView={5.5}
        spaceBetween={10}
        freeMode={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        modules={[FreeMode, Keyboard, Mousewheel]}
      >
        {category.map(({title, path, img}) => (
          <SwiperSlide key={title}>
            <Link to={path}>
              <figure className="flex flex-col items-center m-1">
                <img
                  src={img}
                  alt={title}
                  aria-hidden="true"
                  className="box-content w-12 bg-line-400 rounded-2xl py-1"
                />
                <figcaption className="text-greenishgray-800 font-medium">
                  {title}
                </figcaption>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative">
        <Map />
        <button
          type="button"
          className="border-2 border-primary-500 rounded-full p-1 bg-white absolute left-2 bottom-14 z-50"
          onClick={mapMark}
        >
          <img src={reset} alt="기존 위치로 되돌아가기" />
        </button>
        <button
          type="button"
          className="border-2 border-primary-500 rounded-full p-1 bg-white absolute left-2 bottom-2 z-50"
          onClick={currentLocation}
        >
          <img src={myLocation} alt="현재 위치로 가기" />
        </button>
      </div>
    </div>
  );
}

export default Home;
