import {category} from '@/data/category';
import {Link} from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import {FreeMode, Keyboard, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

function Home() {
  return (
    <div className="relative px-5 py-1">
      <h2 className="text-lg font-semibold">공구룸</h2>
      <button>
        <img
          src="/inactiveAlarm.svg"
          alt="알림"
          className="absolute top-2 right-5"
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
        {category.map((category) => (
          <SwiperSlide key={category.title}>
            <Link to={category.path}>
              <figure className="flex flex-col items-center m-1">
                <img
                  src={category.img}
                  alt={category.title}
                  className="box-content w-12 bg-line-400 rounded-2xl py-1"
                />
                <figcaption className="text-greenishgray-800 font-medium">
                  {category.title}
                </figcaption>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
