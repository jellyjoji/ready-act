import { AppContext } from '@/App';
import { useEffect, useState, useContext, useId } from 'react';


function ContentTextarea(
  { value = "", title, placeholder, className, labelClassName, ...restProps }) {
  const { id } = useId();
  const { updateCreateRoomForm } = useContext(AppContext);
  const [data, setData] = useState(value);

  useEffect(() => {
    updateCreateRoomForm('content', data);


  }, [data])

  const handleInputChange = (e) => {

    setData(e.target.value);

    // console.log(setData);

  };

  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {title}
      </label>
      <textarea
        value={data}
        onChange={handleInputChange}
        id={id}
        placeholder={placeholder}
        className={className}
        {...restProps}
      />
    </>
  );
}

export default ContentTextarea;
