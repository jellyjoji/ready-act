import { useId } from 'react';

function TextArea({ title, placeholder, className, labelClassName, ...restProps }) {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className={labelClassName}>{title}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={className}
        {...restProps}
      />
    </>
  );
};
export default TextArea;