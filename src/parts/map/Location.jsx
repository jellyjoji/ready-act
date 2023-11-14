import arrowLeft from '@/assets/icons/arrowLeft.svg';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Location.module.css';
import { AppContext } from '@/App';
import Button from "../../components/Button";

const { kakao } = window;

function Location({ value }) {
  const { updateCreateRoomForm } = useContext(AppContext);

  const [data, setData] = useState(value);

  useEffect(() => {
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.57157200866145, 126.9763416696016), // 지도의 중심좌표
        level: 4,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const geocoder = new kakao.maps.services.Geocoder();

    const marker = new kakao.maps.Marker(),
      infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          let detailAddr = !!result[0].address.address_name
            ? result[0].address.address_name
            : '위치정보를 불러올수없음';
          // Location 컴포넌트 상태 업데이트
          setData(detailAddr);

          // 앱 상태(전역, 페이지 전환 시에도 기억 됨) 업데이트
          updateCreateRoomForm('meetingPoint', detailAddr);

          const content = '<div className="bAddr">' + detailAddr + '</div>';

          marker.setPosition(mouseEvent.latLng);
          marker.setMap(map);

          infowindow.setContent(content);
          infowindow.open(map, marker);
        }
      });
    });

    kakao.maps.event.addListener(map, 'idle', function () {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords, callback) {
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    function searchDetailAddrFromCoords(coords, callback) {
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    function displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const infoDiv = document.getElementById('centerAddr');

        for (let i = 0; i < result.length; i++) {
          if (result[i].region_type === 'H') {
            infoDiv.innerHTML = result[i].address_name;
            break;
          }
        }
      }
    }
  }, []);


  return (
    <div className="h-full">
      <div className="relative h-12">
        <p className="text-center py-3">지도에서 위치 확인</p>

        <Link to="/createroom">
          <img src={arrowLeft} alt="뒤로 가기" className="absolute top-3" />
        </Link>
      </div>

      <div className="map_wrap">
        <div id="map" className="w-full h-[420px]"></div>
        <div className="hAddr flex">
          <span id="centerAddr" className='p-4'>
            {data}
          </span>

          <Link to="/createroom" className="bg-white w-full absolute max-w-xl bottom-0 p-4 drop-shadow-2xl">
            <Button type="submit" className="activeButton lgFontButton w-full ">
              이 위치로 설정
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Location;