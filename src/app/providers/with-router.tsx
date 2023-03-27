import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';

import Spinner from 'shared/ui/Spinner';

const withRouter = (component: () => React.ReactNode) => function Routed() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </BrowserRouter>
  );
};

export default withRouter;
