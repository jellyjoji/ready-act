import Button from '@/components/Button';
import AnimationLogo from '@/parts/AnimationLogo';
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <>
      <div className="bg-primary-600 w-[576px] h-[740px] text-center flex justify-center items-center relative">
        <AnimationLogo />
        <Link to="/r09m" className='absolute bottom-10'>
          <Button
            type="button"
            text="홈페이지로 가기"
            className="goToHomepage lgFontButton hover:hoverGoToHomepage"
          ></Button>
        </Link>
      </div>
    </>
  );
}

export default Logo;
