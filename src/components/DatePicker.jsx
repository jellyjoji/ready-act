import { useState, useId } from "react";

function DatePicker({ title, className }) {
  const [date, setDate] = useState(new Date());
  const id = useId();


  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        className={className}
        type="datetime-local"
        value={date}
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          setDate(newDate);
        }}
      />

    </>
  )
}

export default DatePicker;