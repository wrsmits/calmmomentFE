import {Answer} from './answer';
import {BooleanQuestion} from './booleanquestion';

export interface Booleananswer extends Answer {
  answerGiven: boolean;
  answerQuestion: BooleanQuestion;
}
