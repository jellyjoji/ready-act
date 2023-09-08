import styles from '@/styles/Nav.module.css';
import { NavLink } from 'react-router-dom';
import ChatIcon from './ChatIcon';
import HomeIcon from './HomeIcon';
import ProfileIcon from './ProfileIcon';
import SearchIcon from './SearchIcon';

function Nav() {
  return (
    <nav>
      <ul className="flex justify-around ">
        <li>
          <NavLink to="/">
            <div className={styles.nav}>
              <HomeIcon />
              <span className={`${styles.span} ${styles.active}`}>홈</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <div className={styles.nav}>
              <SearchIcon />
              <span className={styles.span}>검색</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat">
            <div className={styles.nav}>
              <ChatIcon />
              <span className={styles.span}>채팅</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <div className={styles.nav}>
              <ProfileIcon />
              <span className={styles.span}>내 정보</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
