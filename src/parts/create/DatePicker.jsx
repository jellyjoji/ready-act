import {string} from 'prop-types';
import {useState, forwardRef, useId} from 'react';
// import Input from "@/components/Input";

function DatePicker({title, className, labelClassName, ...restProps}, ref) {
  const [, setDate] = useState(null);
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {title}
      </label>
      <input
        id={id}
        ref={ref}
        className={className}
        type="date"
        onChange={(e) => setDate(e.target.value)}
        {...restProps}
      />
    </div>
  );
}

DatePicker.propTypes = {
  title: string,
  className: string,
  labelClassName: string,
};

export default forwardRef(DatePicker);
