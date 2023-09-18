import {string} from 'prop-types';
import {useId, forwardRef} from 'react';

function Status({title, className, labelClassName, ...restProps}, ref) {
  const {id} = useId();

  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {title}
      </label>
      <select
        ref={ref}
        id={id}
        className={className}
        {...restProps}
        name="status"
        defaultValue="대기중"
      >
        <option value="대기중">대기중</option>
        <option value="진행중">진행중</option>
        <option value="공구종료">공구종료</option>
      </select>
    </>
  );
}

Status.propTypes = {
  title: string,
  className: string,
  labelClassName: string,
};
export default forwardRef(Status);
