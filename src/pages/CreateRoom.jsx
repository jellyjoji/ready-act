import { Helmet } from 'react-helmet-async';
import { useRef, useEffect, useState } from 'react';
import { pb } from "@/api/pocketbase";
import FormInput from "@/components/FormInput";
import Button from '@/components/Button';
import ContentTextarea from '@/parts/creaate/ContentTextarea';
import DatePicker from "@/parts/creaate/DatePicker";
// import TimePicker from "@/parts/creaate/TimePicker";
import ParticipateCounter from "@/parts/creaate/ParticipateCounter";
// import MeetingPoint from "@/parts/creaate/MeetingPoint";
import Location from "@/parts/map/Location";
import CategoryDropdown from "@/parts/creaate/CategoryDropdown";
import Status from '@/parts/creaate/Status';
import PaymentToggleButton from '@/parts/creaate/PaymentToggleButton';

// import { useNavigate } from 'react-router-dom';
import FileUpload from '../parts/creaate/FileUpload';


function CreateRoom() {


  const formRef = useRef(null);
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const priceRef = useRef(null);
  const dateRef = useRef(null);
  // const timeRef = useRef(null);
  const paymentRef = useRef(null);
  const ParticipateCounterRef = useRef(null);
  const meetingPointRef = useRef(null);
  const uploadImageRef = useRef(null);
  const statusRef = useState(null);


  useEffect(() => {
    console.log(titleRef.current);
  }, [])


  const handleCreate = async (e) => {
    e.preventDefault();
    // console.log(titleRef.current.value);
    // // console.log(categoryRef.current.value);
    // console.log(contentRef.current.value);
    // console.log(priceRef.current.value);
    // console.log(dateRef.current.value);
    // // console.log(timeRef.current.value);
    // console.log(paymentRef.current.textContent);
    // console.log(ParticipateCounterRef.current.textContent);

    // console.log(meetingPointRef.current.textContent);
    // console.log(uploadImageRef.current.files);
    // console.log(statusRef.current.value);
    // console.log(categoryRef.current.value);

    // return

    const categoryValue = categoryRef.current.value;
    console.log(categoryValue);
    const titleValue = titleRef.current.value;
    console.log(titleValue);
    const contentValue = contentRef.current.value;
    console.log(contentValue);
    const priceValue = priceRef.current.value;
    console.log(priceValue);
    const dateValue = dateRef.current.value;
    console.log(dateValue);
    // const timeValue = timeRef.current.value;
    // console.log(timeValue);
    const paymentValue = paymentRef.current.textContent;
    console.log(paymentValue);
    const ParticipateCounterValue = Number(ParticipateCounterRef.current.textContent);
    console.log(ParticipateCounterValue);
    const meetingPointValue = meetingPointRef.current.textContent;
    console.log(meetingPointValue);
    console.log(meetingPointRef);
    const uploadImageValue = uploadImageRef.current.files[0];
    console.log(uploadImageRef.current.files);
    const statusValue = statusRef.current.value;
    console.log(statusValue);


    const data = new FormData();
    console.log(categoryValue);
    data.append('category', categoryValue);

    data.append('title', titleValue);
    data.append('content', contentValue);
    data.append('price', priceValue);
    data.append("pickup", dateValue);
    // data.append("pickup", timeValue);
    data.append("payment", paymentValue);
    data.append("participateNumber", ParticipateCounterValue);
    data.append("meetingPoint", meetingPointValue);
    data.append("uploadImage", uploadImageValue);
    data.append("status", statusValue);
    for (const [key, value] of data.entries()) {
      console.log(key, value);
    }

    // return
    try {
      await pb.collection('products').create(data);

      console.log(data);
      // navigate('/products');
    } catch (error) {
      console.error(error);
    }
    // } catch (error) {
    //   if (!(error instanceof ClientResponseError)) {
    //     console.error(error);
    //   }
  }

  return (
    <>
      <Helmet>
        <title>방만들기</title>

        <meta property="og:title" content="" />
        <meta property="twitter:title" content="" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:article:author" content="" />
      </Helmet>

      <form
        encType="multipart/form-data"
        ref={formRef}
        onSubmit={handleCreate}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   console.log(titleRef.current.value);
        // }}
        className='p-4'
      >
        <CategoryDropdown ref={categoryRef} title="카테고리" className="w-full defaultInput" />
        <FormInput ref={titleRef} type="text" placeholder="상품명을 입력해주세요." labelClassName="product name" inputClassName="defaultInput w-full my-4" title="상품명" />
        <FormInput ref={priceRef} type="number" placeholder="0원" labelClassName="product price" inputClassName="defaultInput w-full my-4" title="상품 가격" />
        <ContentTextarea ref={contentRef} title="내용" placeholder="공구 모임 주요내용을 알려주세요." className="w-full defaultInput" labelClassName="product content" />
        <PaymentToggleButton ref={paymentRef} title="정산 방법" labelClassName="payment" />
        <DatePicker ref={dateRef} title="픽업 날짜" className="w-full defaultInput" />
        {/* <TimePicker ref={timeRef} title="픽업 시간" className="w-full defaultInput" /> */}
        <ParticipateCounter ref={ParticipateCounterRef} title="인원" />

        {/* <MeetingPoint title="만날 장소" /> */}
        <Location ref={meetingPointRef} title="만날 장소"></Location>

        <FileUpload ref={uploadImageRef} />
        <Status ref={statusRef} title="상태" className="w-full defaultInput" labelClassName="status" />


        <Button type="submit" className="activeButton lgFontButton w-full my-4">방 만들기</Button>

      </form>
    </>
  );
}

export default CreateRoom;
