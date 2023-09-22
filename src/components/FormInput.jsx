import { useId } from 'react';

function FormInput(
  {
    label,
    type,
    name,
    placeholder,
    labelClassName,
    inputClassName,
    ...restProps
  }
) {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClassName}
        {...restProps}
      />
    </>
  );
}

export default FormInput;
