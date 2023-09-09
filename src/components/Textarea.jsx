import { useId } from 'react';

function TextArea({ TextArearef, title, placeholder, className, labelClassName, ...restProps }) {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className={labelClassName}>{title}</label>
      <textarea
        ref={TextArearef}
        id={id}
        placeholder={placeholder}
        className={className}
        {...restProps}
      />
    </>
  );
};
export default TextArea;