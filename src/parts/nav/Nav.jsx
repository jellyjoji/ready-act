import styles from '@/styles/Nav.module.css';
import {NavLink} from 'react-router-dom';
import ChatIcon from './ChatIcon';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';
import SearchIcon from './SearchIcon';
import {number, string} from 'prop-types';

function Nav({
  homeSize,
  homeColor,
  searchSize,
  searchColor,
  chatSize,
  chatColor,
  profileSize,
  profileColor,
  homeSpan,
  searchSpan,
  chatSpan,
  profileSpan,
}) {
  return (
    <nav>
      <ul className="flex justify-around ">
        <li>
          <NavLink to="/r09m">
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
          <NavLink to="/chat">
            <div className={styles.nav}>
              <ChatIcon chatSize={chatSize} chatColor={chatColor} />
              <span className={`${styles.span} ${chatSpan}`}>채팅</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <div className={styles.nav}>
              <ProfileIcon
                profileSize={profileSize}
                profileColor={profileColor}
              />
              <span className={`${styles.span} ${profileSpan}`}>내 정보</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
Nav.propTypes = {
  chatSize: number,
  profileSize: number,
  chatColor: string,
  profileColor: string,
  homeSize: number,
  homeColor: string,
  searchSize: number,
  searchColor: string,
  homeSpan: string,
  searchSpan: string,
  chatSpan: string,
  profileSpan: string,
};

export default Nav;
