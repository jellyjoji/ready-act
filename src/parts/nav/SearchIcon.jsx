import {string, number} from 'prop-types';

function SearchIcon({searchSize = 24, searchColor = '#8D948F'}) {
  return (
    <svg
      width={searchSize}
      height={searchSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.6249"
        cy="10.409"
        r="7.85"
        transform="rotate(-45 11.6249 10.409)"
        stroke={searchColor}
        strokeWidth="1.3"
      />
      <path
        d="M17.2817 16.0659L20.8173 19.6014"
        stroke={searchColor}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

SearchIcon.propTypes = {
  searchSize: number,
  searchColor: string,
};

export default SearchIcon;
