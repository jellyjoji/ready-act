import { forwardRef, useEffect } from 'react';
import './location.module.css';
import { useState, useContext } from 'react';
import { arrowLeft } from '../../assets/icons/svg-icons';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';


const { kakao } = window;

function Location({ title }, ref) {

  // 이전에 관리하던 모든 상태는 이제 직접 관리하지 않고 App에서 관리합니다.
  // Location 페이지 컴포넌트는 AppContext로부터 상태 값을 읽고 쓸 수 있습니다.
  const { updateCreateRoomForm } = useContext(AppContext);
  /* -------------------------------------------------------------------------- */

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
    // console.log(infowindow);

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
          // console.log(detailAddr);
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

  useEffect(() => {
    // console.log(data);
    updateCreateRoomForm('meetingPoint', data);

    // useEffect를 써서 data가 바뀔때마다 실행시키겠다
  }, [data])



  // const handleSetLocation = () => {
  //   // ...
  //   // Kakao Map API에서 사용자가 선택한 주소 정보 값을 상태에 업데이트
  //   // 상태가 스냅샷처럼 작동한다 : 상태는 다음번 함수가 실행될때 (리랜더될때) 바뀐다. 당장이 아니라 나중에 바뀐다. =>useEffect 사용
  //   updateCreateRoomForm('meetingPoint', data);
  // };
  /* -------------------------------------------------------------------------- */


  return (
    <div className='h-full'>

      <div className="relative h-12">
        {/* <Link to="/home">
          <img src="/favicon.png" alt="공구룸 로고" className="w-12 m-auto" />
        </Link> */}

        <p className='text-center py-3'>지도에서 위치 확인</p>

        {/* 사용자가 지도에서 장소를 선택한 후 다시 CreateRoom 페이지로 이동하는 기능이 필요합니다. */}
        <Link to="/createroom">
          <img src={arrowLeft} alt="뒤로 가기" className="absolute top-3" />
        </Link>
      </div>

      <div className="map_wrap" >
        <div id="map" className='w-full h-[400px]'></div>
        <div className="hAddr" >
          <span className="title" >{title}</span>

          <span id="centerAddr" ref={ref} >{data}</span>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Location);