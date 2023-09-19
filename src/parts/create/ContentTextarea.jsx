import { forwardRef, useId } from 'react';

function ContentTextarea(
  { title, placeholder, className, labelClassName, ...restProps },
  ref
) {
  const { id } = useId();

  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {title}
      </label>
      <textarea
        ref={ref}
        id={id}
        placeholder={placeholder}
        className={className}
        {...restProps}
      />
    </>
  );
}

export default forwardRef(ContentTextarea);
