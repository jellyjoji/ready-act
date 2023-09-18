import { string } from 'prop-types';
import { useId } from 'react';

function Input({ type = 'text', placeholder, className, ...restProps }) {
  const id = useId();

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
      {...restProps}
    />
  );
}

Input.propTypes = {
  type: string,
  placeholder: string,
  className: string,
};

export default Input;