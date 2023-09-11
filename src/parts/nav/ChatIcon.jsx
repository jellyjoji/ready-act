import {string, number} from 'prop-types';

function ChatIcon({size = 24, color = '#8D948F'}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0116 20.2726C17.0872 20.2726 21.1866 15.5875 20.1129 10.3168C19.5273 7.09575 16.8919 4.46038 13.6709 3.87474C8.30258 2.89868 3.71509 6.90054 3.71509 11.9761V12.3665V20.2726H12.0116Z"
        stroke={color}
        strokeWidth="1.3"
        strokeMiterlimit={10}
      />
      <path
        d="M9.16479 10.2527H14.8352"
        stroke={color}
        strokeWidth="1.3"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M9.16479 13.7473H12.7317"
        stroke={color}
        strokeWidth="1.3"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

ChatIcon.propTypes = {
  size: number,
  color: string,
};

export default ChatIcon;
