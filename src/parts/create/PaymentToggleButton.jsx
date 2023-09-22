import { AppContext } from '@/App';
import { useContext, useId, useState, useEffect } from 'react';

function PaymentToggleButton({ value, labelClassName, title }) {
  const [isToggled, setToggled] = useState(value);
  const { id } = useId();
  const { updateCreateRoomForm } = useContext(AppContext);
  // const [data, setData] = useState(value);

  useEffect(() => {
    updateCreateRoomForm('payment', isToggled)
    console.log(isToggled);
  }, [isToggled])


  return (
    <>
      <label htmlFor="id" className={labelClassName}>
        {title}
      </label>
      <div id="id" className="bg-greenishgray-200 w-full p-2 rounded-lg">
        <button
          value={isToggled}
          type="button"
          className="w-full rounded-lg "
          onClick={() => setToggled(!isToggled)}
          data-payment={isToggled ? '계좌 이체' : '만나서 결제'}
        >
          <div
            className={`flex w-full ${isToggled ? 'items-center' : ''}`.trim()}
          >
            <div
              className={`w-1/2 ${!isToggled ? 'shadow-lg bg-white rounded-lg' : ''
                }`.trim()}
            >
              만나서 결제
            </div>
            <div
              className={`w-1/2 ${isToggled ? 'shadow-lg bg-white rounded-lg' : ''
                }`.trim()}
            >
              계좌 이체
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default PaymentToggleButton;
