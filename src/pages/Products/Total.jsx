import {pb} from '@/api/pocketbase';
import participateNum from '@/assets/icons/participateNum.svg';
import pickuptime from '@/assets/icons/pickuptime.svg';
import prev from '@/assets/icons/prev.svg';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

const readRecordList = await pb.collection('products').getFullList();

function Total() {
  useEffect(() => {
    try {
      readRecordList;
    } catch (error) {
      throw new Error('error');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>R09M - 전체 상품</title>
      </Helmet>
      <h1 className="sr-only">R09M</h1>

      <div className="bg-line-200 py-2">
        <Link to="/r09m">
          <img src={prev} alt="뒤로 가기" className="p-4" />
        </Link>
        <h2 className="text-lg text-center font-semibold">전체</h2>
        <ul>
          {readRecordList.map(
            ({
              id,
              category,
              status,
              title,
              content,
              pickup,
              participate,
              participateNumber,
            }) => (
              <Link to={id} key={id}>
                <li className=" rounded-2xl p-5 m-6 bg-white">
                  <span className="font-semibold bg-line-400 text-greenishgray-800 p-2 rounded-xl">
                    {category}
                  </span>
                  <div className="relative mb-4">
                    {status === '대기중' ? (
                      <span className="font-bold absolute text-primary-500">
                        {status}
                      </span>
                    ) : status === '진행중' ? (
                      <span className="font-bold absolute text-map-500">
                        {status}
                      </span>
                    ) : (
                      <span className="font-bold absolute text-greenishgray-500">
                        {status}
                      </span>
                    )}
                    <h2 className="text-greenishgray-700 font-semibold mt-5 ml-20">
                      {title}
                    </h2>
                    <p className="text-sm my-2">{content}</p>
                  </div>
                  <div className="flex gap-2 justify-end text-xs text-greenishgray-600">
                    <div className="flex gap-1">
                      <img src={pickuptime} alt="픽업 시간" className="w-4" />
                      <span>{pickup.slice(5, -8).replace('-', '/')}</span>
                    </div>
                    <div className="flex gap-1">
                      <img
                        src={participateNum}
                        alt="참여 인원"
                        className="w-4"
                      />
                      <span>
                        {participate.length}/{participateNumber}
                      </span>
                    </div>
                  </div>
                </li>
              </Link>
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default Total;
