import {AppContext} from '@/App';
import {pb} from '@/api/pocketbase';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import CreateHeader from '@/layout/CreateHeader';
import CategoryDropdown from '@/parts/create/CategoryDropdown';
import ContentTextarea from '@/parts/create/ContentTextarea';
import DatePicker from '@/parts/create/DatePicker';
import FileUpload from '@/parts/create/FileUpload';
import MeetingPoint from '@/parts/create/MeetingPoint';
import ParticipateCounter from '@/parts/create/ParticipateCounter';
import PaymentToggleButton from '@/parts/create/PaymentToggleButton';
import Status from '@/parts/create/Status';
import {ClientResponseError} from 'pocketbase';
import {useContext, useRef, useState} from 'react';
import {Helmet} from 'react-helmet-async';

function CreateRoom() {
  const {createRoomForm, updateCreateRoomForm} = useContext(AppContext);

  const formRef = useRef(null);
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const priceRef = useRef(null);
  const dateRef = useRef(null);
  const paymentRef = useRef(null);
  const ParticipateCounterRef = useRef(null);
  const uploadImageRef = useRef(null);
  const statusRef = useState(null);

  const handleCreate = async (e) => {
    e.preventDefault();

    const categoryValue = categoryRef.current.value;
    const titleValue = titleRef.current.value;
    const contentValue = contentRef.current.value;
    const priceValue = priceRef.current.value;
    const dateValue = dateRef.current.value;

    const paymentValue = paymentRef.current.dataset.payment;
    const ParticipateCounterValue = Number(
      ParticipateCounterRef.current.textContent
    );

    const meetingPointValue = createRoomForm.meetingPoint;

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

    if (uploadImageValue) {
      data.append('uploadImage', uploadImageValue);
    }
    data.append('status', statusValue);

    try {
      await pb.collection('products').create(data);
    } catch (error) {
      if (!(error instanceof ClientResponseError)) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>방만들기</title>
      </Helmet>

      <div className="p-4 m-auto">
        <CreateHeader />

        <form
          encType="multipart/form-data"
          ref={formRef}
          onSubmit={handleCreate}
          className="flex flex-col gap-4 py-4"
        >
          <CategoryDropdown
            ref={categoryRef}
            title="카테고리"
            className="w-full defaultInput mt-3"
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
            ref={contentRef}
            title="내용"
            placeholder="공구 모임 주요내용을 알려주세요."
            className="w-full defaultInput"
            labelClassName="product content"
          />
          <PaymentToggleButton
            ref={paymentRef}
            title="정산 방법"
            labelClassName="payment"
          />
          <DatePicker
            ref={dateRef}
            title="픽업 날짜"
            className="w-full defaultInput mt-3"
            labelClassName="Date Picker"
          />
          <Status
            ref={statusRef}
            title="상태"
            className="w-full defaultInput "
            labelClassName="status"
          />
          <ParticipateCounter ref={ParticipateCounterRef} title="인원" />

          <MeetingPoint title="만날 장소" />

          <FileUpload
            ref={uploadImageRef}
            title="파일 업로드"
            labelClassName="upload image"
            className="bg-[#EBF8E8] p-4 rounded-lg text-primary-500"
          />

          <Button type="submit" className="activeButton lgFontButton w-full">
            방 만들기
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateRoom;
