import {AppUser} from './appuser';
import {Answer} from './answer';

export interface Question {
  questionId: number;
  questionName: string;
  questionWriter: AppUser;
  questionCaption: string;
// questionAnswer: Answer[];
  questionType: string;
}
