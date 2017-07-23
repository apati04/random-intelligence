import { combineReducers } from 'redux';
import QuizReducer from './quiz_reducer';

const rootReducer = combineReducers({
  quiz: QuizReducer
});

export default rootReducer;
