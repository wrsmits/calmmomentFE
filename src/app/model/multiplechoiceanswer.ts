import {Answer} from './answer';
import {MultChoiceQuest} from './multiplechoicequestion';

export interface MultChoiceAnswer extends Answer {
  answerGiven: string;
  answerQuestion: MultChoiceQuest;
}
