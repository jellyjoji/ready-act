import { useState } from "react";
import { minus, plus } from '../../public/assets/svg-icons';

function Counter({ title }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <label>{title}</label>
      <div className="flex gap-2 float-right p-2 items-center">
        <button onClick={decrementCount}>
          <img src={minus} alt="minus" />
        </button>
        <p>{count}</p>
        <button onClick={incrementCount}>
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
