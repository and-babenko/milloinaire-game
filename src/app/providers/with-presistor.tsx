import React from 'react';
import { persistor } from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';

const withPresistor = (component: () => React.ReactNode) => function Presisted() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {component()}
    </PersistGate>
  );
};

export default withPresistor;
