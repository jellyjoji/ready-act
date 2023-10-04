import {string, number} from 'prop-types';

function HomeIcon({homeSize = 24, homeColor = '#8D948F'}) {
  return (
    <svg
      width={homeSize}
      height={homeSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3 3.70002L4.10005 10.6C3.90005 10.8 3.80005 11.1 3.80005 11.3V19.6C3.80005 20.2 4.20005 20.6 4.80005 20.6H9.00005C9.60005 20.6 10 20.2 10 19.6V15.1C10 14.5 10.4 14.1 11 14.1H13C13.6 14.1 14 14.5 14 15.1V19.6C14 20.2 14.4 20.6 15 20.6H19.3C19.9 20.6 20.3 20.2 20.3 19.6V11.3C20.3 11 20.2 10.8 20 10.6L12.8 3.70002C12.3 3.30002 11.7 3.30002 11.3 3.70002Z"
        stroke={homeColor}
        strokeWidth="1.3"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

HomeIcon.propTypes = {
  homeSize: number,
  homeColor: string,
};

export default HomeIcon;
