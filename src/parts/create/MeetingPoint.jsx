import arrow from '@/assets/icons/arrow.svg';
import {Link} from 'react-router-dom';

function MeetingPoint({title, ...restProps}) {
  return (
    <>
      <div className="flex justify-between w-full py-4 bg-white">
        <Link to="/location">
          <img src={arrow} alt="만날 장소 지도 이동" {...restProps} />
        </Link>
      </div>
    </>
  );
}

export default MeetingPoint;
