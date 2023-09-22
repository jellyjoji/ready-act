import {AppContext} from '@/App';
import {pb} from '@/api/pocketbase';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import CreateHeader from '@/layout/CreateHeader';
import CategoryDropdown from '@/parts/create/CategoryDropdown';
import ContentTextarea from '@/parts/create/ContentTextarea';
import Creator from '@/parts/create/Creator';
import DatePicker from '@/parts/create/DatePicker';
import FileUpload from '@/parts/create/FileUpload';
import ParticipateCounter from '@/parts/create/ParticipateCounter';
import PaymentToggleButton from '@/parts/create/PaymentToggleButton';
import Status from '@/parts/create/Status';
import Location from '@/parts/map/Location';
import {ClientResponseError} from 'pocketbase';
import {useContext, useRef} from 'react';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function CreateRoom() {
  const {createRoomForm} = useContext(AppContext);
  const navigate = useNavigate();

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const dateRef = useRef(null);
  const paymentRef = useRef(null);
  const ParticipateCounterRef = useRef(null);
  const uploadImageRef = useRef(null);
  const statusRef = useRef(null);

  const handleCreate = async (e) => {
    e.preventDefault();

    const categoryValue = createRoomForm.category;
    const titleValue = titleRef.current.value;
    const contentValue = createRoomForm.content;
    const priceValue = priceRef.current.value;
    const dateValue = dateRef.current.value;

    const paymentValue = paymentRef.current.dataset.payment;
    const ParticipateCounterValue = Number(
      ParticipateCounterRef.current.textContent
    );

    const meetingPointValue = createRoomForm.meetingPoint;
    const creatorValue = createRoomForm.creator.id;

    const uploadImageValue = uploadImageRef.current.files[0];
    const statusValue = statusRef.current.value;

    const data = new FormData();

    data.append('category', categoryValue);
    data.append('title', titleValue);
    data.append('content', contentValue);
    data.append('price', priceValue);
    data.append('pickup', dateValue);
    data.append('payment', paymentValue);
    data.append('participateNumber', ParticipateCounterValue);
    data.append('meetingPoint', meetingPointValue);
    data.append('creator', creatorValue);
    data.append('participate', creatorValue);
    if (uploadImageValue) {
      data.append('uploadImage', uploadImageValue);
    }
    data.append('status', statusValue);

    try {
      await pb.collection('products').create(data);
      toast.success('등록되었습니다.', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      navigate(`/products`);
    } catch (error) {
      if (!(error instanceof ClientResponseError)) {
        toast.error('등록에 실패하였습니다. 다시 시도해 주세요.', {
          position: 'top-center',
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        });
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>방만들기</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="합리적인 소비를 위한 공동구매 서비스 R09M 공동구매 방 만들기 페이지"
        />
        <meta
          property="twitter:title"
          content="합리적인 소비를 위한 공동구매 서비스 R09M 공동구매 방 만들기 페이지"
        />
        <meta property="og:type" content="web application" />
        <meta property="og:url" content="https://r09m.vercel.app/createRoom" />
        <meta
          property="og:description"
          content="공동구매 채소 상품을 확인할 수 있는 페이지입니다. 카테고리, 상품명, 상품 이미지, 상품 가격, 내용, 픽업 날짜, 상태, 생성자, 지불 방법, 픽업 위치 등을 입력하면 방이 생성됩니다."
        />
        <meta
          name="description"
          content="공동구매 채소 상품을 확인할 수 있는 페이지입니다. 카테고리, 상품명, 상품 이미지, 상품 가격, 내용, 픽업 날짜, 상태, 생성자, 지불 방법, 픽업 위치 등을 입력하면 방이 생성됩니다."
        ></meta>
        <meta property="og:image" content="favicon.png" />
        <meta property="og:article:author" content="Ready! Act" />
      </Helmet>

      <h1 className="sr-only">R09M</h1>

      <div className="py-2">
        <div className="px-4">
          <CreateHeader />
          <h2 className="pageTitle">방만들기</h2>
        </div>
      </div>

      <div>
        <form
          encType="multipart/form-data"
          ref={formRef}
          onSubmit={handleCreate}
        >
          <div className="flex flex-col gap-4 p-4 relative">
            <Location />

            <CategoryDropdown
              title="카테고리"
              className="w-full defaultInput mt-4"
            />
            <FormInput
              ref={titleRef}
              type="text"
              placeholder="상품명을 입력해주세요."
              labelClassName="product name"
              inputClassName="defaultInput w-full"
              label="상품명"
            />
            <FormInput
              ref={priceRef}
              type="number"
              placeholder="0원"
              labelClassName="product price"
              inputClassName="defaultInput w-full"
              label="상품 가격"
            />
            <ContentTextarea
              title="내용"
              placeholder="공구 모임 주요내용을 알려주세요."
              className="w-full defaultInput"
              labelClassName="product content"
            />

            <DatePicker
              ref={dateRef}
              title="픽업 날짜"
              className="w-full defaultInput mt-4"
              labelClassName="date Picker"
            />

            <Status
              ref={statusRef}
              title="상태"
              className="w-full defaultInput "
              labelClassName="status"
            />

            <Creator />

            <PaymentToggleButton
              ref={paymentRef}
              title="정산 방법"
              labelClassName="payment"
            />

            <ParticipateCounter ref={ParticipateCounterRef} title="인원" />

            <FileUpload
              ref={uploadImageRef}
              title="파일 업로드"
              className="bg-[#EBF8E8] p-4 rounded-lg text-primary-500"
            />
          </div>
          <Button
            type="submit"
            className="fixed bottom-0 max-w-xl w-full p-4 activeButton lgFontButton"
          >
            방 만들기
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateRoom;
