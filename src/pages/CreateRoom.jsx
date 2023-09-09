import { Helmet } from 'react-helmet-async';
import Input from "@/components/Input";
import Button from '@/components/Button';
import Category from '@/components/Category';
import TextArea from '@/components/Textarea';
import DatePicker from "@/components/DatePicker";
import Counter from "@/components/Counter";
import MeetingPoint from "@/components/MeetingPoint";
import Location from "@/components/Location";
// import ToggleButton from '@/components/ToggleButton';
import { useRef } from 'react'
// import { useNavigate } from 'react-router-dom';

import { pb } from "@/api/pocketbase";

function CreateRoom() {

  // useEffect(() => {
  //   try {
  //     record;
  //   } catch (error) {
  //     throw new Error('error');
  //   }
  // }, []);

  // const data = {
  //   "category": "",
  //   "title": "",
  //   "price": 0,
  //   "content": "",
  //   "payment": "",
  //   "meetingPoint": "",
  //   "pickup": "",
  //   "status": "",
  //   "participateNumber": 0,
  //   "participate": [
  //     ""
  //   ]
  // };
  // const navigate = useNavigate();

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const priceRef = useRef(null);

  const handleCreate = async (e) => {
    e.preventDefault();

    const titleValue = titleRef.current.value;
    const contentValue = contentRef.current.value;
    const priceValue = priceRef.current.value;

    const data = new FormData();

    data.append('title', titleValue);
    data.append('contnet', contentValue);
    data.append('contnet', priceValue);

    try {
      await pb.collection('products').create(data);
      console.log(data);
      // navigate('/products');
    } catch (error) {
      console.error(error);
    }
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
        className=''
      >
        <Category title="카테고리" className="w-full defaultInput" placeholder="공구 카테고리를 선택해주세요." />
        <Input isRef={titleRef} type="text" placeholder="상품명을 입력해주세요." labelClassName="product name" inputClassName="defaultInput w-full my-4" title="상품명" />
        <Input isRef={priceRef} type="number" placeholder="0원" labelClassName="product price" inputClassName="defaultInput w-full my-4" title="상품 가격" />
        <TextArea TextArearef={contentRef} title="내용" placeholder="공구 모임 주요내용을 알려주세요." className="w-full defaultInput" labelClassName="product content" />
        {/* <ToggleButton isOn={isOn} onChange={setIsOn} /> */}
        <DatePicker title="픽업 날짜" className="w-full defaultInput" />
        <Counter title="인원" />
        <MeetingPoint title="만날 장소" />

        <Button type="submit" className="activeButton lgFontButton w-full my-4" text="방만들기" />
        <Location />

      </form>
    </>
  );
}

export default CreateRoom;