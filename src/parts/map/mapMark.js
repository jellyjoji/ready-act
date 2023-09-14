import {pb} from '@/api/pocketbase';
import spot from '@/assets/icons/spot.svg';

const {kakao} = window;

export async function mapMark() {
  const readRecordList = await pb.collection('products').getList();
  const meetPoints = readRecordList.items.map((item) => ({
    meetingPoint: item.meetingPoint,
  }));

  const readRecordItems = meetPoints;

  if (kakao) {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.57157200866145, 126.9763416696016),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();

    readRecordItems.map(({meetingPoint}) => {
      geocoder.addressSearch(meetingPoint, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const {y, x} = result[0];
          let coords = new kakao.maps.LatLng(y, x);

          const imageSrc = spot;
          const imageSize = new kakao.maps.Size(32, 32);
          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          new kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage,
          });

          map.setCenter(coords);
        }
      });
    });
  } else {
    console.error('kakao에 접근할 수 없습니다.');
  }
}
