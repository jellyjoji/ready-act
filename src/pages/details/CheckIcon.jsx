import {string} from 'prop-types';

function CheckIcon({color}) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={14} cy={14} r={14} fill={color} />
      <path
        d="M9.33337 13.1112L13.0206 16.6668L18.6667 11.3335"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

CheckIcon.propTypes = {
  color: string,
};

export default CheckIcon;
