import {Question} from './question';

export interface MultChoiceQuest extends Question {
  questionAnswer: string[];
}
