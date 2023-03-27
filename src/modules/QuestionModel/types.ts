export interface IAnswerItem {
  text: string
  isCorrect: boolean
}

export interface IQuestionItem {
  id: number;
  text: string;
  difficulty: number;
  answers: IAnswerItem[];
}

export interface IQuestionsState {
  questions: IQuestionItem[],
  loadingIndicator: LoadingStatus
}

export interface IRulesState {
  rounds: number,
  currentRound: number;
  roundsPrizes: number[],
  loadingIndicator: LoadingStatus
}

export interface IProgressState {
  round: number,
  prize: number,
}

export enum LoadingStatus {
  LOADING = 'pending',
  SUCCESS = 'completed',
  ERROR = 'rejected',
  UNSET = '',
}
