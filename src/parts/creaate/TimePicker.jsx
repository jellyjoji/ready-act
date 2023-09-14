import React, { useState, forwardRef } from "react";
// import Input from "@/components/Input";

function TimePicker({ title, className }, ref) {
  const [time, setTime] = useState(null);


  return (
    <div>
      {title}
      <input ref={ref} className={className} type="time" onChange={(e) => setTime(e.target.value)} />
    </div>
  );
};

export default forwardRef(TimePicker);