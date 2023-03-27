import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { questionsReducer, rulesReducer } from 'modules/QuestionModel';

export const rootReducer = combineReducers({
  questionsReducer,
  rulesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
