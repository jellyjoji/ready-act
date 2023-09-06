import {useId} from 'react';
import {string} from 'prop-types';

function Input({
  type,
  placeholder,
  labelClassName,
  inputClassName,
  ...restProps
}) {
  const id = useId();

  return (
    <>
      <form>
        <label htmlFor={id} className={labelClassName}></label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={inputClassName}
          {...restProps}
        />
      </form>
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
