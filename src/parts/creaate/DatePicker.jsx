
import React, { useState, forwardRef } from "react";
// import Input from "@/components/Input";

function DatePicker({ title, className }, ref) {
  const [date, setDate] = useState(null);

  return (
    <div>
      {title}

      <input ref={ref} className={className} type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  );
};

export default forwardRef(DatePicker);