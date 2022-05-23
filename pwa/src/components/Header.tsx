import { h } from 'preact';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

function Header() {
  return (
    <Container>
      <a href="/">Home</a> | <a href="/map">Map</a>
    </Container>
  );
}

export default Header;
