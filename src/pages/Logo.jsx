import {useEffect, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';

import Button from '@/components/Button';
import AnimationLogo from '@/parts/AnimationLogo';
import {Helmet} from 'react-helmet-async';

const SPLASH_KEY = 'd3mj2aom9hmfz7v';

function Logo() {
  const [isShowSplash] = useState(() => {
    const splash = JSON.parse(localStorage.getItem(SPLASH_KEY));
    return splash ? true : false;
  });

  useEffect(() => {
    if (!isShowSplash) {
      localStorage.setItem(SPLASH_KEY, JSON.stringify(true));
    }
  }, [isShowSplash]);

  if (isShowSplash) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Helmet>
        <title>R09M</title>
      </Helmet>
      <div className="bg-primary-600 w-[576px] h-[740px] text-center flex justify-center items-center relative">
        <h1 className="sr-only">R09M</h1>
        <AnimationLogo />
        <Link to="/home" className="absolute bottom-10">
          <Button className="goToHomepage lgFontButton hover:hoverGoToHomepage">
            홈페이지로 가기
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Logo;
