import { AppContext } from '@/App';
import FormInput from '@/components/FormInput';
import { useState, useContext, useEffect } from 'react';

function PickUp({ value = null, label, title, className, labelClassName, ...restProps }) {

  const { updateCreateRoomForm } = useContext(AppContext);
  const [data, setData] = useState(value);

  useEffect(() => {
    updateCreateRoomForm('pickUp', data)
  }, [data])

  const handleInputChange = (e) => {
    setData(e.target.value);
  }
  return (
    <div>
      <FormInput
        title={title}
        value={data || ''}
        onChange={handleInputChange}
        type="datetime-local"
        placeholder="픽업 날짜와 시간을 선택헤주세요"
        labelClassName="product name"
        inputClassName="defaultInput w-full"
        label={label}
        {...restProps}
      />
    </div>
  )
}

export default PickUp;
