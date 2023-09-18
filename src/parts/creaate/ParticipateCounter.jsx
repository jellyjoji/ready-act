import { useState, forwardRef } from "react";
import { minus, plus } from '../../../src/assets/icons/svg-icons';

function ParticipateCounter({ title }, ref) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="py-4">
      <label >{title}</label>
      <div className="flex gap-2 float-right p-2 items-center">
        <button type="button" onClick={decrementCount}>
          <img src={minus} alt="minus" />
        </button>
        <p ref={ref}>{count}</p>
        <button type="button" onClick={incrementCount}>
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default forwardRef(ParticipateCounter);
