import styles from '@/styles/Nav.module.css';
import {number, string} from 'prop-types';
import {NavLink} from 'react-router-dom';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';
import SearchIcon from './SearchIcon';

function Nav({
  homeSize,
  homeColor,
  searchSize,
  searchColor,
  profileSize,
  profileColor,
  homeSpan,
  searchSpan,
  profileSpan,
}) {
  return (
    <nav className="bg-white fixed bottom-0 max-w-xl w-full py-3 z-50">
      <ul className="flex justify-around">
        <li>
          <NavLink to="/home">
            <div className={styles.nav}>
              <HomeIcon homeSize={homeSize} homeColor={homeColor} />
              <span className={`${styles.span} ${homeSpan}`}>홈</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <div className={styles.nav}>
              <SearchIcon searchSize={searchSize} searchColor={searchColor} />
              <span className={`${styles.span} ${searchSpan}`}>검색</span>
            </div>
          </NavLink>
        </li>
        <li>
          {!localStorage.getItem('pocketbase_auth') ? (
            <NavLink to="/signin">
              <div className={styles.nav}>
                <ProfileIcon
                  profileSize={profileSize}
                  profileColor={profileColor}
                />
                <span className={`${styles.span} ${profileSpan}`}>내 정보</span>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/profile">
              <div className={styles.nav}>
                <ProfileIcon
                  profileSize={profileSize}
                  profileColor={profileColor}
                />
                <span className={`${styles.span} ${profileSpan}`}>내 정보</span>
              </div>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
Nav.propTypes = {
  profileSize: number,
  profileColor: string,
  homeSize: number,
  homeColor: string,
  searchSize: number,
  searchColor: string,
  homeSpan: string,
  searchSpan: string,
  profileSpan: string,
};

export default Nav;
