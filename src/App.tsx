import { h } from 'preact';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'preact/hooks';
import { Router, Route } from 'preact-router';
import Home from './pages/Home';
import Map from './pages/Map';
import Header from './components/Header';
import styled from 'styled-components';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';
import { IntlProvider } from 'preact-i18n';
import definition from './il8n/fr.json';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// TODO: Move CDN path to local assets folder
// See: https://shoelace.style/getting-started/installation?id=local-installation
setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/',
);

const FEATURES_ENDPOINT =
  'https://cdn.growthbook.io/api/features/key_prod_28435d0a17eb3fcd';

// Create a GrowthBook instance
const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key,
      variationId: result.variationId,
    });
  },
});

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

function App() {
  useEffect(() => {
    // Fetch the feature flag definition
    fetch(FEATURES_ENDPOINT)
      .then((res) => res.json())
      .then((json) => {
        growthbook.setFeatures(json.features);
      });

    // TODO - gather the state of the user
    // This can be a custom object defining anything
    // meaningful about the user. Example:
    // {
    //   id: 'foo',
    //   deviceId: 'foo',
    //   company: 'foo',
    //   loggedIn: true,
    //   employee: true,
    //   country: 'foo',
    //   browser: 'foo',
    //   url: 'foo',
    // }
    growthbook.setAttributes({});
  }, []);

  return (
    <IntlProvider definition={definition}>
      <GrowthBookProvider growthbook={growthbook}>
        <RecoilRoot>
          <Container className="theme-dark sl-theme-dark">
            <Header />
            <Router>
              <Route path="/" component={Home} />
              <Route path="/map" component={Map} />
            </Router>
          </Container>
        </RecoilRoot>
      </GrowthBookProvider>
    </IntlProvider>
  );
}

export default App;
