import {forwardRef, useState} from 'react';
import minusCircle from '@/assets/icons/minusCircle.svg';
import plusCircle from '@/assets/icons/plusCircle.svg';

function ParticipateCounter({title}, ref) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="py-4">
      <div className="flex gap-2 float-right p-2 items-center">
        <button type="button" onClick={decrementCount}>
          <img src={minusCircle} alt="minus" />
        </button>
        <p ref={ref}>{count}</p>
        <button type="button" onClick={incrementCount}>
          <img src={plusCircle} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default forwardRef(ParticipateCounter);
