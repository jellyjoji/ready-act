import {forwardRef} from 'react';

function Status({title, className, labelClassName, ...restProps}, ref) {
  return (
    <>
      <label htmlFor="status" className={labelClassName}>
        상태
      </label>
      <select
        ref={ref}
        id="status"
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

export default forwardRef(Status);
