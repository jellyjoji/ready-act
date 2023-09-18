import { arrow } from '/src/assets/icons/svg-icons';
import { forwardRef } from 'react'
import { Link } from "react-router-dom";

function MeetingPoint({ title, ...restProps }, ref) {



  return (<>

    <div className='flex justify-between w-full py-4 defaultInput bg-white'>
      <label ref={ref}>{title}</label>

      <Link to="/location">
        <img src={arrow} alt="만날 장소 지도 이동" {...restProps} />
      </Link>

    </div>



  </>
  )
}
export default forwardRef(MeetingPoint);