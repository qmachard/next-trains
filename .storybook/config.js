import { configure, addParameters, addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import './style.scss';
import 'index.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Decorators
addDecorator(jsxDecorator);

// Option defaults.
addParameters({
  options: {
    theme: {
      brandTitle: 'NextTrain Storybook'
    },
    showRoots: true,
  },
});

configure(loadStories, module);
