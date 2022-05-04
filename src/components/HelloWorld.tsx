import { h } from 'preact';
import styled from 'styled-components';
import { zoomTo } from '../Map';

const HelloWrapper = styled.div`
  padding: 20px;
  z-index: 1000;
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
`;

const HelloWorld = () => {
  const clickHandler = () => {
    zoomTo([-83.04691283484665, 42.33458564083483]);
  };
  return (
    <HelloWrapper>
      Hello World <button onClick={clickHandler}>Click Me</button>
    </HelloWrapper>
  );
};

export default HelloWorld;
