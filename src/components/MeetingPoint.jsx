import { arrow } from '../../public/assets/svg-icons';
import Location from "../components/Location";

function MeetingPoint({ title }) {

  return (<>

    <div className='flex justify-between w-full'>
      <label>{title}</label>
      <img src={arrow} alt="arrow" />
    </div>


    <Location></Location>



  </>
  )
}
export default MeetingPoint;