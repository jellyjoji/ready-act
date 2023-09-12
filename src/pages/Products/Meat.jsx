import {pb} from '@/api/pocketbase';
import participateNum from '@/assets/icons/participateNum.svg';
import pickuptime from '@/assets/icons/pickuptime.svg';
import Spinner from '@/components/Spinner';
import Header from '@/layout/Header';
import Nav from '@/parts/nav/Nav';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

pb.autoCancellation(false);

function Meat() {
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.autoCancellation(false);
    async function filterProducts() {
      try {
        const filterRecordList = await pb
          .collection('products')
          .getList(1, 50, {
            filter: 'category="🍖 육류"',
          });
        const filterRecordItems = filterRecordList.items;
        setData(filterRecordItems);
      } catch (error) {
        throw new Error('error');
      }
    }
    filterProducts();
  }, []);

  if (data) {
    return (
      <>
        <Helmet>
          <title>R09M - 육류</title>
        </Helmet>
        <h1 className="sr-only">R09M</h1>

        <div className="bg-line-200 px-4 py-2">
          <Header />
          <h2 className="text-lg text-center font-semibold pt-4">육류</h2>
          <ul>
            {data.map(
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
                <Link to={`/products/${id}`} key={id}>
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
          <Nav />
        </div>
      </>
    );
  } else {
    <Spinner />;
  }
}

export default Meat;
