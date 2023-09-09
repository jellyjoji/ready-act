import { useId } from 'react';
import { string } from 'prop-types';

function Input({
  type,
  placeholder,
  labelClassName,
  inputClassName,
  title,
  ...restProps
}) {
  const id = useId();

  return (
    <>

      <label htmlFor={id} className={labelClassName}>{title}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        {...restProps}
      />

    </>
  );
}

Input.propTypes = {
  type: string,
  placeholder: string,
  labelClassName: string,
  inputClassName: string,
};

export default Input;
