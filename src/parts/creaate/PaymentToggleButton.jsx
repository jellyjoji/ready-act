import React, { useState, forwardRef } from "react";

function PaymentToggleButton({ labelClassName, title, }, ref) {
  const [isToggled, setToggled] = useState(false);
  return (
    <>
      <label className={labelClassName}>{title}</label>
      <div className="bg-greenishgray-200 w-full p-2 rounded-lg">

        <button
          ref={ref}
          className="w-full shadow-lg bg-white rounded-lg"
          type="button"
          onClick={() => setToggled(!isToggled)}
        >
          {isToggled ? "계좌 이체" : "만나서 결제"}
        </button>
      </div>
    </>
  );
};

export default forwardRef(PaymentToggleButton);