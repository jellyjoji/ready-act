import {Link} from 'react-router-dom';
import prev from '@/assets/icons/prev.svg';
import {string} from 'prop-types';

function Header({link = '/home'}) {
  return (
    <div className="relative">
      <Link to="/home">
        <img src="/favicon.png" alt="공구룸 로고" className="w-12 m-auto" />
      </Link>
      <Link to={link}>
        <img src={prev} alt="뒤로 가기" className="absolute top-3" />
      </Link>
    </div>
  );
}

Header.propTypes = {
  link: string,
};

export default Header;
