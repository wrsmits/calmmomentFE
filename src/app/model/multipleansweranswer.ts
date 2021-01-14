import {Answer} from './answer';
import {MultAnsQuestion} from './multipleanswerquestion';

export interface MultAnsAnswer extends Answer {
  answerGiven: string[];
  answerQuestion: MultAnsQuestion;
}
