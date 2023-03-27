export { default as QuestionComponent } from './components/QuestionComponent';

export { default as RoundsComponent } from './components/RoundsComponent';

export { questionsReducer, getQuestions, questionsSelector } from './store/questionsSlice';

export {
  getRules, rulesReducer, rulesSelector, getPrize,
} from './store/rulesSlice';
