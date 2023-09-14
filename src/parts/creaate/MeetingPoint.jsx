import { arrow } from '/src/assets/icons/svg-icons';
import Location from "../map/Location";
import { forwardRef } from 'react'

function MeetingPoint({ title }, ref) {

  return (<>

    <form ref={mapRef} className='flex justify-between w-full'>
      <label ref={ref}>{title}</label>
      <img src={arrow} alt="arrow" />
    </form>

    <Location></Location>



  </>
  )
}
export default forwardRef(MeetingPoint);