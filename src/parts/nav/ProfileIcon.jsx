import {string, number} from 'prop-types';

function ProfileIcon({profileSize = 24, profileColor = '#8D948F'}) {
  return (
    <svg
      width={profileSize}
      height={profileSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 11.0625C14.2834 11.0625 16.1344 9.21147 16.1344 6.9281C16.1344 4.64473 14.2834 2.7937 12 2.7937C9.71663 2.7937 7.8656 4.64473 7.8656 6.9281C7.8656 9.21147 9.71663 11.0625 12 11.0625Z"
        stroke={profileColor}
        strokeWidth="1.3"
        strokeMiterlimit={10}
      />
      <path
        d="M4.54993 19.55V18.25C4.54993 15.45 6.74993 13.25 9.54993 13.25H14.4499C17.2499 13.25 19.4499 15.45 19.4499 18.25V19.55H4.54993Z"
        stroke={profileColor}
        strokeWidth="1.3"
        strokeMiterlimit={10}
      />
    </svg>
  );
}

ProfileIcon.propTypes = {
  profileSize: number,
  profileColor: string,
};

export default ProfileIcon;
