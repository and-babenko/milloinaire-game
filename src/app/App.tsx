import React from 'react';

import Routing from 'pages/routes';
import withProviders from './providers';

import './styles/vars.css';
import './styles/global.css';

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default withProviders(App);
