import {node, string} from 'prop-types';
import {useId, forwardRef} from 'react';

function ContentTextarea(
  {title, placeholder, className, labelClassName, ...restProps},
  ref
) {
  const {id} = useId();

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

ContentTextarea.propTypes = {
  TextArearef: node,
  title: string,
  placeholder: string,
  className: string,
  labelClassName: string,
};

export default forwardRef(ContentTextarea);
