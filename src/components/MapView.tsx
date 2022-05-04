import { h } from 'preact';
import styled from 'styled-components';
import { useEffect } from 'preact/hooks';
import { initialize } from '../Map';

const MapContainer = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex: 1;
`;

const MapView = () => {
  useEffect(() => {
    initialize('map');
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default MapView;
