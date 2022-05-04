import { Fragment, h } from 'preact';
import HelloWorld from './components/HelloWorld';
import MapView from './components/MapView';

function App() {
  return (
    <Fragment>
      <MapView />
      <HelloWorld />
    </Fragment>
  );
}

export default App;
