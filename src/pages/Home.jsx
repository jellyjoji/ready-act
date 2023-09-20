import myLocation from '@/assets/icons/myLocation.svg';
import plus from '@/assets/icons/plus.svg';
import reset from '@/assets/icons/reset.svg';
import Button from '@/components/Button';
import {category} from '@/data/category';
import Header from '@/layout/Header';
import {currentLocation} from '@/parts/map/currentLocation';
import {mapMark} from '@/parts/map/mapMark';
import Nav from '@/parts/nav/Nav';
import styles from '@/styles/Home.module.css';
import {useEffect, useRef} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import {FreeMode, Keyboard, Mousewheel} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

function Home() {
  const mainMapRef = useRef(null);

  useEffect(() => {
    mapMark(mainMapRef.current);
  }, []);

  return (
    <>
      <Helmet>
        <title>R09M - 홈</title>
      </Helmet>
      <div className="relative p-4">
        <h1 className="sr-only">R09M</h1>
        <Header />
        <h2 className="text-lg font-semibold pb-4">공구룸</h2>

        <Swiper
          slidesPerView={4.5}
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
                    className="box-content w-12 bg-line-400 rounded-2xl p-1 mb-2"
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
          <div ref={mainMapRef} className="w-full h-[65vh] my-3">
            {/* <Map /> */}
            <Button
              type="button"
              className={`${styles.button} left-2 bottom-16 bg-white p-2`}
              onClick={() => {
                mapMark(mainMapRef.current);
              }}
            >
              <img src={reset} alt="기존 위치로 되돌아가기" />
            </Button>
            <Button
              type="button"
              className={`${styles.button} left-2 bottom-2 bg-white p-2`}
              onClick={() => {
                currentLocation(mainMapRef.current);
              }}
            >
              <img src={myLocation} alt="현재 위치로 가기" />
            </Button>
            <Button
              type="button"
              className={`${styles.button} right-2 bottom-2 bg-primary-500`}
            >
              <Link to="/createRoom">
                <img src={plus} alt="방 만들기" className="w-12 h-12 p-2" />
              </Link>
            </Button>
          </div>
        </div>
        <Nav homeColor="#000" homeSpan="navSpan" />
      </div>
    </>
  );
}

export default Home;
