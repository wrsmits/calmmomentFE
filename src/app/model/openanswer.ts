import {Answer} from './answer';
import {OpenQuestion} from './openquestion';

export interface OpenAnswer extends Answer {
  givenAnswer: string;
  answerQuestion: OpenQuestion;
}
