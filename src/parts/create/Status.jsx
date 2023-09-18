import { useId, forwardRef } from 'react';

function Status({ title, className, labelClassName, ...restProps }, ref) {
  // const [status, setStatus] = useState("대기중");

  // const handleChange = (event) => {
  //   setStatus(event.target.value);
  // };
  // component 에서는 상태를 가지지 않는것이 관리에 편리하다.
  // 파일을 저장하기 위해선 form data 를 사용해야하기때문에 useRef 를 사용해야한다. 

  const id = useId();

  return (
    <>
      <label htmlFor={id} labelClassName={labelClassName} >{title}</label>
      <select ref={ref} id={id} className={className} {...restProps} name="status" defaultValue="대기중">
        <option value="대기중">대기중</option>
        <option value="진행중">진행중</option>
        <option value="공구종료">공구종료</option>
      </select>
    </>
  )
}
export default forwardRef(Status);