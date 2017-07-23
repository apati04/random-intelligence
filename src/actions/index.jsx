import axios from 'axios';
import { FETCH_QUIZ } from '../actions/types';


const ROOT_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

export function generateQuiz(categoryId) {
  const url = `${ROOT_URL}&category=${categoryId}`;
  const request = axios.get(url);

  return {
    type: FETCH_QUIZ,
    payload: request
  }
}
