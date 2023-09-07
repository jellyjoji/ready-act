import spot from '@/assets/spot.svg';
import {positions} from '@/data/positions';

const {kakao} = window;

export function mapMark() {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.57157200866145, 126.9763416696016),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);
  positions;

  const imageSrc = spot;

  for (var i = 0; i < positions.length; i++) {
    const imageSize = new kakao.maps.Size(20, 20);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
      title: positions[i].title,
      image: markerImage,
    });
  }
}
