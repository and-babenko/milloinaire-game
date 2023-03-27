import React, { lazy } from 'react';
import { Routes, Route } from 'react-router';

const StartResultPage = lazy(
  () => import(/* webpackChunkName: "StartPage" */ './StartPage'),
);
const QuestionsPage = lazy(
  () => import(/* webpackChunkName: "QuestionsPage" */ './QuestionsPage'),
);
const NotFoundPage = lazy(
  () => import(/* webpackChunkName: "NotFoundPage" */ './NotFoundPage'),
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<StartResultPage />} />
      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/results" element={<StartResultPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default Routing;
