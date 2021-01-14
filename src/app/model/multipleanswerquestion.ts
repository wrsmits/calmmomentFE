import {Question} from './question';

export interface MultAnsQuestion extends Question {
  questionAnswer: string[];
}
