import { h } from 'preact';
import styled from 'styled-components';
import { useEffect } from 'preact/hooks';
import { initialize } from '../data/Map';
import { useRecoilValue } from 'recoil';
import { getLocation } from '../state/MapState';

const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex: 1;
`;

const MapView = () => {
  const defaultLocation = useRecoilValue(getLocation);
  useEffect(() => {
    initialize('map', defaultLocation);
  }, []);

  return <Container id="map"></Container>;
};

export default MapView;
