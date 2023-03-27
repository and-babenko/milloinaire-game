import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../store';

const withStore = (component: () => React.ReactNode) => function Stored() {
  return <Provider store={store}>{component()}</Provider>;
};

export default withStore;
