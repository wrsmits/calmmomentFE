import {Score} from './score';
import {AppUser} from './appuser';
import {Answer} from './answer';
import {Situation} from './situation';

export interface Tip {
  tipId: number;
  tipName: string;
  tipTitle: string;
  tipScore: Score;
  tipWriter: AppUser;
  tipPublished: boolean;
  tipDate: Date;
// tipAnswer: Answer;
  tipSituation: Situation;
}
