import {AppUser} from './appuser';
import {Question} from './question';

export interface Situation {
  situationId: number;
  situationName: string;
  situationTitle: string;
  situationWriter: AppUser;
  situationImage: string;
  situationQuestion: Question[];
}
