import { AppContext } from '@/App';
import { useContext, useState } from 'react';


function Content(
  { value = "", title, placeholder, className, labelClassName, ...restProps }) {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [data, setData] = useState(value);

  const handleInputChange = (e) => {
    setData(e.target.value);
    updateCreateRoomForm('content', data);
  };

  return (
    <>
      <label htmlFor="content" className={labelClassName}>
        내용
      </label>
      <textarea
        value={data}
        onChange={handleInputChange}
        id="content"
        placeholder={placeholder}
        className={className}
        {...restProps}
      />
    </>
  );
}

export default Content;
