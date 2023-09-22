import { AppContext } from '@/App';
import { pb } from '@/api/pocketbase';
import Button from '@/components/Button';
import CreateHeader from '@/layout/CreateHeader';
import CategoryDropdown from '@/parts/create/CategoryDropdown';
import ContentTextarea from '@/parts/create/ContentTextarea';
import DatePicker from '@/parts/create/DatePicker';
import FileUpload from '@/parts/create/FileUpload';
import MeetingPoint from '@/parts/create/MeetingPoint';
// import Location from '@/parts/map/Location';
import ParticipateCounter from '@/parts/create/ParticipateCounter';
import PaymentToggleButton from '@/parts/create/PaymentToggleButton';
import Status from '@/parts/create/Status';
import { ClientResponseError } from 'pocketbase';
import { useContext, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Creator from '@/parts/create/Creator';
import Price from '@/parts/create/Price';
import Title from '@/parts/create/title';


function CreateRoom() {
  const { createRoomForm } = useContext(AppContext);

  const formRef = useRef(null);
  const paymentRef = useRef(null);
  const ParticipateCounterRef = useRef(null);
  const uploadImageRef = useRef(null);

  const handleCreate = async (e) => {
    e.preventDefault();

    const categoryValue = createRoomForm.category;
    const titleValue = createRoomForm.title;
    const contentValue = createRoomForm.content;
    const priceValue = createRoomForm.price;
    // createRoomForm.pickUp
    const dateValue = new Date(createRoomForm.pickUp).toISOString();
    // const paymentValue = paymentRef.current.dataset.payment;
    const paymentValue = createRoomForm.payment;
    console.log(paymentValue);
    const ParticipateCounterValue = Number(
      ParticipateCounterRef.current.textContent
    );

    const meetingPointValue = createRoomForm.meetingPoint;
    const creatorValue = createRoomForm.creator.id;

    const uploadImageValue = uploadImageRef.current.files[0];
    const statusValue = createRoomForm.status;

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
    data.append("status", statusValue);

    for (const [key, value] of data.entries()) {
      console.log(key, value);
    }

    // return
    try {
      await pb.collection('products').create(data);

      // navigate('/products');

    } catch (error) {
      if (!(error instanceof ClientResponseError)) {
        console.error(error);
      }
    }
  }

  return (
    <>

      <Helmet>
        <title>방만들기</title>
      </Helmet>

      <div >
        <CreateHeader />

        <form
          encType="multipart/form-data"
          ref={formRef}
          onSubmit={handleCreate}
        >
          <div className="flex flex-col gap-4 p-4 relative"
          >

            {/* <Location /> */}


            <CategoryDropdown
              title="카테고리"
              className="w-full defaultInput"
              label="카테고리"
              value={createRoomForm.category}
            />

            <Title
              value={createRoomForm.title}
            />

            <Price
              value={createRoomForm.price}
            />

            <ContentTextarea
              title="내용"
              placeholder="공구 모임 주요내용을 알려주세요."
              className="w-full defaultInput"
              labelClassName="product content"
              label="내용"
              value={createRoomForm.content}
            />

            <DatePicker
              title="픽업 날짜"
              label="픽업 날짜"
              className="w-full defaultInput"
              labelClassName="date Picker"
              value={createRoomForm.pickUp}

            />

            <Status
              title="상태"
              label="상태"
              className="w-full defaultInput "
              labelClassName="status"
            />

            <Creator />

            <PaymentToggleButton
              title="정산 방법"
              label="정산 방법"
              labelClassName="payment"
              value={createRoomForm.payment}

            />

            <ParticipateCounter ref={ParticipateCounterRef} title="인원" label="참여자 인원" />

            <MeetingPoint title="만날 장소" />

            <FileUpload
              ref={uploadImageRef}
              title="파일 업로드"
              label="파일 업로드"
              className="bg-[#EBF8E8] p-4 rounded-lg text-primary-500"
            />


          </div>
          <div className="bg-white fixed bottom-0 max-w-xl w-full p-4 drop-shadow-2xl">
            <Button type="submit" className="activeButton lgFontButton w-full ">
              방 만들기
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateRoom;
