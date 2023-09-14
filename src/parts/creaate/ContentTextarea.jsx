import { useId, forwardRef } from 'react';

function ContentTextarea({ TextArearef, title, placeholder, className, labelClassName, ...restProps }, ref) {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className={labelClassName}>{title}</label>
      <textarea
        ref={ref}
        id={id}
        placeholder={placeholder}
        className={className}
        {...restProps}
      />
    </>
  );
};
export default forwardRef(ContentTextarea);