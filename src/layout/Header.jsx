import {Link} from 'react-router-dom';
import prev from '@/assets/icons/prev.svg';

function Header() {
  return (
    <div className="relative">
      <Link to="/home">
        <img src="/favicon.png" alt="공구룸 로고" className="w-12 m-auto" />
      </Link>
      <Link to="/home">
        <img src={prev} alt="뒤로 가기" className="absolute top-3" />
      </Link>
    </div>
  );
}

export default Header;
