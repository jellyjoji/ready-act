import {forwardRef, useId, useState} from 'react';

function DatePicker({title, className, labelClassName, ...restProps}, ref) {
  const [, setDate] = useState(null);
  const id = useId();

  return (
    <div>
      <label htmlFor="pickup" className={labelClassName}>
        픽업 날짜
      </label>
      <input
        id="pickup"
        ref={ref}
        className={className}
        type="date"
        onChange={(e) => setDate(e.target.value)}
        {...restProps}
      />
    </div>
  );
}

export default forwardRef(DatePicker);
