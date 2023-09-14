import { forwardRef, useEffect } from 'react';
import './location.module.css';
import { useState } from 'react';

const { kakao } = window;

function Location({ title }, ref) {

  const [data, setData] = useState();


  useEffect(() => {

    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
        center: new kakao.maps.LatLng(37.57157200866145, 126.9763416696016), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };

    // 지도를 생성합니다    
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    const marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
      infowindow = new kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다
    console.log(infowindow);

    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          /* -------------------------------------------------------------------------- */
          // result[0].road_address.address_name 값 불러오기 
          // let detailAddr = !!result[0].road_address ? result[0].road_address.address_name : '위치정보를 불러올수없음';
          let detailAddr = !!result[0].address.address_name ? result[0].address.address_name : '위치정보를 불러올수없음';
          // detailAddr += `<div>지번 주소 : ${result[0].address.address_name}</div>`;
          console.log(detailAddr);
          setData(detailAddr);

          // let address = result[0].road_address.address_name;

          const content = '<div className="bAddr">' +
            // '<span className="title">법정동 주소정보</span>' +
            detailAddr +
            '</div>';

          // 마커를 클릭한 위치에 표시합니다 
          marker.setPosition(mouseEvent.latLng);
          marker.setMap(map);

          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          infowindow.setContent(content);
          infowindow.open(map, marker);
        }
      });
    });

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'idle', function () {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const infoDiv = document.getElementById('centerAddr');

        for (let i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === 'H') {
            infoDiv.innerHTML = result[i].address_name;
            break;
          }
        }
      }
    }

  }, [])


  return (
    <>
      <div className="map_wrap" >
        <div id="map" className='w-full h-[400px]'></div>
        <div className="hAddr" >
          <span className="title" >{title}</span>

          <span id="centerAddr" ref={ref}>{data}</span>
        </div>
      </div>
    </>
  );
}

export default forwardRef(Location);