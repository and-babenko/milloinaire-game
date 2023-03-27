import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { questionsReducer, rulesReducer } from 'modules/QuestionModel';

const rootReducer = combineReducers({
  questionsReducer,
  rulesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const presistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: presistedReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
