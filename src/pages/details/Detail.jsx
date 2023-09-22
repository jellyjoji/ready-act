import { pb } from '@/api/pocketbase';
import crownSmall from '@/assets/icons/crownSmall.svg';
import dinner from '@/assets/icons/dinner.svg';
import location from '@/assets/icons/location.svg';
import Header from '@/layout/Header';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { ClientResponseError } from 'pocketbase';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import DetailStatus from './DetailStatus';
import Participation from './Participation';
import SeeMore from './SeeMore';

function Detail() {
  const {id} = useParams();
  const [data, setData] = useState();

  const handleUpdateParticipation = (newParticipation) => {
    setData((data) => {
      const nextData = {...data};
      nextData.expand.participate.push(newParticipation);
      return nextData;
    });
  };

  useEffect(() => {
    async function getDetails() {
      try {
        const detailBoard = await pb.collection('products').getOne(id, {
          expand: 'creator, participate',
        });
        setData(detailBoard);
      } catch (error) {
        if (!(error instanceof ClientResponseError)) {
          console.error(error);
        }
      }
    }
    getDetails();
  }, [id]);

  if (data) {
    const {
      category,
      title,
      pickup,
      meetingPoint,
      content,
      participateNumber,
      price,
      expand,
    } = data;
    const {creator, participate} = expand;

    return (
      <>
        <Helmet>
          <title>R09M - 상품 상세 페이지</title>
        </Helmet>
        <div className="px-4 py-2">
          <Header />
        </div>
        <div className="flex justify-center mt-2">
          <DetailStatus />
        </div>
        <ul className="pl-4">
          <li className="flex mb-3 mt-2 items-center font-semibold text-lg justify-between">
            <img
              src={getPbImageURL(creator, 'photo')}
              alt={creator.name}
              className="object-cover rounded-full w-14 h-14 relative"
            />
            <img
              src={crownSmall}
              alt="게시물 작성자"
              className="absolute mt-10 ml-10"
            />
            <span className="pr-[400px]">{creator.name}</span>

            <SeeMore />
          </li>

          <li className="h-[350px]">
            <img
              src={getPbImageURL(data, 'uploadImage')}
              alt={title}
              className="object-cover mx-auto w-full h-full pr-4"
            />
          </li>

          <li className="mt-5">
            <div className="mb-3">
              <span className="font-semibold bg-line-400 text-greenishgray-800 p-2 rounded-xl">
                {category}
              </span>
            </div>
            <span className="mt-3 text-xl font-extrabold">{title}</span>
          </li>

          <li className="mt-9 flex items-center">
            <div className="pr-2">
              <img
                src={dinner}
                alt="시계 이모티콘"
                className="w-4 h-4 items-center"
              />
            </div>
            <div>{pickup.slice(5, -8).replace('-', '/')}</div>
          </li>

          <li className="flex items-center mt-2">
            <div className="pr-2">
              <img src={location} alt="만날 장소" className="w-4 h-4" />
            </div>
            <div>{meetingPoint}</div>
            <Link to={`/products/${id}/pickupplace`}>
              <div className="text-info-500 ml-2">픽업위치&gt;</div>
            </Link>
          </li>

          <li className="mt-7">
            <div className="pr-4">{content}</div>
          </li>

          <li className="flex items-center mt-7 pr-4 place-content-between relative">
            <div className="text-base font-bold">
              참여자 {participate.length}/{participateNumber}
            </div>

            <div className="flex justify-end pr-1">
              {participate.map((item) => (
                <img
                  key={item.id}
                  src={getPbImageURL(item, 'photo')}
                  alt={item.name}
                  className="object-cover rounded-full w-10 h-10"
                />
              ))}
            </div>
          </li>

          <li>
            <div className="mt-6 text-lg font-semibold">
              {numberWithComma(price / participateNumber)}원
            </div>
          </li>

          <li className="flex items-center pr-4 place-content-between">
            <div className="text-greenishgray-500 font-semibold">
              1인당 정산비
            </div>
            <Participation onUpdateParticipation={handleUpdateParticipation} />
            {/* <Cancel /> */}
          </li>
        </ul>
      </>
    );
  }
}

export default Detail;
