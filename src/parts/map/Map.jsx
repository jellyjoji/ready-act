import {useEffect} from 'react';
import {mapMark} from './mapMark';

function Map() {
  useEffect(() => {
    mapMark();
  }, []);

  return <div id="map" className="w-full h-[750px] my-3"></div>;
}

export default Map;
