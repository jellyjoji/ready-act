import {useEffect} from 'react';
import {mapMark} from './mapMark';

function Map() {
  useEffect(() => {
    mapMark();
  }, []);

  return <div id="map" className="w-full h-[65vh] my-3"></div>;
}

export default Map;
