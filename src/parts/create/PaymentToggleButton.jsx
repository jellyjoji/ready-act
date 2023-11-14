import { AppContext } from '@/App';
import { useContext, useEffect, useState } from 'react';

function PaymentToggleButton({ value = "false", labelClassName, ...restProps }) {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [isToggled, setToggled] = useState(value);

  const paymentMethod = isToggled ? '계좌 이체' : '만나서 결제';
  const activeClassNames = 'shadow-lg bg-white rounded-lg';

  useEffect(() => {
    updateCreateRoomForm('payment', paymentMethod);
  }, [isToggled]);

  return (
    <>
      <label htmlFor="payment" className={labelClassName}>
        지불 방법
      </label>
      <div id="payment" className="bg-greenishgray-200 w-full p-2 rounded-lg">
        <button
          value={isToggled}
          type="button"
          className="w-full rounded-lg flex items-center"
          onClick={() => setToggled(!isToggled)}
          data-payment={paymentMethod}
          {...restProps}
        >
          <span className={`w-1/2 ${!isToggled ? activeClassNames : ''}`}>
            만나서 결제
          </span>
          <span className={`w-1/2 ${isToggled ? activeClassNames : ''}`}>
            계좌 이체
          </span>
        </button>

      </div>
    </>
  );
}

export default PaymentToggleButton;
