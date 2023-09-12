import Button from '@/components/Button';
import AnimationLogo from '@/parts/AnimationLogo';
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <>
      <div className="bg-primary-600 w-[576px] h-[900px] text-center flex justify-center items-center relative">
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
