import {useEffect} from 'react';
// import { detailMapMark } from './detailMapMark';
import Header from '@/layout/Header';
import Button from '@/components/Button';
import { pb } from '@/api/pocketbase';
import pickup from '@/assets/icons/pickup.svg';
import { ClientResponseError } from 'pocketbase';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { currentLocation } from '@/parts/map/currentLocation';
import myLocation from '@/assets/icons/myLocation.svg';
import styles from '@/styles/Home.module.css';
import { Link } from 'react-router-dom';

const { kakao } = window;
function DetailMap() {
  const { id } = useParams();
  const [data, setData] = useState()
  
  useEffect(() => {
    async function detailMapMark() {
  
      try {
    const readRecordItem = await pb.collection('products').getOne(id); // 단일 항목 가져오기
    setData(readRecordItem)
    
        if (kakao) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.57157200866145, 126.9763416696016),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const geocoder = new kakao.maps.services.Geocoder();

      // 수정된 항목의 meetingPoint 사용
      const meetingPoint = readRecordItem.meetingPoint;

      geocoder.addressSearch(meetingPoint, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const { y, x } = result[0];
          const coords = new kakao.maps.LatLng(y, x);

          const imageSrc = pickup;
          const imageSize = new kakao.maps.Size(32, 32);
          const pickupImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          new kakao.maps.Marker({
            map: map,
            position: coords,
            image: pickupImage,
          });

          // 인포윈도우로 장소에 대한 설명 표시
          const infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">픽업장소</div>',
          });
          infowindow.open(map, pickup);

          map.setCenter(coords); // 지도 중심 이동
        }
      });
    } else {
      console.error('kakao에 접근할 수 없습니다.');
    }
  } catch (error) {
    if (!(error instanceof ClientResponseError)) {
          console.error(error);
        }
  }
    }
    detailMapMark();
  }, [id]);

  return (
    <>
      <div className="px-4 py-2">
        <Header />
        </div>
      <div id="map" className="w-full h-[600px] my-3 relative">

       
      <Button
            type="button"
            className={`${styles.button} right-2 bottom-4 bg-white p-2`}
            onClick={currentLocation}
            >
            <img src={myLocation} alt="현재 위치로 가기" className='mx-auto'/>
      </Button>
      </div>
      
      <ul>
        <li className='flex mb-4 mt-4 items-center'>
          <span className='mt-5 mb-18 font-extrabold text-lg'>{data && data.meetingPoint ? data.meetingPoint : 'Meeting Point가 없습니다.'}</span>
        </li>
      </ul>

      <div className=" flex py-2 justify-center">
        <Link to={`/products/${id}`}>
        <Button className='w-[580px] h-16 bg-primary-500 rounded-2xl text-lg text-line-100 font-bold hover:bg-primary-700'>
          확인
        </Button>
        </Link>
        </div>
    </>
  )
}

export default DetailMap;