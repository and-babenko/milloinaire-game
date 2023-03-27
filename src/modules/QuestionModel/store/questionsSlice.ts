/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  IQuestionItem,
  IQuestionsState,
  LoadingStatus,
} from '../types';
import { questionsUrl } from '../config';

const initialState : IQuestionsState = {
  questions: [],
  loadingIndicator: LoadingStatus.UNSET,
};

export const getQuestions = createAsyncThunk(
  'questions/getquestions',
  async () => {
    const questionsResponse = await fetch(questionsUrl);
    const response = await questionsResponse.json();
    return response;
  },
);

export const questionsStore = createSlice({
  name: 'questions',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state) => {
      state.loadingIndicator = LoadingStatus.LOADING;
      state.questions = [];
    });
    builder.addCase(getQuestions.rejected, (state) => {
      state.loadingIndicator = LoadingStatus.ERROR;
      state.questions = [];
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.loadingIndicator = LoadingStatus.SUCCESS;
      const questions:IQuestionItem[] = action.payload;
      questions.sort((a, b) => (a.difficulty - b.difficulty));
      state.questions = questions;
    });
  },
});

export const questionsSelector = (state: RootState) => state.questionsReducer;

// eslint-disable-next-line max-len
export const getQuestionById = (idx: number) => (state: RootState) => state.questionsReducer.questions[idx - 1];

export const questionsReducer = questionsStore.reducer;
