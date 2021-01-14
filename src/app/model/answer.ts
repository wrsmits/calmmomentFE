import {AppUser} from './appuser';

export interface Answer {
    id: number;
    name: string;
    writer: AppUser;
}
