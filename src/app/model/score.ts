import {AppUser} from './appuser';

export interface Score {
  id: number;
  givenScore: number;
  feelScore: number;
  givenBy: AppUser;
  helpful: boolean;
  tipDo: string;
  tipDont: string;
}
