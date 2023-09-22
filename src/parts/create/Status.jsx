import { AppContext } from '@/App';
import { useContext, useId, useState, useEffect } from 'react';

function Status({ value = "대기중", title, className, labelClassName, ...restProps }) {
  const { id } = useId();
  const { updateCreateRoomForm } = useContext(AppContext);
  const [data, setData] = useState(value);

  useEffect(() => {
    updateCreateRoomForm('status', data)
  }, [data])

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {title}
      </label>
      <select
        value={data || ""}
        onChange={handleInputChange}
        id={id}
        className={className}
        {...restProps}
        name="status"
      >
        <option value="대기중">대기중</option>
        <option value="진행중">진행중</option>
        <option value="공구종료">공구종료</option>
      </select>
    </>
  );
}

export default Status;
