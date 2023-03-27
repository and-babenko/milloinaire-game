/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  IRulesState,
  LoadingStatus,
} from '../types';
import { rulesUrl } from '../config';

const initialState : IRulesState = {
  rounds: 0,
  currentRound: 1,
  roundsPrizes: [],
  loadingIndicator: LoadingStatus.UNSET,
};

export const getRules = createAsyncThunk(
  'rules/getrules',
  async () => {
    const rulesResponse = await fetch(rulesUrl);
    const response = await rulesResponse.json();
    return response;
  },
);

export const rulesStore = createSlice({
  name: 'rules',
  initialState,
  reducers: {
    updateLevel: (state) => {
      state.currentRound += 1;
    },
    startNewGame: (state) => {
      state.currentRound = 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRules.pending, (state) => {
      state.rounds = 0;
      state.roundsPrizes = [];
      state.loadingIndicator = LoadingStatus.LOADING;
    });
    builder.addCase(getRules.rejected, (state) => {
      state.rounds = 0;
      state.roundsPrizes = [];
      state.currentRound = 1;
      state.loadingIndicator = LoadingStatus.ERROR;
    });
    builder.addCase(getRules.fulfilled, (state, action) => {
      state.loadingIndicator = LoadingStatus.SUCCESS;
      const { rounds, roundsPrizes } = action.payload;
      state.rounds = rounds;
      state.roundsPrizes = roundsPrizes;
    });
  },
});

export const { updateLevel, startNewGame } = rulesStore.actions;
export const rulesSelector = (state: RootState) => state.rulesReducer;
export const getCurrentRound = (state: RootState) => state.rulesReducer.currentRound;
export const getTotalRounds = (state: RootState) => state.rulesReducer.rounds;
export const getRoundPrizes = (state: RootState) => state.rulesReducer.roundsPrizes;
// eslint-disable-next-line max-len
export const getPrize = (state: RootState) => state.rulesReducer.roundsPrizes[state.rulesReducer.currentRound - 1];

export const rulesReducer = rulesStore.reducer;
