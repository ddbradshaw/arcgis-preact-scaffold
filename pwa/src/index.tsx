import { h, render } from 'preact';
import 'preact/devtools';
import App from './App.js';

import './styles/design-token.css';
import './index.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

const root = document.getElementById('root');

if (root) {
  render(<App />, root);
}
